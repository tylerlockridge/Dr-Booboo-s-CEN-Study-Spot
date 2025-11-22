/**
 * CEN Exam - Cardiovascular Questions
 * Category: Cardiovascular Emergencies
 * Total Questions: 60+
 * Last Updated: 2025-11-22
 */

const cardiovascularQuestions = [
    {
        id: "CV001",
        question: "A 55-year-old male presents with crushing chest pain radiating to the left arm, diaphoresis, and nausea. ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely diagnosis?",
        options: [
            "Anterior wall MI",
            "Inferior wall MI",
            "Lateral wall MI",
            "Posterior wall MI"
        ],
        correct: 1,
        explanation: "ST-segment elevation in leads II, III, and aVF indicates an inferior wall myocardial infarction. These leads view the inferior surface of the heart, which is typically supplied by the right coronary artery .",
        category: "Cardiovascular",
        subcategory: "Acute Coronary Syndrome",
        difficulty: "medium",
        references: ["AHA ACLS Guidelines 2024", "Emergency Nursing Core Curriculum"]
    },
    {
        id: "CV002",
        question: "What is the first-line medication for symptomatic bradycardia in a hemodynamically stable patient?",
        options: [
            "Epinephrine",
            "Atropine",
            "Dopamine",
            "Transcutaneous pacing"
        ],
        correct: 1,
        explanation: "Atropine 0.5-1mg IV is the first-line medication for symptomatic bradycardia. It blocks vagal effects on the SA and AV nodes, increasing heart rate .",
        category: "Cardiovascular",
        subcategory: "Dysrhythmias",
        difficulty: "easy",
        references: ["ACLS Provider Manual 2024"]
    },
    {
        id: "CV003",
        question: "A patient in ventricular fibrillation receives defibrillation. What is the recommended energy level for the first biphasic shock?",
        options: [
            "120-200 joules",
            "200-300 joules",
            "300-360 joules",
            "360 joules only"
        ],
        correct: 0,
        explanation: "For biphasic defibrillators, the initial shock should be 120-200 joules. If using a monophasic defibrillator, 360 joules is recommended  .",
        category: "Cardiovascular",
        subcategory: "Cardiac Arrest",
        difficulty: "medium",
        references: ["AHA ACLS Guidelines 2024"]
    },
    {
        id: "CV004",
        question: "Which medication should be avoided in patients with acute decompensated heart failure and hypotension?",
        options: [
            "Dobutamine",
            "Nitroglycerin",
            "Furosemide",
            "Morphine"
        ],
        correct: 1,
        explanation: "Nitroglycerin is a vasodilator that can further decrease blood pressure and should be avoided in hypotensive patients. Dobutamine may be used for inotropic support in hypotensive heart failure patients  .",
        category: "Cardiovascular",
        subcategory: "Heart Failure",
        difficulty: "medium",
        references: ["ACC/AHA Heart Failure Guidelines"]
    },
    {
        id: "CV005",
        question: "A patient presents with sudden onset tearing chest pain radiating to the back. Blood pressure is 180/110 mmHg in the right arm and 140/90 mmHg in the left arm. What is the most likely diagnosis?",
        options: [
            "Acute MI",
            "Pulmonary embolism",
            "Aortic dissection",
            "Pericarditis"
        ],
        correct: 2,
        explanation: "Tearing chest pain radiating to the back with blood pressure differential between arms is classic for aortic dissection. This is a life-threatening emergency requiring immediate surgical consultation  .",
        category: "Cardiovascular",
        subcategory: "Vascular Emergencies",
        difficulty: "medium",
        references: ["Emergency Medicine: A Comprehensive Study Guide"]
    }
    // ... Add remaining 55+ cardiovascular questions here
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cardiovascularQuestions;
}
