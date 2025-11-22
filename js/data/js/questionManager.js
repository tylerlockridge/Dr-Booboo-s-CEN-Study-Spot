/**
 * Question Manager - Core Logic for Quiz Functionality
 * Handles question flow, scoring, and user interactions
 */

class QuestionManager {
    constructor(questions) {
        this.allQuestions = questions;
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.startTime = null;
        this.endTime = null;
        this.mode = 'practice'; // practice, timed, category
        this.settings = this.loadSettings();
    }

    // Initialize quiz with settings
    initializeQuiz(settings = {}) {
        this.mode = settings.mode || 'practice';
        this.settings = { ...this.settings, ...settings };
        
        // Select questions based on settings
        if (settings.category && settings.category !== 'all') {
            this.currentQuestions = QuestionBank.getByCategory(settings.category);
        } else if (settings.difficulty) {
            this.currentQuestions = QuestionBank.getByDifficulty(settings.difficulty);
        } else {
            this.currentQuestions = [...this.allQuestions];
        }

        // Shuffle if random mode
        if (settings.randomize) {
            this.shuffleQuestions();
        }

        // Limit question count
        if (settings.questionCount) {
            this.currentQuestions = this.currentQuestions.slice(0, settings.questionCount);
        }

        this.currentIndex = 0;
        this.userAnswers = new Array(this.currentQuestions.length).fill(null);
        this.score = 0;
        this.startTime = new Date();
        
        this.saveProgress();
        return this.currentQuestions.length;
    }

    // Shuffle questions
    shuffleQuestions() {
        for (let i = this.currentQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentQuestions[i], this.currentQuestions[j]] = 
            [this.currentQuestions[j], this.currentQuestions[i]];
        }
    }

    // Get current question
    getCurrentQuestion() {
        return this.currentQuestions[this.currentIndex];
    }

    // Submit answer
    submitAnswer(answerIndex) {
        const currentQuestion = this.getCurrentQuestion();
        this.userAnswers[this.currentIndex] = {
            questionId: currentQuestion.id,
            selected: answerIndex,
            correct: currentQuestion.correct,
            isCorrect: answerIndex === currentQuestion.correct,
            timestamp: new Date()
        };

        if (answerIndex === currentQuestion.correct) {
            this.score++;
        }

        this.saveProgress();
        return this.userAnswers[this.currentIndex];
    }

    // Navigation
    nextQuestion() {
        if (this.currentIndex < this.currentQuestions.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    }

    previousQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return true;
        }
        return false;
    }

    goToQuestion(index) {
        if (index >= 0 && index < this.currentQuestions.length) {
            this.currentIndex = index;
            return true;
        }
        return false;
    }

    // Flag question for review
    flagQuestion() {
        const currentQuestion = this.getCurrentQuestion();
        if (!this.settings.flaggedQuestions) {
            this.settings.flaggedQuestions = [];
        }
        
        const index = this.settings.flaggedQuestions.indexOf(currentQuestion.id);
        if (index === -1) {
            this.settings.flaggedQuestions.push(currentQuestion.id);
        } else {
            this.settings.flaggedQuestions.splice(index, 1);
        }
        
        this.saveSettings();
        return this.settings.flaggedQuestions.includes(currentQuestion.id);
    }

    // Complete quiz
    completeQuiz() {
        this.endTime = new Date();
        const results = this.calculateResults();
        this.saveResults(results);
        return results;
    }

    // Calculate results
    calculateResults() {
        const totalQuestions = this.currentQuestions.length;
        const correctAnswers = this.score;
        const incorrectAnswers = totalQuestions - correctAnswers;
        const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
        const timeTaken = this.endTime - this.startTime;
        const timePerQuestion = timeTaken / totalQuestions;

        // Category breakdown
        const categoryBreakdown = {};
        this.currentQuestions.forEach((question, index) => {
            const category = question.category;
            if (!categoryBreakdown[category]) {
                categoryBreakdown[category] = { total: 0, correct: 0 };
            }
            categoryBreakdown[category].total++;
            if (this.userAnswers[index]?.isCorrect) {
                categoryBreakdown[category].correct++;
            }
        });

        // Calculate category percentages
        Object.keys(categoryBreakdown).forEach(category => {
            const data = categoryBreakdown[category];
            data.percentage = ((data.correct / data.total) * 100).toFixed(2);
        });

        return {
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            percentage,
            passed: percentage >= 75, // CEN passing score
            timeTaken,
            timePerQuestion,
            categoryBreakdown,
            detailedAnswers: this.userAnswers,
            date: new Date().toISOString()
        };
    }

    // Local storage management
    saveProgress() {
        const progress = {
            currentIndex: this.currentIndex,
            userAnswers: this.userAnswers,
            score: this.score,
            startTime: this.startTime,
            questions: this.currentQuestions.map(q => q.id)
        };
        localStorage.setItem('cenExamProgress', JSON.stringify(progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('cenExamProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentIndex = progress.currentIndex;
            this.userAnswers = progress.userAnswers;
            this.score = progress.score;
            this.startTime = new Date(progress.startTime);
            return true;
        }
        return false;
    }

    clearProgress() {
        localStorage.removeItem('cenExamProgress');
    }

    saveSettings() {
        localStorage.setItem('cenExamSettings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('cenExamSettings');
        return saved ? JSON.parse(saved) : {
            theme: 'light',
            showExplanations: true,
            randomize: true,
            flaggedQuestions: []
        };
    }

    saveResults(results) {
        let history = JSON.parse(localStorage.getItem('cenExamHistory') || '[]');
        history.push(results);
        // Keep only last 50 attempts
        if (history.length > 50) {
            history = history.slice(-50);
        }
        localStorage.setItem('cenExamHistory', JSON.stringify(history));
    }

    getHistory() {
        return JSON.parse(localStorage.getItem('cenExamHistory') || '[]');
    }

    // Export results
    exportResults(format = 'json') {
        const results = this.getHistory();
        if (format === 'json') {
            return JSON.stringify(results, null, 2);
        } else if (format === 'csv') {
            return this.convertToCSV(results);
        }
    }

    convertToCSV(results) {
        const headers = ['Date', 'Total Questions', 'Correct', 'Percentage', 'Passed', 'Time (ms)'];
        const rows = results.map(r => [
            r.date,
            r.totalQuestions,
            r.correctAnswers,
            r.percentage,
            r.passed,
            r.timeTaken
        ]);
        
        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuestionManager;
}
