// ========================================================
// MEDCHANIC.MD - 3,000 HIGH-YIELD ANKING IMAGING FLASHCARDS
// ========================================================

const FULL_FLASHCARD_DECK = [
  {
    "id": "card_1",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_3",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 3",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_4",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 4",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_5",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 5",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_6",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 6",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_7",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 7",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_8",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 8",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_9",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 9",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_10",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 10",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_11",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 11",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_12",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 12",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_13",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 13",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_14",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 14",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_15",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 15",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_16",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 16",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_17",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 17",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_18",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 18",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_19",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 19",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_20",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 20",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_21",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 21",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_22",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 22",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_23",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 23",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_24",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 24",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_25",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 25",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_26",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 26",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_27",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 27",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_28",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 28",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_29",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 29",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_30",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 30",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_31",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 31",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_32",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 32",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_33",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 33",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_34",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 34",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_35",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 35",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_36",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 36",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_37",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 37",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_38",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 38",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_39",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 39",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_40",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 40",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_41",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 41",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_42",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 42",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_43",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 43",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_44",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 44",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_45",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 45",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_46",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 46",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_47",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 47",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_48",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 48",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_49",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 49",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_50",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 50",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_51",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 51",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_52",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 52",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_53",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 53",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_54",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 54",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_55",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 55",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_56",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 56",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_57",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 57",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_58",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 58",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_59",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 59",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_60",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 60",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_61",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 61",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_62",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 62",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_63",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 63",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_64",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 64",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_65",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 65",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_66",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 66",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_67",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 67",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_68",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 68",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_69",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 69",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_70",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 70",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_71",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 71",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_72",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 72",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_73",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 73",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_74",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 74",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_75",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 75",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_76",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 76",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_77",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 77",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_78",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 78",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_79",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 79",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_80",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 80",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_81",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 81",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_82",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 82",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_83",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 83",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_84",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 84",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_85",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 85",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_86",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 86",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_87",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 87",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_88",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 88",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_89",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 89",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_90",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 90",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_91",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 91",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_92",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 92",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_93",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 93",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_94",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 94",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_95",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 95",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_96",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 96",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_97",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 97",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_98",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 98",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_99",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 99",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_100",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 100",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_101",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 101",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_102",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 102",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_103",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 103",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_104",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 104",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_105",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 105",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_106",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 106",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_107",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 107",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_108",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 108",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_109",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 109",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_110",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 110",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_111",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 111",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_112",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 112",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_113",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 113",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_114",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 114",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_115",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 115",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_116",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 116",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_117",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 117",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_118",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 118",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_119",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 119",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_120",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 120",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_121",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 121",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_122",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 122",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_123",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 123",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_124",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 124",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_125",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 125",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_126",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 126",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_127",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 127",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_128",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 128",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_129",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 129",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_130",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 130",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_131",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 131",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_132",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 132",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_133",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 133",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_134",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 134",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_135",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 135",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_136",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 136",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_137",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 137",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_138",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 138",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_139",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 139",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_140",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 140",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_141",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 141",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_142",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 142",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_143",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 143",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_144",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 144",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_145",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 145",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_146",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 146",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_147",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 147",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_148",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 148",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_149",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 149",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_150",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 150",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_151",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 151",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_152",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 152",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_153",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 153",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_154",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 154",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_155",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 155",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_156",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 156",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_157",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 157",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_158",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 158",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_159",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 159",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_160",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 160",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_161",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 161",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_162",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 162",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_163",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 163",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_164",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 164",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_165",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 165",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_166",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 166",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_167",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 167",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_168",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 168",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_169",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 169",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_170",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 170",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_171",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 171",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_172",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 172",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_173",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 173",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_174",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 174",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_175",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 175",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_176",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 176",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_177",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 177",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_178",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 178",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_179",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 179",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_180",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 180",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_181",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 181",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_182",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 182",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_183",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 183",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_184",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 184",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_185",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 185",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_186",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 186",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_187",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 187",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_188",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 188",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_189",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 189",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_190",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 190",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_191",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 191",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_192",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 192",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_193",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 193",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_194",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 194",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_195",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 195",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_196",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 196",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_197",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 197",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_198",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 198",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_199",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 199",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_200",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 200",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_201",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 201",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_202",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 202",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_203",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 203",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_204",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 204",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_205",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 205",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_206",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 206",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_207",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 207",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_208",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 208",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_209",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 209",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_210",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 210",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_211",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 211",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_212",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 212",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_213",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 213",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_214",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 214",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_215",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 215",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_216",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 216",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_217",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 217",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_218",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 218",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_219",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 219",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_220",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 220",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_221",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 221",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_222",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 222",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_223",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 223",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_224",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 224",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_225",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 225",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_226",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 226",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_227",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 227",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_228",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 228",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_229",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 229",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_230",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 230",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_231",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 231",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_232",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 232",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_233",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 233",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_234",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 234",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_235",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 235",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_236",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 236",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_237",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 237",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_238",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 238",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_239",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 239",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_240",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 240",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_241",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 241",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_242",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 242",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_243",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 243",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_244",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 244",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_245",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 245",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_246",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 246",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_247",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 247",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_248",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 248",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_249",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 249",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_250",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 250",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_251",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 251",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_252",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 252",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_253",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 253",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_254",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 254",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_255",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 255",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_256",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 256",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_257",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 257",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_258",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 258",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_259",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 259",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_260",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 260",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_261",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 261",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_262",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 262",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_263",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 263",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_264",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 264",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_265",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 265",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_266",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 266",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_267",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 267",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_268",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 268",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_269",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 269",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_270",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 270",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_271",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 271",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_272",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 272",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_273",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 273",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_274",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 274",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_275",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 275",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_276",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 276",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_277",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 277",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_278",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 278",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_279",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 279",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_280",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 280",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_281",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 281",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_282",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 282",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_283",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 283",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_284",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 284",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_285",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 285",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_286",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 286",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_287",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 287",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_288",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 288",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_289",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 289",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_290",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 290",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_291",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 291",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_292",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 292",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_293",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 293",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_294",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 294",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_295",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 295",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_296",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 296",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_297",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 297",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_298",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 298",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_299",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 299",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_300",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 300",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_301",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 301",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_302",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 302",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_303",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 303",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_304",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 304",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_305",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 305",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_306",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 306",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_307",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 307",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_308",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 308",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_309",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 309",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_310",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 310",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_311",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 311",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_312",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 312",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_313",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 313",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_314",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 314",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_315",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 315",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_316",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 316",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_317",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 317",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_318",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 318",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_319",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 319",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_320",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 320",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_321",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 321",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_322",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 322",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_323",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 323",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_324",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 324",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_325",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 325",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_326",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 326",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_327",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 327",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_328",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 328",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_329",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 329",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_330",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 330",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_331",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 331",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_332",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 332",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_333",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 333",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_334",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 334",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_335",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 335",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_336",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 336",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_337",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 337",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_338",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 338",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_339",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 339",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_340",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 340",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_341",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 341",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_342",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 342",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_343",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 343",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_344",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 344",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_345",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 345",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_346",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 346",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_347",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 347",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_348",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 348",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_349",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 349",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_350",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 350",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_351",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 351",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_352",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 352",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_353",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 353",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_354",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 354",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_355",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 355",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_356",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 356",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_357",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 357",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_358",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 358",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_359",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 359",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_360",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 360",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_361",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 361",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_362",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 362",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_363",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 363",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_364",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 364",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_365",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 365",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_366",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 366",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_367",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 367",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_368",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 368",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_369",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 369",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_370",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 370",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_371",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 371",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_372",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 372",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_373",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 373",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_374",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 374",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_375",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 375",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_376",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 376",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_377",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 377",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_378",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 378",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_379",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 379",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_380",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 380",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_381",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 381",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_382",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 382",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_383",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 383",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_384",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 384",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_385",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 385",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_386",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 386",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_387",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 387",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_388",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 388",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_389",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 389",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_390",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 390",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_391",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 391",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_392",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 392",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_393",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 393",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_394",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 394",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_395",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 395",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_396",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 396",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_397",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 397",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_398",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 398",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_399",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 399",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_400",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 400",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_401",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 401",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_402",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 402",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_403",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 403",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_404",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 404",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_405",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 405",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_406",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 406",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_407",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 407",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_408",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 408",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_409",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 409",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_410",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 410",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_411",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 411",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_412",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 412",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_413",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 413",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_414",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 414",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_415",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 415",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_416",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 416",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_417",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 417",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_418",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 418",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_419",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 419",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_420",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 420",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_421",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 421",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_422",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 422",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_423",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 423",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_424",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 424",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_425",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 425",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_426",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 426",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_427",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 427",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_428",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 428",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_429",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 429",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_430",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 430",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_431",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 431",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_432",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 432",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_433",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 433",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_434",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 434",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_435",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 435",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_436",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 436",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_437",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 437",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_438",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 438",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_439",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 439",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_440",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 440",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_441",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 441",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_442",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 442",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_443",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 443",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_444",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 444",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_445",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 445",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_446",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 446",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_447",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 447",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_448",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 448",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_449",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 449",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_450",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 450",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_451",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 451",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_452",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 452",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_453",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 453",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_454",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 454",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_455",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 455",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_456",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 456",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_457",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 457",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_458",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 458",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_459",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 459",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_460",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 460",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_461",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 461",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_462",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 462",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_463",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 463",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_464",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 464",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_465",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 465",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_466",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 466",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_467",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 467",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_468",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 468",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_469",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 469",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_470",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 470",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_471",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 471",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_472",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 472",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_473",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 473",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_474",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 474",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_475",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 475",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_476",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 476",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_477",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 477",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_478",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 478",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_479",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 479",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_480",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 480",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_481",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 481",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_482",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 482",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_483",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 483",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_484",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 484",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_485",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 485",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_486",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 486",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_487",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 487",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_488",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 488",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_489",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 489",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_490",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 490",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_491",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 491",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_492",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 492",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_493",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 493",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_494",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 494",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_495",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 495",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_496",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 496",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_497",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 497",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_498",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 498",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_499",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 499",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_500",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 500",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_501",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 501",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_502",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 502",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_503",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 503",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_504",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 504",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_505",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 505",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_506",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 506",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_507",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 507",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_508",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 508",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_509",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 509",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_510",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 510",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_511",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 511",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_512",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 512",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_513",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 513",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_514",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 514",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_515",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 515",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_516",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 516",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_517",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 517",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_518",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 518",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_519",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 519",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_520",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 520",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_521",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 521",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_522",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 522",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_523",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 523",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_524",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 524",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_525",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 525",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_526",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 526",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_527",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 527",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_528",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 528",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_529",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 529",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_530",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 530",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_531",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 531",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_532",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 532",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_533",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 533",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_534",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 534",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_535",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 535",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_536",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 536",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_537",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 537",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_538",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 538",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_539",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 539",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_540",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 540",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_541",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 541",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_542",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 542",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_543",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 543",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_544",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 544",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_545",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 545",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_546",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 546",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_547",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 547",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_548",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 548",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_549",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 549",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_550",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 550",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_551",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 551",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_552",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 552",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_553",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 553",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_554",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 554",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_555",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 555",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_556",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 556",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_557",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 557",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_558",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 558",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_559",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 559",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_560",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 560",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_561",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 561",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_562",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 562",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_563",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 563",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_564",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 564",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_565",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 565",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_566",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 566",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_567",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 567",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_568",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 568",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_569",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 569",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_570",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 570",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_571",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 571",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_572",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 572",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_573",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 573",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_574",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 574",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_575",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 575",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_576",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 576",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_577",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 577",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_578",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 578",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_579",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 579",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_580",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 580",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_581",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 581",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_582",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 582",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_583",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 583",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_584",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 584",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_585",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 585",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_586",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 586",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_587",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 587",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_588",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 588",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_589",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 589",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_590",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 590",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_591",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 591",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_592",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 592",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_593",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 593",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_594",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 594",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_595",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 595",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_596",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 596",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_597",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 597",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_598",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 598",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_599",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 599",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_600",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 600",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_601",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 601",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_602",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 602",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_603",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 603",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_604",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 604",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_605",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 605",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_606",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 606",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_607",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 607",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_608",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 608",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_609",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 609",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_610",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 610",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_611",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 611",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_612",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 612",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_613",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 613",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_614",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 614",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_615",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 615",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_616",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 616",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_617",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 617",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_618",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 618",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_619",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 619",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_620",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 620",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_621",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 621",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_622",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 622",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_623",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 623",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_624",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 624",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_625",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 625",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_626",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 626",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_627",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 627",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_628",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 628",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_629",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 629",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_630",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 630",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_631",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 631",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_632",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 632",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_633",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 633",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_634",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 634",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_635",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 635",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_636",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 636",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_637",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 637",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_638",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 638",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_639",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 639",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_640",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 640",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_641",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 641",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_642",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 642",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_643",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 643",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_644",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 644",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_645",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 645",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_646",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 646",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_647",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 647",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_648",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 648",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_649",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 649",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_650",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 650",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_651",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 651",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_652",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 652",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_653",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 653",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_654",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 654",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_655",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 655",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_656",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 656",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_657",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 657",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_658",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 658",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_659",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 659",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_660",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 660",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_661",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 661",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_662",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 662",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_663",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 663",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_664",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 664",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_665",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 665",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_666",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 666",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_667",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 667",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_668",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 668",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_669",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 669",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_670",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 670",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_671",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 671",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_672",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 672",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_673",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 673",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_674",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 674",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_675",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 675",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_676",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 676",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_677",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 677",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_678",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 678",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_679",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 679",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_680",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 680",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_681",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 681",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_682",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 682",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_683",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 683",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_684",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 684",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_685",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 685",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_686",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 686",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_687",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 687",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_688",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 688",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_689",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 689",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_690",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 690",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_691",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 691",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_692",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 692",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_693",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 693",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_694",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 694",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_695",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 695",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_696",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 696",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_697",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 697",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_698",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 698",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_699",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 699",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_700",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 700",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_701",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 701",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_702",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 702",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_703",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 703",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_704",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 704",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_705",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 705",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_706",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 706",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_707",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 707",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_708",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 708",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_709",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 709",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_710",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 710",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_711",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 711",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_712",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 712",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_713",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 713",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_714",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 714",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_715",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 715",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_716",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 716",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_717",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 717",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_718",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 718",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_719",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 719",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_720",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 720",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_721",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 721",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_722",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 722",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_723",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 723",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_724",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 724",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_725",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 725",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_726",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 726",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_727",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 727",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_728",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 728",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_729",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 729",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_730",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 730",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_731",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 731",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_732",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 732",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_733",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 733",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_734",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 734",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_735",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 735",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_736",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 736",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_737",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 737",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_738",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 738",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_739",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 739",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_740",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 740",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_741",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 741",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_742",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 742",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_743",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 743",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_744",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 744",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_745",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 745",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_746",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 746",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_747",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 747",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_748",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 748",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_749",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 749",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_750",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 750",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_751",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 751",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_752",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 752",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_753",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 753",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_754",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 754",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_755",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 755",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_756",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 756",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_757",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 757",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_758",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 758",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_759",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 759",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_760",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 760",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_761",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 761",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_762",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 762",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_763",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 763",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_764",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 764",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_765",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 765",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_766",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 766",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_767",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 767",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_768",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 768",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_769",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 769",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_770",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 770",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_771",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 771",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_772",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 772",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_773",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 773",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_774",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 774",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_775",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 775",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_776",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 776",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_777",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 777",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_778",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 778",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_779",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 779",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_780",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 780",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_781",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 781",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_782",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 782",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_783",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 783",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_784",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 784",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_785",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 785",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_786",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 786",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_787",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 787",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_788",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 788",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_789",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 789",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_790",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 790",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_791",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 791",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_792",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 792",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_793",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 793",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_794",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 794",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_795",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 795",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_796",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 796",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_797",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 797",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_798",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 798",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_799",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 799",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_800",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 800",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_801",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 801",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_802",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 802",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_803",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 803",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_804",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 804",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_805",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 805",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_806",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 806",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_807",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 807",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_808",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 808",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_809",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 809",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_810",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 810",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_811",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 811",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_812",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 812",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_813",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 813",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_814",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 814",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_815",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 815",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_816",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 816",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_817",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 817",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_818",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 818",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_819",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 819",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_820",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 820",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_821",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 821",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_822",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 822",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_823",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 823",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_824",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 824",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_825",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 825",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_826",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 826",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_827",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 827",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_828",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 828",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_829",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 829",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_830",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 830",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_831",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 831",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_832",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 832",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_833",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 833",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_834",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 834",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_835",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 835",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_836",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 836",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_837",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 837",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_838",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 838",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_839",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 839",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_840",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 840",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_841",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 841",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_842",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 842",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_843",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 843",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_844",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 844",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_845",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 845",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_846",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 846",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_847",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 847",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_848",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 848",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_849",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 849",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_850",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 850",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_851",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 851",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_852",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 852",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_853",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 853",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_854",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 854",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_855",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 855",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_856",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 856",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_857",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 857",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_858",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 858",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_859",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 859",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_860",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 860",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_861",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 861",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_862",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 862",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_863",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 863",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_864",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 864",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_865",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 865",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_866",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 866",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_867",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 867",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_868",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 868",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_869",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 869",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_870",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 870",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_871",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 871",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_872",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 872",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_873",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 873",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_874",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 874",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_875",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 875",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_876",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 876",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_877",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 877",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_878",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 878",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_879",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 879",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_880",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 880",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_881",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 881",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_882",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 882",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_883",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 883",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_884",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 884",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_885",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 885",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_886",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 886",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_887",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 887",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_888",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 888",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_889",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 889",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_890",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 890",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_891",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 891",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_892",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 892",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_893",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 893",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_894",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 894",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_895",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 895",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_896",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 896",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_897",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 897",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_898",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 898",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_899",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 899",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_900",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 900",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_901",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 901",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_902",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 902",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_903",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 903",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_904",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 904",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_905",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 905",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_906",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 906",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_907",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 907",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_908",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 908",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_909",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 909",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_910",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 910",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_911",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 911",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_912",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 912",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_913",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 913",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_914",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 914",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_915",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 915",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_916",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 916",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_917",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 917",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_918",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 918",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_919",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 919",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_920",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 920",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_921",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 921",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_922",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 922",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_923",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 923",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_924",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 924",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_925",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 925",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_926",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 926",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_927",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 927",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_928",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 928",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_929",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 929",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_930",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 930",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_931",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 931",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_932",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 932",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_933",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 933",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_934",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 934",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_935",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 935",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_936",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 936",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_937",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 937",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_938",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 938",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_939",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 939",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_940",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 940",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_941",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 941",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_942",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 942",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_943",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 943",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_944",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 944",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_945",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 945",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_946",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 946",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_947",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 947",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_948",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 948",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_949",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 949",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_950",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 950",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_951",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 951",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_952",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 952",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_953",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 953",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_954",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 954",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_955",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 955",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_956",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 956",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_957",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 957",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_958",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 958",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_959",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 959",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_960",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 960",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_961",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 961",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_962",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 962",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_963",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 963",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_964",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 964",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_965",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 965",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_966",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 966",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_967",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 967",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_968",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 968",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_969",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 969",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_970",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 970",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_971",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 971",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_972",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 972",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_973",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 973",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_974",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 974",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_975",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 975",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_976",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 976",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_977",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 977",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_978",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 978",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_979",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 979",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_980",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 980",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_981",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 981",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_982",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 982",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_983",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 983",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_984",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 984",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_985",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 985",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_986",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 986",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_987",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 987",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_988",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 988",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_989",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 989",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_990",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 990",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_991",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 991",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_992",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 992",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_993",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 993",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_994",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 994",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_995",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 995",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_996",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 996",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_997",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 997",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_998",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 998",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_999",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 999",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1000",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1000",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1001",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1001",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1002",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1002",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1003",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1003",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1004",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1004",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1005",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1005",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1006",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1006",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1007",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1007",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1008",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1008",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1009",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1009",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1010",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1010",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1011",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1011",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1012",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1012",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1013",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1013",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1014",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1014",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1015",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1015",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1016",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1016",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1017",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1017",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1018",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1018",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1019",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1019",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1020",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1020",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1021",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1021",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1022",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1022",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1023",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1023",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1024",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1024",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1025",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1025",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1026",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1026",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1027",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1027",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1028",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1028",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1029",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1029",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1030",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1030",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1031",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1031",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1032",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1032",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1033",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1033",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1034",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1034",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1035",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1035",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1036",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1036",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1037",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1037",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1038",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1038",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1039",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1039",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1040",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1040",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1041",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1041",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1042",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1042",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1043",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1043",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1044",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1044",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1045",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1045",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1046",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1046",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1047",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1047",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1048",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1048",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1049",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1049",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1050",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1050",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1051",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1051",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1052",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1052",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1053",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1053",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1054",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1054",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1055",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1055",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1056",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1056",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1057",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1057",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1058",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1058",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1059",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1059",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1060",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1060",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1061",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1061",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1062",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1062",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1063",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1063",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1064",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1064",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1065",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1065",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1066",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1066",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1067",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1067",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1068",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1068",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1069",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1069",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1070",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1070",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1071",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1071",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1072",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1072",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1073",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1073",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1074",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1074",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1075",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1075",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1076",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1076",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1077",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1077",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1078",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1078",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1079",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1079",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1080",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1080",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1081",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1081",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1082",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1082",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1083",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1083",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1084",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1084",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1085",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1085",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1086",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1086",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1087",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1087",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1088",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1088",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1089",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1089",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1090",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1090",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1091",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1091",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1092",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1092",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1093",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1093",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1094",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1094",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1095",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1095",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1096",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1096",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1097",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1097",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1098",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1098",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1099",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1099",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1100",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1100",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1101",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1101",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1102",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1102",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1103",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1103",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1104",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1104",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1105",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1105",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1106",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1106",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1107",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1107",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1108",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1108",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1109",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1109",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1110",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1110",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1111",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1111",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1112",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1112",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1113",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1113",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1114",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1114",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1115",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1115",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1116",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1116",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1117",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1117",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1118",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1118",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1119",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1119",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1120",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1120",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1121",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1121",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1122",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1122",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1123",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1123",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1124",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1124",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1125",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1125",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1126",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1126",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1127",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1127",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1128",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1128",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1129",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1129",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1130",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1130",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1131",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1131",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1132",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1132",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1133",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1133",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1134",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1134",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1135",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1135",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1136",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1136",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1137",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1137",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1138",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1138",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1139",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1139",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1140",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1140",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1141",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1141",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1142",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1142",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1143",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1143",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1144",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1144",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1145",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1145",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1146",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1146",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1147",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1147",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1148",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1148",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1149",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1149",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1150",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1150",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1151",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1151",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1152",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1152",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1153",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1153",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1154",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1154",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1155",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1155",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1156",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1156",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1157",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1157",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1158",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1158",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1159",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1159",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1160",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1160",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1161",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1161",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1162",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1162",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1163",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1163",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1164",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1164",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1165",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1165",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1166",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1166",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1167",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1167",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1168",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1168",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1169",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1169",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1170",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1170",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1171",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1171",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1172",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1172",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1173",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1173",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1174",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1174",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1175",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1175",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1176",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1176",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1177",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1177",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1178",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1178",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1179",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1179",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1180",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1180",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1181",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1181",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1182",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1182",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1183",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1183",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1184",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1184",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1185",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1185",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1186",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1186",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1187",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1187",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1188",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1188",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1189",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1189",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1190",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1190",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1191",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1191",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1192",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1192",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1193",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1193",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1194",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1194",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1195",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1195",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1196",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1196",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1197",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1197",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1198",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1198",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1199",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1199",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1200",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1200",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1201",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1201",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1202",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1202",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1203",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1203",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1204",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1204",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1205",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1205",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1206",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1206",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1207",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1207",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1208",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1208",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1209",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1209",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1210",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1210",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1211",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1211",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1212",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1212",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1213",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1213",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1214",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1214",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1215",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1215",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1216",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1216",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1217",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1217",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1218",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1218",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1219",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1219",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1220",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1220",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1221",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1221",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1222",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1222",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1223",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1223",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1224",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1224",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1225",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1225",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1226",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1226",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1227",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1227",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1228",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1228",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1229",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1229",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1230",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1230",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1231",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1231",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1232",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1232",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1233",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1233",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1234",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1234",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1235",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1235",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1236",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1236",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1237",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1237",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1238",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1238",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1239",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1239",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1240",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1240",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1241",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1241",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1242",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1242",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1243",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1243",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1244",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1244",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1245",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1245",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1246",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1246",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1247",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1247",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1248",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1248",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1249",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1249",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1250",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1250",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1251",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1251",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1252",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1252",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1253",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1253",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1254",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1254",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1255",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1255",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1256",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1256",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1257",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1257",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1258",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1258",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1259",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1259",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1260",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1260",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1261",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1261",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1262",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1262",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1263",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1263",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1264",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1264",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1265",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1265",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1266",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1266",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1267",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1267",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1268",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1268",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1269",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1269",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1270",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1270",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1271",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1271",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1272",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1272",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1273",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1273",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1274",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1274",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1275",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1275",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1276",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1276",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1277",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1277",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1278",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1278",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1279",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1279",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1280",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1280",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1281",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1281",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1282",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1282",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1283",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1283",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1284",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1284",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1285",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1285",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1286",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1286",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1287",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1287",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1288",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1288",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1289",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1289",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1290",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1290",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1291",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1291",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1292",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1292",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1293",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1293",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1294",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1294",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1295",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1295",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1296",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1296",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1297",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1297",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1298",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1298",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1299",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1299",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1300",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1300",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1301",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1301",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1302",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1302",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1303",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1303",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1304",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1304",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1305",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1305",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1306",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1306",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1307",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1307",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1308",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1308",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1309",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1309",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1310",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1310",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1311",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1311",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1312",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1312",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1313",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1313",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1314",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1314",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1315",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1315",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1316",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1316",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1317",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1317",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1318",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1318",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1319",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1319",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1320",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1320",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1321",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1321",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1322",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1322",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1323",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1323",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1324",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1324",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1325",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1325",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1326",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1326",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1327",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1327",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1328",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1328",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1329",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1329",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1330",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1330",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1331",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1331",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1332",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1332",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1333",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1333",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1334",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1334",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1335",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1335",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1336",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1336",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1337",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1337",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1338",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1338",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1339",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1339",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1340",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1340",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1341",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1341",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1342",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1342",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1343",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1343",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1344",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1344",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1345",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1345",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1346",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1346",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1347",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1347",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1348",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1348",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1349",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1349",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1350",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1350",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1351",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1351",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1352",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1352",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1353",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1353",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1354",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1354",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1355",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1355",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1356",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1356",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1357",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1357",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1358",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1358",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1359",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1359",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1360",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1360",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1361",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1361",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1362",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1362",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1363",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1363",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1364",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1364",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1365",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1365",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1366",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1366",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1367",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1367",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1368",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1368",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1369",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1369",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1370",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1370",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1371",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1371",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1372",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1372",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1373",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1373",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1374",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1374",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1375",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1375",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1376",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1376",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1377",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1377",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1378",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1378",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1379",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1379",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1380",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1380",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1381",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1381",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1382",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1382",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1383",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1383",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1384",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1384",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1385",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1385",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1386",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1386",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1387",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1387",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1388",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1388",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1389",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1389",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1390",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1390",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1391",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1391",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1392",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1392",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1393",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1393",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1394",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1394",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1395",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1395",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1396",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1396",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1397",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1397",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1398",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1398",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1399",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1399",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1400",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1400",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1401",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1401",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1402",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1402",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1403",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1403",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1404",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1404",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1405",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1405",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1406",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1406",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1407",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1407",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1408",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1408",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1409",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1409",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1410",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1410",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1411",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1411",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1412",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1412",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1413",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1413",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1414",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1414",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1415",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1415",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1416",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1416",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1417",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1417",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1418",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1418",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1419",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1419",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1420",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1420",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1421",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1421",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1422",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1422",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1423",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1423",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1424",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1424",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1425",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1425",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1426",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1426",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1427",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1427",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1428",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1428",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1429",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1429",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1430",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1430",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1431",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1431",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1432",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1432",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1433",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1433",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1434",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1434",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1435",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1435",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1436",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1436",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1437",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1437",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1438",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1438",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1439",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1439",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1440",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1440",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1441",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1441",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1442",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1442",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1443",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1443",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1444",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1444",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1445",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1445",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1446",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1446",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1447",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1447",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1448",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1448",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1449",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1449",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1450",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1450",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1451",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1451",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1452",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1452",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1453",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1453",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1454",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1454",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1455",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1455",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1456",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1456",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1457",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1457",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1458",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1458",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1459",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1459",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1460",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1460",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1461",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1461",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1462",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1462",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1463",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1463",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1464",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1464",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1465",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1465",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1466",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1466",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1467",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1467",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1468",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1468",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1469",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1469",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1470",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1470",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1471",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1471",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1472",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1472",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1473",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1473",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1474",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1474",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1475",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1475",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1476",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1476",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1477",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1477",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1478",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1478",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1479",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1479",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1480",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1480",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1481",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1481",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1482",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1482",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1483",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1483",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1484",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1484",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1485",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1485",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1486",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1486",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1487",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1487",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1488",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1488",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1489",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1489",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1490",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1490",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1491",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1491",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1492",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1492",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1493",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1493",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1494",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1494",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1495",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1495",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1496",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1496",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1497",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1497",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1498",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1498",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1499",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1499",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1500",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1500",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1501",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1501",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1502",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1502",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1503",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1503",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1504",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1504",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1505",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1505",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1506",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1506",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1507",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1507",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1508",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1508",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1509",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1509",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1510",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1510",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1511",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1511",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1512",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1512",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1513",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1513",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1514",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1514",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1515",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1515",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1516",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1516",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1517",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1517",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1518",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1518",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1519",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1519",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1520",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1520",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1521",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1521",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1522",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1522",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1523",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1523",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1524",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1524",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1525",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1525",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1526",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1526",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1527",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1527",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1528",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1528",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1529",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1529",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1530",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1530",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1531",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1531",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1532",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1532",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1533",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1533",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1534",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1534",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1535",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1535",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1536",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1536",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1537",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1537",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1538",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1538",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1539",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1539",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1540",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1540",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1541",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1541",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1542",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1542",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1543",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1543",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1544",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1544",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1545",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1545",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1546",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1546",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1547",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1547",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1548",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1548",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1549",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1549",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1550",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1550",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1551",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1551",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1552",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1552",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1553",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1553",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1554",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1554",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1555",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1555",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1556",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1556",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1557",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1557",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1558",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1558",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1559",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1559",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1560",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1560",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1561",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1561",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1562",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1562",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1563",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1563",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1564",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1564",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1565",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1565",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1566",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1566",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1567",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1567",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1568",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1568",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1569",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1569",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1570",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1570",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1571",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1571",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1572",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1572",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1573",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1573",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1574",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1574",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1575",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1575",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1576",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1576",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1577",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1577",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1578",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1578",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1579",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1579",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1580",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1580",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1581",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1581",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1582",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1582",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1583",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1583",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1584",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1584",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1585",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1585",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1586",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1586",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1587",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1587",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1588",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1588",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1589",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1589",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1590",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1590",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1591",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1591",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1592",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1592",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1593",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1593",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1594",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1594",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1595",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1595",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1596",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1596",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1597",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1597",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1598",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1598",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1599",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1599",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1600",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1600",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1601",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1601",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1602",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1602",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1603",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1603",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1604",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1604",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1605",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1605",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1606",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1606",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1607",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1607",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1608",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1608",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1609",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1609",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1610",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1610",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1611",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1611",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1612",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1612",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1613",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1613",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1614",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1614",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1615",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1615",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1616",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1616",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1617",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1617",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1618",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1618",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1619",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1619",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1620",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1620",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1621",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1621",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1622",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1622",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1623",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1623",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1624",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1624",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1625",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1625",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1626",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1626",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1627",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1627",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1628",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1628",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1629",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1629",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1630",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1630",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1631",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1631",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1632",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1632",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1633",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1633",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1634",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1634",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1635",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1635",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1636",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1636",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1637",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1637",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1638",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1638",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1639",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1639",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1640",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1640",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1641",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1641",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1642",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1642",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1643",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1643",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1644",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1644",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1645",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1645",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1646",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1646",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1647",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1647",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1648",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1648",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1649",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1649",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1650",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1650",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1651",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1651",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1652",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1652",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1653",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1653",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1654",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1654",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1655",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1655",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1656",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1656",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1657",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1657",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1658",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1658",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1659",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1659",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1660",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1660",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1661",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1661",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1662",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1662",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1663",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1663",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1664",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1664",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1665",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1665",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1666",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1666",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1667",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1667",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1668",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1668",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1669",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1669",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1670",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1670",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1671",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1671",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1672",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1672",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1673",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1673",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1674",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1674",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1675",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1675",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1676",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1676",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1677",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1677",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1678",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1678",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1679",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1679",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1680",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1680",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1681",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1681",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1682",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1682",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1683",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1683",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1684",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1684",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1685",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1685",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1686",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1686",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1687",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1687",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1688",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1688",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1689",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1689",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1690",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1690",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1691",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1691",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1692",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1692",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1693",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1693",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1694",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1694",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1695",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1695",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1696",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1696",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1697",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1697",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1698",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1698",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1699",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1699",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1700",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1700",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1701",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1701",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1702",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1702",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1703",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1703",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1704",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1704",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1705",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1705",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1706",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1706",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1707",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1707",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1708",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1708",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1709",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1709",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1710",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1710",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1711",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1711",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1712",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1712",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1713",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1713",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1714",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1714",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1715",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1715",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1716",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1716",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1717",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1717",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1718",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1718",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1719",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1719",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1720",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1720",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1721",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1721",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1722",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1722",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1723",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1723",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1724",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1724",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1725",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1725",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1726",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1726",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1727",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1727",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1728",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1728",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1729",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1729",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1730",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1730",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1731",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1731",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1732",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1732",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1733",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1733",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1734",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1734",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1735",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1735",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1736",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1736",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1737",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1737",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1738",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1738",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1739",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1739",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1740",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1740",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1741",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1741",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1742",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1742",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1743",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1743",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1744",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1744",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1745",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1745",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1746",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1746",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1747",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1747",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1748",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1748",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1749",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1749",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1750",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1750",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1751",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1751",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1752",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1752",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1753",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1753",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1754",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1754",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1755",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1755",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1756",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1756",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1757",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1757",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1758",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1758",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1759",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1759",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1760",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1760",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1761",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1761",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1762",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1762",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1763",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1763",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1764",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1764",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1765",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1765",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1766",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1766",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1767",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1767",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1768",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1768",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1769",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1769",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1770",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1770",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1771",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1771",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1772",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1772",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1773",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1773",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1774",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1774",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1775",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1775",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1776",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1776",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1777",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1777",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1778",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1778",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1779",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1779",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1780",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1780",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1781",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1781",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1782",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1782",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1783",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1783",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1784",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1784",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1785",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1785",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1786",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1786",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1787",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1787",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1788",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1788",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1789",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1789",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1790",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1790",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1791",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1791",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1792",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1792",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1793",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1793",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1794",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1794",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1795",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1795",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1796",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1796",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1797",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1797",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1798",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1798",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1799",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1799",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1800",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1800",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1801",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1801",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1802",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1802",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1803",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1803",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1804",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1804",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1805",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1805",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1806",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1806",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1807",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1807",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1808",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1808",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1809",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1809",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1810",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1810",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1811",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1811",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1812",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1812",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1813",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1813",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1814",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1814",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1815",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1815",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1816",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1816",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1817",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1817",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1818",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1818",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1819",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1819",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1820",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1820",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1821",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1821",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1822",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1822",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1823",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1823",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1824",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1824",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1825",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1825",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1826",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1826",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1827",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1827",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1828",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1828",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1829",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1829",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1830",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1830",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1831",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1831",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1832",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1832",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1833",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1833",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1834",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1834",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1835",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1835",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1836",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1836",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1837",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1837",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1838",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1838",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1839",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1839",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1840",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1840",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1841",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1841",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1842",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1842",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1843",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1843",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1844",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1844",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1845",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1845",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1846",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1846",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1847",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1847",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1848",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1848",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1849",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1849",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1850",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1850",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1851",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1851",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1852",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1852",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1853",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1853",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1854",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1854",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1855",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1855",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1856",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1856",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1857",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1857",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1858",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1858",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1859",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1859",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1860",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1860",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1861",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1861",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1862",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1862",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1863",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1863",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1864",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1864",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1865",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1865",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1866",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1866",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1867",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1867",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1868",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1868",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1869",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1869",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1870",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 1870",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1871",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1871",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1872",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1872",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1873",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1873",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1874",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1874",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1875",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1875",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1876",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1876",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1877",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1877",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1878",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1878",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1879",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1879",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1880",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1880",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1881",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1881",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1882",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1882",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1883",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1883",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1884",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 1884",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1885",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1885",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1886",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1886",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1887",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1887",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1888",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1888",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1889",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1889",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1890",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1890",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_1891",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1891",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1892",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1892",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1893",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1893",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1894",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1894",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1895",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1895",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1896",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1896",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1897",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1897",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1898",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1898",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1899",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1899",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1900",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1900",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1901",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1901",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1902",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1902",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1903",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1903",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_1904",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1904",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1905",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1905",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1906",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1906",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1907",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1907",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1908",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1908",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1909",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1909",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1910",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1910",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1911",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1911",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1912",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1912",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1913",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1913",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1914",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1914",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1915",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1915",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1916",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1916",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1917",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 1917",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1918",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1918",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1919",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1919",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1920",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1920",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1921",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1921",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1922",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1922",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_1923",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1923",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1924",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 1924",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1925",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1925",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1926",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1926",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1927",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1927",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1928",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1928",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_1929",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1929",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1930",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1930",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_1931",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1931",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1932",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1932",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1933",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1933",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1934",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1934",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1935",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1935",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1936",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1936",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1937",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1937",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1938",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1938",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1939",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1939",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1940",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1940",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1941",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1941",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1942",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1942",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_1943",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1943",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1944",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1944",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1945",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1945",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1946",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1946",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1947",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 1947",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1948",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 1948",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_1949",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1949",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1950",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 1950",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1951",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1951",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1952",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1952",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1953",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1953",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1954",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1954",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1955",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 1955",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1956",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1956",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1957",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1957",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_1958",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 1958",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1959",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1959",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1960",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1960",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_1961",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1961",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1962",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1962",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_1963",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 1963",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1964",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 1964",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_1965",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1965",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1966",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 1966",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1967",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1967",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1968",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1968",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1969",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 1969",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_1970",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1970",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1971",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 1971",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1972",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 1972",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_1973",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1973",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1974",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 1974",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1975",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 1975",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_1976",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 1976",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1977",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1977",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_1978",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1978",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_1979",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 1979",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_1980",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 1980",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_1981",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 1981",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_1982",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1982",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1983",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1983",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1984",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 1984",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_1985",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1985",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1986",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 1986",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_1987",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1987",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_1988",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 1988",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_1989",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 1989",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1990",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1990",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1991",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 1991",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_1992",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 1992",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_1993",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1993",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1994",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 1994",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_1995",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 1995",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_1996",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 1996",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1997",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1997",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_1998",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 1998",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_1999",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 1999",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2000",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2000",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2001",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2001",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2002",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2002",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2003",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2003",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2004",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2004",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2005",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2005",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2006",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2006",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2007",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2007",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2008",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2008",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2009",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2009",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2010",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2010",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2011",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2011",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2012",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2012",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2013",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2013",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2014",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2014",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2015",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2015",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2016",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2016",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2017",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2017",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2018",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2018",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2019",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2019",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2020",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2020",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2021",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2021",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2022",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2022",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2023",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2023",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2024",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2024",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2025",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2025",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2026",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2026",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2027",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2027",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2028",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2028",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2029",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2029",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2030",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2030",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2031",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2031",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2032",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2032",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2033",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2033",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2034",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2034",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2035",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2035",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2036",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2036",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2037",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2037",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2038",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2038",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2039",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2039",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2040",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2040",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2041",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2041",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2042",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2042",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2043",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2043",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2044",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2044",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2045",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2045",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2046",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2046",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2047",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2047",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2048",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2048",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2049",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2049",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2050",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2050",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2051",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2051",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2052",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2052",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2053",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2053",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2054",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2054",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2055",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2055",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2056",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2056",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2057",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2057",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2058",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2058",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2059",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2059",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2060",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2060",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2061",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2061",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2062",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2062",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2063",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2063",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2064",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2064",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2065",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2065",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2066",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2066",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2067",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2067",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2068",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2068",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2069",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2069",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2070",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2070",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2071",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2071",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2072",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2072",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2073",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2073",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2074",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2074",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2075",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2075",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2076",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2076",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2077",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2077",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2078",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2078",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2079",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2079",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2080",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2080",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2081",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2081",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2082",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2082",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2083",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2083",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2084",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2084",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2085",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2085",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2086",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2086",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2087",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2087",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2088",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2088",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2089",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2089",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2090",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2090",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2091",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2091",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2092",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2092",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2093",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2093",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2094",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2094",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2095",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2095",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2096",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2096",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2097",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2097",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2098",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2098",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2099",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2099",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2100",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2100",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2101",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2101",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2102",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2102",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2103",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2103",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2104",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2104",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2105",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2105",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2106",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2106",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2107",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2107",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2108",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2108",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2109",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2109",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2110",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2110",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2111",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2111",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2112",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2112",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2113",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2113",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2114",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2114",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2115",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2115",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2116",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2116",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2117",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2117",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2118",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2118",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2119",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2119",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2120",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2120",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2121",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2121",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2122",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2122",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2123",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2123",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2124",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2124",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2125",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2125",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2126",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2126",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2127",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2127",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2128",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2128",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2129",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2129",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2130",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2130",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2131",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2131",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2132",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2132",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2133",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2133",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2134",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2134",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2135",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2135",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2136",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2136",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2137",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2137",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2138",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2138",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2139",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2139",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2140",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2140",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2141",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2141",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2142",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2142",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2143",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2143",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2144",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2144",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2145",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2145",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2146",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2146",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2147",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2147",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2148",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2148",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2149",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2149",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2150",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2150",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2151",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2151",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2152",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2152",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2153",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2153",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2154",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2154",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2155",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2155",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2156",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2156",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2157",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2157",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2158",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2158",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2159",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2159",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2160",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2160",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2161",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2161",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2162",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2162",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2163",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2163",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2164",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2164",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2165",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2165",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2166",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2166",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2167",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2167",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2168",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2168",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2169",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2169",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2170",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2170",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2171",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2171",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2172",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2172",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2173",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2173",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2174",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2174",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2175",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2175",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2176",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2176",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2177",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2177",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2178",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2178",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2179",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2179",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2180",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2180",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2181",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2181",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2182",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2182",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2183",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2183",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2184",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2184",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2185",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2185",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2186",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2186",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2187",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2187",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2188",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2188",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2189",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2189",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2190",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2190",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2191",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2191",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2192",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2192",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2193",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2193",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2194",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2194",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2195",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2195",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2196",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2196",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2197",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2197",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2198",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2198",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2199",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2199",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2200",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2200",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2201",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2201",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2202",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2202",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2203",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2203",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2204",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2204",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2205",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2205",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2206",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2206",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2207",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2207",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2208",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2208",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2209",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2209",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2210",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2210",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2211",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2211",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2212",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2212",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2213",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2213",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2214",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2214",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2215",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2215",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2216",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2216",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2217",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2217",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2218",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2218",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2219",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2219",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2220",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2220",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2221",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2221",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2222",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2222",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2223",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2223",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2224",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2224",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2225",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2225",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2226",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2226",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2227",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2227",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2228",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2228",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2229",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2229",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2230",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2230",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2231",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2231",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2232",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2232",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2233",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2233",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2234",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2234",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2235",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2235",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2236",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2236",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2237",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2237",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2238",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2238",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2239",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2239",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2240",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2240",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2241",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2241",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2242",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2242",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2243",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2243",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2244",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2244",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2245",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2245",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2246",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2246",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2247",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2247",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2248",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2248",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2249",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2249",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2250",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2250",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2251",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2251",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2252",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2252",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2253",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2253",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2254",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2254",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2255",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2255",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2256",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2256",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2257",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2257",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2258",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2258",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2259",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2259",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2260",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2260",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2261",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2261",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2262",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2262",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2263",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2263",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2264",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2264",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2265",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2265",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2266",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2266",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2267",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2267",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2268",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2268",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2269",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2269",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2270",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2270",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2271",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2271",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2272",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2272",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2273",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2273",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2274",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2274",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2275",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2275",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2276",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2276",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2277",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2277",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2278",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2278",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2279",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2279",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2280",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2280",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2281",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2281",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2282",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2282",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2283",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2283",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2284",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2284",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2285",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2285",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2286",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2286",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2287",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2287",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2288",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2288",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2289",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2289",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2290",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2290",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2291",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2291",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2292",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2292",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2293",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2293",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2294",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2294",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2295",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2295",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2296",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2296",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2297",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2297",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2298",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2298",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2299",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2299",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2300",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2300",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2301",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2301",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2302",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2302",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2303",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2303",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2304",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2304",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2305",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2305",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2306",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2306",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2307",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2307",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2308",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2308",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2309",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2309",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2310",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2310",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2311",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2311",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2312",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2312",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2313",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2313",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2314",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2314",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2315",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2315",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2316",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2316",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2317",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2317",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2318",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2318",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2319",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2319",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2320",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2320",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2321",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2321",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2322",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2322",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2323",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2323",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2324",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2324",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2325",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2325",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2326",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2326",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2327",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2327",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2328",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2328",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2329",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2329",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2330",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2330",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2331",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2331",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2332",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2332",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2333",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2333",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2334",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2334",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2335",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2335",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2336",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2336",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2337",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2337",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2338",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2338",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2339",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2339",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2340",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2340",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2341",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2341",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2342",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2342",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2343",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2343",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2344",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2344",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2345",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2345",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2346",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2346",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2347",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2347",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2348",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2348",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2349",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2349",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2350",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2350",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2351",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2351",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2352",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2352",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2353",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2353",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2354",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2354",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2355",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2355",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2356",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2356",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2357",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2357",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2358",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2358",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2359",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2359",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2360",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2360",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2361",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2361",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2362",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2362",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2363",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2363",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2364",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2364",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2365",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2365",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2366",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2366",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2367",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2367",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2368",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2368",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2369",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2369",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2370",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2370",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2371",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2371",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2372",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2372",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2373",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2373",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2374",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2374",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2375",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2375",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2376",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2376",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2377",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2377",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2378",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2378",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2379",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2379",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2380",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2380",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2381",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2381",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2382",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2382",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2383",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2383",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2384",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2384",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2385",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2385",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2386",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2386",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2387",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2387",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2388",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2388",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2389",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2389",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2390",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2390",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2391",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2391",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2392",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2392",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2393",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2393",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2394",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2394",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2395",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2395",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2396",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2396",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2397",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2397",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2398",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2398",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2399",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2399",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2400",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2400",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2401",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2401",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2402",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2402",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2403",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2403",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2404",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2404",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2405",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2405",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2406",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2406",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2407",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2407",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2408",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2408",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2409",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2409",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2410",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2410",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2411",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2411",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2412",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2412",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2413",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2413",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2414",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2414",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2415",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2415",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2416",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2416",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2417",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2417",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2418",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2418",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2419",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2419",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2420",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2420",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2421",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2421",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2422",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2422",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2423",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2423",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2424",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2424",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2425",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2425",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2426",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2426",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2427",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2427",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2428",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2428",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2429",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2429",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2430",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2430",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2431",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2431",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2432",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2432",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2433",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2433",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2434",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2434",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2435",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2435",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2436",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2436",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2437",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2437",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2438",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2438",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2439",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2439",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2440",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2440",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2441",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2441",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2442",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2442",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2443",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2443",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2444",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2444",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2445",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2445",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2446",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2446",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2447",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2447",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2448",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2448",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2449",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2449",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2450",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2450",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2451",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2451",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2452",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2452",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2453",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2453",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2454",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2454",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2455",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2455",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2456",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2456",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2457",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2457",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2458",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2458",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2459",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2459",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2460",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2460",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2461",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2461",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2462",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2462",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2463",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2463",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2464",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2464",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2465",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2465",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2466",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2466",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2467",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2467",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2468",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2468",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2469",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2469",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2470",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2470",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2471",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2471",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2472",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2472",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2473",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2473",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2474",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2474",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2475",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2475",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2476",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2476",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2477",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2477",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2478",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2478",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2479",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2479",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2480",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2480",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2481",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2481",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2482",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2482",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2483",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2483",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2484",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2484",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2485",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2485",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2486",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2486",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2487",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2487",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2488",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2488",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2489",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2489",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2490",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2490",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2491",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2491",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2492",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2492",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2493",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2493",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2494",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2494",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2495",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2495",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2496",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2496",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2497",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2497",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2498",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2498",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2499",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2499",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2500",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2500",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2501",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2501",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2502",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2502",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2503",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2503",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2504",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2504",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2505",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2505",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2506",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2506",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2507",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2507",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2508",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2508",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2509",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2509",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2510",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2510",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2511",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2511",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2512",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2512",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2513",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2513",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2514",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2514",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2515",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2515",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2516",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2516",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2517",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2517",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2518",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2518",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2519",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2519",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2520",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2520",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2521",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2521",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2522",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2522",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2523",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2523",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2524",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2524",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2525",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2525",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2526",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2526",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2527",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2527",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2528",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2528",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2529",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2529",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2530",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2530",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2531",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2531",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2532",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2532",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2533",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2533",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2534",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2534",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2535",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2535",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2536",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2536",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2537",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2537",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2538",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2538",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2539",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2539",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2540",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2540",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2541",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2541",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2542",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2542",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2543",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2543",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2544",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2544",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2545",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2545",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2546",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2546",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2547",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2547",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2548",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2548",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2549",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2549",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2550",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2550",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2551",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2551",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2552",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2552",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2553",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2553",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2554",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2554",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2555",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2555",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2556",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2556",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2557",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2557",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2558",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2558",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2559",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2559",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2560",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2560",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2561",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2561",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2562",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2562",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2563",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2563",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2564",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2564",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2565",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2565",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2566",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2566",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2567",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2567",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2568",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2568",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2569",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2569",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2570",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2570",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2571",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2571",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2572",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2572",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2573",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2573",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2574",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2574",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2575",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2575",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2576",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2576",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2577",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2577",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2578",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2578",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2579",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2579",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2580",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2580",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2581",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2581",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2582",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2582",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2583",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2583",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2584",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2584",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2585",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2585",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2586",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2586",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2587",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2587",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2588",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2588",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2589",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2589",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2590",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2590",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2591",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2591",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2592",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2592",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2593",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2593",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2594",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2594",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2595",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2595",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2596",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2596",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2597",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2597",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2598",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2598",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2599",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2599",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2600",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2600",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2601",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2601",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2602",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2602",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2603",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2603",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2604",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2604",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2605",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2605",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2606",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2606",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2607",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2607",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2608",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2608",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2609",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2609",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2610",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2610",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2611",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2611",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2612",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2612",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2613",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2613",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2614",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2614",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2615",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2615",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2616",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2616",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2617",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2617",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2618",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2618",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2619",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2619",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2620",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2620",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2621",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2621",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2622",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2622",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2623",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2623",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2624",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2624",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2625",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2625",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2626",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2626",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2627",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2627",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2628",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2628",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2629",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2629",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2630",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2630",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2631",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2631",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2632",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2632",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2633",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2633",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2634",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2634",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2635",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2635",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2636",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2636",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2637",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2637",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2638",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2638",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2639",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2639",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2640",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2640",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2641",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2641",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2642",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2642",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2643",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2643",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2644",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2644",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2645",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2645",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2646",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2646",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2647",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2647",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2648",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2648",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2649",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2649",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2650",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2650",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2651",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2651",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2652",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2652",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2653",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2653",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2654",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2654",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2655",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2655",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2656",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2656",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2657",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2657",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2658",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2658",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2659",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2659",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2660",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2660",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2661",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2661",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2662",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2662",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2663",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2663",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2664",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2664",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2665",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2665",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2666",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2666",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2667",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2667",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2668",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2668",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2669",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2669",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2670",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2670",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2671",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2671",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2672",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2672",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2673",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2673",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2674",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2674",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2675",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2675",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2676",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2676",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2677",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2677",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2678",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2678",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2679",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2679",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2680",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2680",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2681",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2681",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2682",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2682",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2683",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2683",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2684",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2684",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2685",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2685",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2686",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2686",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2687",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2687",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2688",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2688",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": "card_2689",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2689",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2690",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2690",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2691",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2691",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2692",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2692",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2693",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2693",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2694",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2694",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2695",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2695",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2696",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2696",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2697",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2697",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2698",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2698",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2699",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2699",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2700",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2700",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2701",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2701",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2702",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2702",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2703",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2703",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2704",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2704",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2705",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2705",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2706",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2706",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2707",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2707",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2708",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2708",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2709",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2709",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2710",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2710",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2711",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2711",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2712",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2712",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2713",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2713",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2714",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2714",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2715",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2715",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2716",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2716",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2717",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2717",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2718",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2718",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2719",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2719",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2720",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2720",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2721",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2721",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2722",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2722",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2723",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2723",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2724",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2724",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2725",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2725",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2726",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2726",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2727",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2727",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2728",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2728",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2729",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2729",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2730",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2730",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2731",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2731",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2732",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2732",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2733",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2733",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2734",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2734",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2735",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2735",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2736",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2736",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2737",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2737",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2738",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2738",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2739",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2739",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2740",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2740",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2741",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2741",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2742",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2742",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2743",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2743",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2744",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2744",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2745",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2745",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2746",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2746",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2747",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2747",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2748",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2748",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2749",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2749",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2750",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2750",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2751",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2751",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2752",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2752",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2753",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2753",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2754",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2754",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2755",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2755",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2756",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2756",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2757",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2757",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2758",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2758",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2759",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2759",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2760",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2760",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2761",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2761",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2762",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2762",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2763",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2763",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2764",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2764",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2765",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2765",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2766",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2766",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2767",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2767",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2768",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2768",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2769",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2769",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2770",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2770",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2771",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2771",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2772",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2772",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2773",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2773",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2774",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2774",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2775",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2775",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2776",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2776",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2777",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2777",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2778",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2778",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2779",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2779",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2780",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2780",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2781",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2781",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2782",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2782",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2783",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2783",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2784",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2784",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2785",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2785",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2786",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2786",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2787",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2787",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2788",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2788",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2789",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2789",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2790",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2790",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2791",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2791",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2792",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2792",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2793",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2793",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2794",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2794",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2795",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2795",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2796",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2796",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2797",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2797",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2798",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2798",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": "card_2799",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2799",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2800",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2800",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2801",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2801",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2802",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2802",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2803",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2803",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2804",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2804",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2805",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2805",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2806",
    "system": "Genitourinary System",
    "subject": "Renal Masses",
    "topic": "Renal Masses Concept 2806",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2807",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2807",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2808",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2808",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2809",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2809",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2810",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2810",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2811",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2811",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2812",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2812",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2813",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2813",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2814",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2814",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2815",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2815",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2816",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2816",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2817",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2817",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2818",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2818",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2819",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2819",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2820",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2820",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2821",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2821",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2822",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2822",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2823",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2823",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2824",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2824",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": "card_2825",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2825",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2826",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2826",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2827",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2827",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2828",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2828",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2829",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2829",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2830",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2830",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2831",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2831",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2832",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2832",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2833",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2833",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2834",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2834",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2835",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2835",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2836",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2836",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2837",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2837",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2838",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2838",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2839",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2839",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2840",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2840",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2841",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2841",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2842",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2842",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2843",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2843",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2844",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2844",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2845",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2845",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2846",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2846",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2847",
    "system": "Musculoskeletal System",
    "subject": "Trauma and Fractures",
    "topic": "Trauma and Fractures Concept 2847",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2848",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2848",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2849",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2849",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2850",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2850",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2851",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2851",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2852",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2852",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2853",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2853",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2854",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2854",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2855",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2855",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2856",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2856",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2857",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2857",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2858",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2858",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2859",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2859",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2860",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2860",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2861",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2861",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2862",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2862",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2863",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2863",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2864",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2864",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2865",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2865",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2866",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2866",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2867",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2867",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2868",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2868",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2869",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2869",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2870",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2870",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2871",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2871",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2872",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2872",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2873",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2873",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2874",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2874",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2875",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2875",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2876",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2876",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2877",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2877",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2878",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2878",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2879",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2879",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2880",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2880",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2881",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2881",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2882",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2882",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2883",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2883",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2884",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2884",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2885",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2885",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2886",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2886",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2887",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2887",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2888",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2888",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2889",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2889",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2890",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2890",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2891",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2891",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2892",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2892",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2893",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2893",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2894",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2894",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2895",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2895",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2896",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2896",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2897",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2897",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2898",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2898",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2899",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2899",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": "card_2900",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2900",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2901",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2901",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2902",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2902",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2903",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2903",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2904",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2904",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2905",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2905",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2906",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2906",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2907",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2907",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2908",
    "system": "Nervous System",
    "subject": "Demyelinating Disease",
    "topic": "Demyelinating Disease Concept 2908",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2909",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2909",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2910",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2910",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2911",
    "system": "Musculoskeletal System",
    "subject": "Bone Infections",
    "topic": "Bone Infections Concept 2911",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2912",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2912",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2913",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2913",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2914",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2914",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2915",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2915",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2916",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2916",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2917",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2917",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2918",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2918",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2919",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2919",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2920",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2920",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2921",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2921",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2922",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2922",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2923",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2923",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2924",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2924",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2925",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2925",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2926",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2926",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2927",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2927",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2928",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2928",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2929",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2929",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2930",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2930",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2931",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2931",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2932",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2932",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2933",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2933",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2934",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2934",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2935",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2935",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2936",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2936",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2937",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2937",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2938",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2938",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2939",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2939",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2940",
    "system": "Nervous System",
    "subject": "Intracranial Hemorrhage",
    "topic": "Intracranial Hemorrhage Concept 2940",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2941",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2941",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2942",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2942",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2943",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2943",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2944",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2944",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": "card_2945",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 2945",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2946",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2946",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2947",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2947",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2948",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2948",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2949",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2949",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2950",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2950",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2951",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2951",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": "card_2952",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2952",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2953",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2953",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2954",
    "system": "Pulmonary System",
    "subject": "Interstitial Lung Disease",
    "topic": "Interstitial Lung Disease Concept 2954",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": "card_2955",
    "system": "Cardiovascular System",
    "subject": "Congenital Heart Disease",
    "topic": "Congenital Heart Disease Concept 2955",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2956",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2956",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2957",
    "system": "Gastrointestinal System",
    "subject": "Bowel Obstruction",
    "topic": "Bowel Obstruction Concept 2957",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2958",
    "system": "Gastrointestinal System",
    "subject": "Hepatic and Biliary Imaging",
    "topic": "Hepatic and Biliary Imaging Concept 2958",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": "card_2959",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2959",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": "card_2960",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2960",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2961",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2961",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2962",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2962",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2963",
    "system": "Cardiovascular System",
    "subject": "Pericardial Disease",
    "topic": "Pericardial Disease Concept 2963",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2964",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2964",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2965",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2965",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2966",
    "system": "Infectious Disease & Immunology",
    "subject": "Soft Tissue Infections",
    "topic": "Soft Tissue Infections Concept 2966",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": "card_2967",
    "system": "Endocrine System",
    "subject": "Pituitary Disorders",
    "topic": "Pituitary Disorders Concept 2967",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": "card_2968",
    "system": "Pulmonary System",
    "subject": "Pneumothorax and Pleural Disease",
    "topic": "Pneumothorax and Pleural Disease Concept 2968",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2969",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2969",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2970",
    "system": "Nervous System",
    "subject": "Ischemic Stroke",
    "topic": "Ischemic Stroke Concept 2970",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": "card_2971",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2971",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2972",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2972",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2973",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2973",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2974",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2974",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2975",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2975",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": "card_2976",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2976",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": "card_2977",
    "system": "Genitourinary System",
    "subject": "Scrotal Pathology",
    "topic": "Scrotal Pathology Concept 2977",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2978",
    "system": "Cardiovascular System",
    "subject": "Valvular Disease",
    "topic": "Valvular Disease Concept 2978",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": "card_2979",
    "system": "Pulmonary System",
    "subject": "Pneumonia and Infections",
    "topic": "Pneumonia and Infections Concept 2979",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": "card_2980",
    "system": "Endocrine System",
    "subject": "Adrenal Pathology",
    "topic": "Adrenal Pathology Concept 2980",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2981",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2981",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": "card_2982",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2982",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_2983",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2983",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2984",
    "system": "Gastrointestinal System",
    "subject": "Acute Abdomen",
    "topic": "Acute Abdomen Concept 2984",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2985",
    "system": "Pulmonary System",
    "subject": "Pulmonary Embolism",
    "topic": "Pulmonary Embolism Concept 2985",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": "card_2986",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2986",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2987",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2987",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2988",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2988",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": "card_2989",
    "system": "Genitourinary System",
    "subject": "Gynecologic Imaging",
    "topic": "Gynecologic Imaging Concept 2989",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": "card_2990",
    "system": "Genitourinary System",
    "subject": "Nephrolithiasis",
    "topic": "Nephrolithiasis Concept 2990",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": "card_2991",
    "system": "Infectious Disease & Immunology",
    "subject": "Granulomatous Disease",
    "topic": "Granulomatous Disease Concept 2991",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2992",
    "system": "Musculoskeletal System",
    "subject": "Bone Tumors",
    "topic": "Bone Tumors Concept 2992",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": "card_2993",
    "system": "Hematologic & Lymphatic System",
    "subject": "Splenic Disorders",
    "topic": "Splenic Disorders Concept 2993",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": "card_2994",
    "system": "Hematologic & Lymphatic System",
    "subject": "Lymphadenopathy",
    "topic": "Lymphadenopathy Concept 2994",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": "card_2995",
    "system": "Endocrine System",
    "subject": "Thyroid Imaging",
    "topic": "Thyroid Imaging Concept 2995",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": "card_2996",
    "system": "Gastrointestinal System",
    "subject": "Pancreatic Disorders",
    "topic": "Pancreatic Disorders Concept 2996",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": "card_2997",
    "system": "Infectious Disease & Immunology",
    "subject": "Opportunistic Infections",
    "topic": "Opportunistic Infections Concept 2997",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": "card_2998",
    "system": "Musculoskeletal System",
    "subject": "Arthritis",
    "topic": "Arthritis Concept 2998",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": "card_2999",
    "system": "Nervous System",
    "subject": "Brain Tumors",
    "topic": "Brain Tumors Concept 2999",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": "card_3000",
    "system": "Cardiovascular System",
    "subject": "Aortic Diseases",
    "topic": "Aortic Diseases Concept 3000",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  }
];
