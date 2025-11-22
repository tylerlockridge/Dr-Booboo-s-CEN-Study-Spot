/**
 * CEN Exam - Respiratory Questions
 * Category: Respiratory Emergencies
 * Total Questions: 50+
 * Last Updated: 2025-11-22
 */

const respiratoryQuestions = [
    {
        id: "RESP001",
        question: "A patient with COPD presents with increased dyspnea, productive cough with green sputum, and fever. ABG shows pH 7.32, PaCO2 58, HCO3 28. What is the primary acid-base disturbance?",
        options: [
            "Respiratory acidosis with metabolic compensation",
            "Metabolic acidosis with respiratory compensation",
            "Respiratory alkalosis",
            "Metabolic alkalosis"
        ],
        correct: 0,
        explanation: "pH < 7.35 indicates acidosis. PaCO2 > 45 indicates respiratory cause. Elevated HCO3 indicates metabolic compensation for chronic respiratory acidosis  .",
        category: "Respiratory",
        subcategory: "Acid-Base Disorders",
        difficulty: "hard",
        references: ["ABG Interpretation Guide", "Emergency Nursing Core Curriculum"]
    },
    {
        id: "RESP002",
        question: "What is the first-line treatment for a patient experiencing an acute asthma exacerbation?",
        options: [
            "Inhaled corticosteroids",
            "Albuterol nebulizer",
            "Magnesium sulfate IV",
            "Intubation"
        ],
        correct: 1,
        explanation: "Albuterol (short-acting beta-2 agonist) is the first-line treatment for acute asthma exacerbations. It provides rapid bronchodilation  .",
        category: "Respiratory",
        subcategory: "Asthma",
        difficulty: "easy",
        references: ["NAEPP Asthma Guidelines"]
    },
    {
        id: "RESP003",
        question: "A trauma patient has absent breath sounds on the right side, tracheal deviation to the left, and hypotension. What is the immediate intervention?",
        options: [
            "Chest X-ray",
            "Needle decompression",
            "Chest tube insertion",
            "Intubation"
        ],
        correct: 1,
        explanation: "These are signs of tension pneumothorax, a life-threatening emergency. Immediate needle decompression at the 2nd intercostal space, midclavicular line is required before imaging  .",
        category: "Respiratory",
        subcategory: "Traumatic Injuries",
        difficulty: "medium",
        references: ["ATLS Guidelines", "TNCC Provider Manual"]
    },
    {
        id: "RESP004",
        question: "Which finding on chest X-ray is most consistent with pulmonary edema?",
        options: [
            "Hyperinflation and flattened diaphragm",
            "Bilateral infiltrates with Kerley B lines",
            "Unilateral pleural effusion",
            "Cavitary lesions"
        ],
        correct: 1,
        explanation: "Pulmonary edema presents with bilateral infiltrates (butterfly pattern) and Kerley B lines representing interstitial fluid accumulation  .",
        category: "Respiratory",
        subcategory: "Pulmonary Edema",
        difficulty: "medium",
        references: ["Chest Radiology: The Essentials"]
    },
    {
        id: "RESP005",
        question: "A patient with suspected pulmonary embolism has a Wells score of 6. What is the most appropriate next step?",
        options: [
            "D-dimer test",
            "CT pulmonary angiography",
            "Ventilation-perfusion scan",
            "Lower extremity ultrasound"
        ],
        correct: 1,
        explanation: "A Wells score ≥4 indicates high probability for PE. CT pulmonary angiography (CTPA) is the gold standard diagnostic test and should be performed immediately  .",
        category: "Respiratory",
        subcategory: "Pulmonary Embolism",
        difficulty: "medium",
        references: ["AHA PE Guidelines", "Emergency Medicine Practice"]
    }
    // ... Add remaining 45+ respiratory questions here
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = respiratoryQuestions;
}
