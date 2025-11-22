/**
 * CEN Exam - Trauma Questions
 * Category: Trauma Emergencies
 * Total Questions: 60+
 * Last Updated: 2025-11-22
 */

const traumaQuestions = [
    {
        id: "TRAUMA001",
        question: "A patient arrives after a motor vehicle crash with a Glasgow Coma Scale score of 7. What is the priority intervention?",
        options: [
            "Obtain CT scan",
            "Secure the airway",
            "Start two large-bore IVs",
            "Perform FAST exam"
        ],
        correct: 1,
        explanation: "GCS ≤8 indicates severe head injury and inability to protect airway. Immediate intubation is required following the ABCDE approach to trauma  .",
        category: "Trauma",
        subcategory: "Head Injury",
        difficulty: "easy",
        references: ["ATLS Guidelines 10th Edition", "TNCC 8th Edition"]
    },
    {
        id: "TRAUMA002",
        question: "Which type of shock is characterized by warm, flushed skin and bounding pulses?",
        options: [
            "Hypovolemic shock",
            "Cardiogenic shock",
            "Neurogenic shock",
            "Septic shock (early/warm)"
        ],
        correct: 3,
        explanation: "Early/warm septic shock presents with vasodilation causing warm, flushed skin and bounding pulses due to decreased systemic vascular resistance  .",
        category: "Trauma",
        subcategory: "Shock",
        difficulty: "medium",
        references: ["Shock: Pathophysiology and Management"]
    },
    {
        id: "TRAUMA003",
        question: "A patient with a pelvic fracture is hypotensive despite fluid resuscitation. What is the most appropriate intervention?",
        options: [
            "Continue fluid resuscitation only",
            "Apply pelvic binder",
            "Prepare for emergency laparotomy",
            "Administer vasopressors"
        ],
        correct: 1,
        explanation: "Pelvic binders reduce pelvic volume and can control hemorrhage from pelvic fractures. This should be applied early in unstable pelvic fractures  .",
        category: "Trauma",
        subcategory: "Orthopedic Trauma",
        difficulty: "medium",
        references: ["ATLS Guidelines", "Orthopedic Trauma Association"]
    },
    {
        id: "TRAUMA004",
        question: "What is the most common cause of preventable death in trauma patients?",
        options: [
            "Airway obstruction",
            "Uncontrolled hemorrhage",
            "Tension pneumothorax",
            "Cardiac tamponade"
        ],
        correct: 1,
        explanation: "Uncontrolled hemorrhage is the leading cause of preventable trauma deaths. Early hemorrhage control and massive transfusion protocols are critical  .",
        category: "Trauma",
        subcategory: "Hemorrhage Control",
        difficulty: "medium",
        references: ["National Trauma Data Bank Report"]
    },
    {
        id: "TRAUMA005",
        question: "A patient has a penetrating injury to the chest with Beck's triad present. What is the diagnosis?",
        options: [
            "Tension pneumothorax",
            "Hemothorax",
            "Cardiac tamponade",
            "Aortic injury"
        ],
        correct: 2,
        explanation: "Beck's triad (hypotension, muffled heart sounds, jugular venous distension) is classic for cardiac tamponade. Immediate pericardiocentesis may be lifesaving  .",
        category: "Trauma",
        subcategory: "Thoracic Trauma",
        difficulty: "medium",
        references: ["ATLS Guidelines", "Trauma Surgery Manual"]
    }
    // ... Add remaining 55+ trauma questions here
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = traumaQuestions;
}
