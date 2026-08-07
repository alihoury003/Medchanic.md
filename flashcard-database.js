// ========================================================
// MEDCHANIC.MD - 3,000 HIGH-YIELD ANKING IMAGING FLASHCARDS
// ========================================================

const FULL_FLASHCARD_DECK = [
  {
    "id": 1,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 3,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 4,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 5,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 6,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 7,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 8,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 9,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 10,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 11,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 12,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 13,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 14,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 15,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 16,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 17,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 18,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 19,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 20,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 21,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 22,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 23,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 24,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 25,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 26,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 27,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 28,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 29,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 30,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 31,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 32,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 33,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 34,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 35,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 36,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 37,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 38,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 39,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 40,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 41,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 42,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 43,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 44,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 45,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 46,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 47,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 48,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 49,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 50,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 51,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 52,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 53,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 54,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 55,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 56,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 57,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 58,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 59,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 60,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 61,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 62,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 63,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 64,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 65,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 66,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 67,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 68,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 69,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 70,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 71,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 72,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 73,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 74,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 75,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 76,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 77,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 78,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 79,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 80,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 81,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 82,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 83,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 84,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 85,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 86,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 87,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 88,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 89,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 90,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 91,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 92,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 93,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 94,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 95,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 96,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 97,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 98,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 99,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 100,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 101,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 102,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 103,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 104,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 105,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 106,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 107,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 108,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 109,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 110,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 111,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 112,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 113,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 114,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 115,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 116,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 117,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 118,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 119,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 120,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 121,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 122,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 123,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 124,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 125,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 126,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 127,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 128,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 129,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 130,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 131,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 132,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 133,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 134,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 135,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 136,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 137,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 138,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 139,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 140,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 141,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 142,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 143,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 144,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 145,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 146,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 147,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 148,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 149,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 150,
    "topic": "Aortic Diseases",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 151,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 152,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 153,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 154,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 155,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 156,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 157,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 158,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 159,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 160,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 161,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 162,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 163,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 164,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 165,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 166,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 167,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 168,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 169,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 170,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 171,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 172,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 173,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 174,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 175,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 176,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 177,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 178,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 179,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 180,
    "topic": "Aortic Diseases",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 181,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 182,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 183,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 184,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 185,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 186,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 187,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 188,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 189,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 190,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 191,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 192,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 193,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 194,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 195,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 196,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 197,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 198,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 199,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 200,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 201,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 202,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 203,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 204,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 205,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 206,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 207,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 208,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 209,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 210,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 211,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 212,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 213,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 214,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 215,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 216,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 217,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 218,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 219,
    "topic": "Bone Infections",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 220,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 221,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 222,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 223,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 224,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 225,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 226,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 227,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 228,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 229,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 230,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 231,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 232,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 233,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 234,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 235,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 236,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 237,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 238,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 239,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 240,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 241,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 242,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 243,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 244,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 245,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 246,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 247,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 248,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 249,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 250,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 251,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 252,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 253,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 254,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 255,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 256,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 257,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 258,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 259,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 260,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 261,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 262,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 263,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 264,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 265,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 266,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 267,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 268,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 269,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 270,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 271,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 272,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 273,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 274,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 275,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 276,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 277,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 278,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 279,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 280,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 281,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 282,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 283,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 284,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 285,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 286,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 287,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 288,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 289,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 290,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 291,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 292,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 293,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 294,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 295,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 296,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 297,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 298,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 299,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 300,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 301,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 302,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 303,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 304,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 305,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 306,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 307,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 308,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 309,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 310,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 311,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 312,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 313,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 314,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 315,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 316,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 317,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 318,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 319,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 320,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 321,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 322,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 323,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 324,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 325,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 326,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 327,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 328,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 329,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 330,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 331,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 332,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 333,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 334,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 335,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 336,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 337,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 338,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 339,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 340,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 341,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 342,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 343,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 344,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 345,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 346,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 347,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 348,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 349,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 350,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 351,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 352,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 353,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 354,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 355,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 356,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 357,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 358,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 359,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 360,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 361,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 362,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 363,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 364,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 365,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 366,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 367,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 368,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 369,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 370,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 371,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 372,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 373,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 374,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 375,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 376,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 377,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 378,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 379,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 380,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 381,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 382,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 383,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 384,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 385,
    "topic": "Aortic Diseases",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 386,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 387,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 388,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 389,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 390,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 391,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 392,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 393,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 394,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 395,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 396,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 397,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 398,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 399,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 400,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 401,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 402,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 403,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 404,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 405,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 406,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 407,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 408,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 409,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 410,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 411,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 412,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 413,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 414,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 415,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 416,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 417,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 418,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 419,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 420,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 421,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 422,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 423,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 424,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 425,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 426,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 427,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 428,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 429,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 430,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 431,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 432,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 433,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 434,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 435,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 436,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 437,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 438,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 439,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 440,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 441,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 442,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 443,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 444,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 445,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 446,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 447,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 448,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 449,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 450,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 451,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 452,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 453,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 454,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 455,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 456,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 457,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 458,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 459,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 460,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 461,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 462,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 463,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 464,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 465,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 466,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 467,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 468,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 469,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 470,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 471,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 472,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 473,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 474,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 475,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 476,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 477,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 478,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 479,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 480,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 481,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 482,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 483,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 484,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 485,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 486,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 487,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 488,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 489,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 490,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 491,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 492,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 493,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 494,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 495,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 496,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 497,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 498,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 499,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 500,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 501,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 502,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 503,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 504,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 505,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 506,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 507,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 508,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 509,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 510,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 511,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 512,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 513,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 514,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 515,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 516,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 517,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 518,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 519,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 520,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 521,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 522,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 523,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 524,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 525,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 526,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 527,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 528,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 529,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 530,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 531,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 532,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 533,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 534,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 535,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 536,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 537,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 538,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 539,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 540,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 541,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 542,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 543,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 544,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 545,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 546,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 547,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 548,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 549,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 550,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 551,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 552,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 553,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 554,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 555,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 556,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 557,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 558,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 559,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 560,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 561,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 562,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 563,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 564,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 565,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 566,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 567,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 568,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 569,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 570,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 571,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 572,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 573,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 574,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 575,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 576,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 577,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 578,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 579,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 580,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 581,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 582,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 583,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 584,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 585,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 586,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 587,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 588,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 589,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 590,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 591,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 592,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 593,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 594,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 595,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 596,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 597,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 598,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 599,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 600,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 601,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 602,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 603,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 604,
    "topic": "Bone Tumors",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 605,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 606,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 607,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 608,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 609,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 610,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 611,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 612,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 613,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 614,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 615,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 616,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 617,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 618,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 619,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 620,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 621,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 622,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 623,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 624,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 625,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 626,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 627,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 628,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 629,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 630,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 631,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 632,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 633,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 634,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 635,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 636,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 637,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 638,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 639,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 640,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 641,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 642,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 643,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 644,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 645,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 646,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 647,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 648,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 649,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 650,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 651,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 652,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 653,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 654,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 655,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 656,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 657,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 658,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 659,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 660,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 661,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 662,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 663,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 664,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 665,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 666,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 667,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 668,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 669,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 670,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 671,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 672,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 673,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 674,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 675,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 676,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 677,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 678,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 679,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 680,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 681,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 682,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 683,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 684,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 685,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 686,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 687,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 688,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 689,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 690,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 691,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 692,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 693,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 694,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 695,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 696,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 697,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 698,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 699,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 700,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 701,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 702,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 703,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 704,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 705,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 706,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 707,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 708,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 709,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 710,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 711,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 712,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 713,
    "topic": "Bone Infections",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 714,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 715,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 716,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 717,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 718,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 719,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 720,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 721,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 722,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 723,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 724,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 725,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 726,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 727,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 728,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 729,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 730,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 731,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 732,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 733,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 734,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 735,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 736,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 737,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 738,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 739,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 740,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 741,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 742,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 743,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 744,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 745,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 746,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 747,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 748,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 749,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 750,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 751,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 752,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 753,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 754,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 755,
    "topic": "Aortic Diseases",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 756,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 757,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 758,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 759,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 760,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 761,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 762,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 763,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 764,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 765,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 766,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 767,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 768,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 769,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 770,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 771,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 772,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 773,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 774,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 775,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 776,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 777,
    "topic": "Bone Tumors",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 778,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 779,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 780,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 781,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 782,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 783,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 784,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 785,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 786,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 787,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 788,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 789,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 790,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 791,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 792,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 793,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 794,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 795,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 796,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 797,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 798,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 799,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 800,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 801,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 802,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 803,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 804,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 805,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 806,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 807,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 808,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 809,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 810,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 811,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 812,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 813,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 814,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 815,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 816,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 817,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 818,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 819,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 820,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 821,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 822,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 823,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 824,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 825,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 826,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 827,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 828,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 829,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 830,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 831,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 832,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 833,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 834,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 835,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 836,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 837,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 838,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 839,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 840,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 841,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 842,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 843,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 844,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 845,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 846,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 847,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 848,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 849,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 850,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 851,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 852,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 853,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 854,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 855,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 856,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 857,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 858,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 859,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 860,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 861,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 862,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 863,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 864,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 865,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 866,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 867,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 868,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 869,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 870,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 871,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 872,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 873,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 874,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 875,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 876,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 877,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 878,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 879,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 880,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 881,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 882,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 883,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 884,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 885,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 886,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 887,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 888,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 889,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 890,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 891,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 892,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 893,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 894,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 895,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 896,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 897,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 898,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 899,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 900,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 901,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 902,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 903,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 904,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 905,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 906,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 907,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 908,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 909,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 910,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 911,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 912,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 913,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 914,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 915,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 916,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 917,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 918,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 919,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 920,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 921,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 922,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 923,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 924,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 925,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 926,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 927,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 928,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 929,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 930,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 931,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 932,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 933,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 934,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 935,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 936,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 937,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 938,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 939,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 940,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 941,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 942,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 943,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 944,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 945,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 946,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 947,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 948,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 949,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 950,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 951,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 952,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 953,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 954,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 955,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 956,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 957,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 958,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 959,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 960,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 961,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 962,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 963,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 964,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 965,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 966,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 967,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 968,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 969,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 970,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 971,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 972,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 973,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 974,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 975,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 976,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 977,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 978,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 979,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 980,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 981,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 982,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 983,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 984,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 985,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 986,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 987,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 988,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 989,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 990,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 991,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 992,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 993,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 994,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 995,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 996,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 997,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 998,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 999,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1000,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1001,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1002,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1003,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1004,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1005,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1006,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1007,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1008,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1009,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1010,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1011,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1012,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1013,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1014,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1015,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1016,
    "topic": "Bone Tumors",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1017,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1018,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1019,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1020,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1021,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1022,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1023,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1024,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1025,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1026,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1027,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1028,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1029,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1030,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1031,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1032,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1033,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1034,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1035,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1036,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1037,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1038,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1039,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1040,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1041,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1042,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1043,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1044,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1045,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1046,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1047,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1048,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1049,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1050,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1051,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1052,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1053,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1054,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1055,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1056,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1057,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1058,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1059,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1060,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1061,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1062,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1063,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1064,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1065,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1066,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1067,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1068,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1069,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1070,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1071,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1072,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1073,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1074,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1075,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1076,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1077,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1078,
    "topic": "Aortic Diseases",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1079,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1080,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1081,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1082,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1083,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1084,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1085,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1086,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1087,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1088,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1089,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1090,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1091,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1092,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1093,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1094,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1095,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1096,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1097,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1098,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1099,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1100,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1101,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1102,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1103,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1104,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1105,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1106,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1107,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1108,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1109,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1110,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1111,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1112,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1113,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1114,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1115,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1116,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1117,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1118,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1119,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1120,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1121,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1122,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1123,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1124,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1125,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1126,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1127,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1128,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1129,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1130,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1131,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1132,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1133,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1134,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1135,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1136,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1137,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1138,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1139,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1140,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1141,
    "topic": "Bone Infections",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1142,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1143,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1144,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1145,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1146,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1147,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1148,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1149,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1150,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1151,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1152,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1153,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1154,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1155,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1156,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1157,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1158,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1159,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1160,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1161,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1162,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1163,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1164,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1165,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1166,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1167,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1168,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1169,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1170,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1171,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1172,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1173,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1174,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1175,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1176,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1177,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1178,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1179,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1180,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1181,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1182,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1183,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1184,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1185,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1186,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1187,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1188,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1189,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1190,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1191,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1192,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1193,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1194,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1195,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1196,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1197,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1198,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1199,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1200,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1201,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1202,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1203,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1204,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1205,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1206,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1207,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1208,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1209,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1210,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1211,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1212,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1213,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1214,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1215,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1216,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1217,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1218,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1219,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1220,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1221,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1222,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1223,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1224,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1225,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1226,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1227,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1228,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1229,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1230,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1231,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1232,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1233,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1234,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1235,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1236,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1237,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1238,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1239,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1240,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1241,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1242,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1243,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1244,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1245,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1246,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1247,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1248,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1249,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1250,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1251,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1252,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1253,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1254,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1255,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1256,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1257,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1258,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1259,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1260,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1261,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1262,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1263,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1264,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1265,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1266,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1267,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1268,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1269,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1270,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1271,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1272,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1273,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1274,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1275,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1276,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1277,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1278,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1279,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1280,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1281,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1282,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1283,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1284,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1285,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1286,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1287,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1288,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1289,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1290,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1291,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1292,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1293,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1294,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1295,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1296,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1297,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1298,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1299,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1300,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1301,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1302,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1303,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1304,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1305,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1306,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1307,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1308,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1309,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1310,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1311,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1312,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1313,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1314,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1315,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1316,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1317,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1318,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1319,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1320,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1321,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1322,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1323,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1324,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1325,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1326,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1327,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1328,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1329,
    "topic": "Bone Infections",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1330,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1331,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1332,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1333,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1334,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1335,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1336,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1337,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1338,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1339,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1340,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1341,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1342,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1343,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1344,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1345,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1346,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1347,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1348,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1349,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1350,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1351,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1352,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1353,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1354,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1355,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1356,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1357,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1358,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1359,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1360,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1361,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1362,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1363,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1364,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1365,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1366,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1367,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1368,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1369,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1370,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1371,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1372,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1373,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1374,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1375,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1376,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1377,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1378,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1379,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1380,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1381,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1382,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1383,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1384,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1385,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1386,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1387,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1388,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1389,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1390,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1391,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1392,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1393,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1394,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1395,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1396,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1397,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1398,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1399,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1400,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1401,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1402,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1403,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1404,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1405,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1406,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1407,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1408,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1409,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1410,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1411,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1412,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1413,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1414,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1415,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1416,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1417,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1418,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1419,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1420,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1421,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1422,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1423,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1424,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1425,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1426,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1427,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1428,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1429,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1430,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1431,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1432,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1433,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1434,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1435,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1436,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1437,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1438,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1439,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1440,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1441,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1442,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1443,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1444,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1445,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1446,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1447,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1448,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1449,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1450,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1451,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1452,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1453,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1454,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1455,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1456,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1457,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1458,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1459,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1460,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1461,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1462,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1463,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1464,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1465,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1466,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1467,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1468,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1469,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1470,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1471,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1472,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1473,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1474,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1475,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1476,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1477,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1478,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1479,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1480,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1481,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1482,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1483,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1484,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1485,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1486,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1487,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1488,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1489,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1490,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1491,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1492,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1493,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1494,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1495,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1496,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1497,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1498,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1499,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1500,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1501,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1502,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1503,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1504,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1505,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1506,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1507,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1508,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1509,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1510,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1511,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1512,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1513,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1514,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1515,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1516,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1517,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1518,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1519,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1520,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1521,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1522,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1523,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1524,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1525,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1526,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1527,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1528,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1529,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1530,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1531,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1532,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1533,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1534,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1535,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1536,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1537,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1538,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1539,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1540,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1541,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1542,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1543,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1544,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1545,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1546,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1547,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1548,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1549,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1550,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1551,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1552,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1553,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1554,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1555,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1556,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1557,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1558,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1559,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1560,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1561,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1562,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1563,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1564,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1565,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1566,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1567,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1568,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1569,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1570,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1571,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1572,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1573,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1574,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1575,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1576,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1577,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1578,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1579,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1580,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1581,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1582,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1583,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1584,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1585,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1586,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1587,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1588,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1589,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1590,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1591,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1592,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1593,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1594,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1595,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1596,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1597,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1598,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1599,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1600,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1601,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1602,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1603,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1604,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1605,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1606,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1607,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1608,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1609,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1610,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1611,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1612,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1613,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1614,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1615,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1616,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1617,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1618,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1619,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1620,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1621,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1622,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1623,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1624,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1625,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1626,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1627,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1628,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1629,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1630,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1631,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1632,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1633,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1634,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1635,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1636,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1637,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1638,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1639,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1640,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1641,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1642,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1643,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1644,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1645,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1646,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1647,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1648,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1649,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1650,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1651,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1652,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1653,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1654,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1655,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1656,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1657,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1658,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1659,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1660,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1661,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1662,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1663,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1664,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1665,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1666,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1667,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1668,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1669,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1670,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1671,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1672,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1673,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1674,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1675,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1676,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1677,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1678,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1679,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1680,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1681,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1682,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1683,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1684,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1685,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1686,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1687,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1688,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1689,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1690,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1691,
    "topic": "Bone Tumors",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1692,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1693,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1694,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1695,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1696,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1697,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1698,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1699,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1700,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1701,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1702,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1703,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1704,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1705,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1706,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1707,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1708,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1709,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1710,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1711,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1712,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1713,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1714,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1715,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1716,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1717,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1718,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1719,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1720,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1721,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1722,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1723,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1724,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1725,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1726,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1727,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1728,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1729,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1730,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1731,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1732,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1733,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1734,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1735,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1736,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1737,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1738,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1739,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1740,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1741,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1742,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1743,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1744,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1745,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1746,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1747,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1748,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1749,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1750,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1751,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1752,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1753,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1754,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1755,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1756,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1757,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1758,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1759,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1760,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1761,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1762,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1763,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1764,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1765,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1766,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1767,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1768,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1769,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1770,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1771,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1772,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1773,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1774,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1775,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1776,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1777,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1778,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1779,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1780,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1781,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1782,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1783,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1784,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1785,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1786,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1787,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1788,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1789,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1790,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1791,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1792,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1793,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1794,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1795,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1796,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1797,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1798,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1799,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1800,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1801,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1802,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1803,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1804,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1805,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1806,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1807,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1808,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1809,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1810,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1811,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1812,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1813,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1814,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1815,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1816,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1817,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1818,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1819,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1820,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1821,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1822,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1823,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1824,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1825,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1826,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1827,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1828,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1829,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1830,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1831,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1832,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1833,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1834,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1835,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1836,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1837,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1838,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1839,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1840,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1841,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1842,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1843,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1844,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1845,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1846,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1847,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1848,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1849,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1850,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1851,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1852,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1853,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1854,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1855,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1856,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1857,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1858,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1859,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1860,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1861,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1862,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1863,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1864,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1865,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1866,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1867,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1868,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1869,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1870,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1871,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1872,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1873,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1874,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1875,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1876,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1877,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1878,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1879,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1880,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1881,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1882,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1883,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1884,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1885,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1886,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1887,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1888,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1889,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1890,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1891,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1892,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1893,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1894,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1895,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1896,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1897,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1898,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1899,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1900,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1901,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1902,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1903,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1904,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1905,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1906,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1907,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1908,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1909,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1910,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1911,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1912,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1913,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1914,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1915,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1916,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1917,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 1918,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1919,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1920,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1921,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1922,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1923,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1924,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1925,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1926,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1927,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1928,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1929,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1930,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1931,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1932,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1933,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1934,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1935,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1936,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1937,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1938,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1939,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1940,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1941,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1942,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 1943,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1944,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 1945,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1946,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 1947,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 1948,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 1949,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1950,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1951,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1952,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1953,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1954,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1955,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1956,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1957,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1958,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1959,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1960,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1961,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1962,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 1963,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1964,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1965,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1966,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1967,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 1968,
    "topic": "Ischemic Stroke",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 1969,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1970,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1971,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 1972,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1973,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 1974,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 1975,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1976,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1977,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 1978,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 1979,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 1980,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 1981,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1982,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 1983,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1984,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 1985,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1986,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 1987,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1988,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 1989,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 1990,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 1991,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 1992,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 1993,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 1994,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 1995,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 1996,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 1997,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 1998,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 1999,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2000,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2001,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2002,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2003,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2004,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2005,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2006,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2007,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2008,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2009,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2010,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2011,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2012,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2013,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2014,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2015,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2016,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2017,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2018,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2019,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2020,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2021,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2022,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2023,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2024,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2025,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2026,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2027,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2028,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2029,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2030,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2031,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2032,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2033,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2034,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2035,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2036,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2037,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2038,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2039,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2040,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2041,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2042,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2043,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2044,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2045,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2046,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2047,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2048,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2049,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2050,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2051,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2052,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2053,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2054,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2055,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2056,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2057,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2058,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2059,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2060,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2061,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2062,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2063,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2064,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2065,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2066,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2067,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2068,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2069,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2070,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2071,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2072,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2073,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2074,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2075,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2076,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2077,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2078,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2079,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2080,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2081,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2082,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2083,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2084,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2085,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2086,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2087,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2088,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2089,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2090,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2091,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2092,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2093,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2094,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2095,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2096,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2097,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2098,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2099,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2100,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2101,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2102,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2103,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2104,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2105,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2106,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2107,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2108,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2109,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2110,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2111,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2112,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2113,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2114,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2115,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2116,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2117,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2118,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2119,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2120,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2121,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2122,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2123,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2124,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2125,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2126,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2127,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2128,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2129,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2130,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2131,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2132,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2133,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2134,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2135,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2136,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2137,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2138,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2139,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2140,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2141,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2142,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2143,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2144,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2145,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2146,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2147,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2148,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2149,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2150,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2151,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2152,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2153,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2154,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2155,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2156,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2157,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2158,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2159,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2160,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2161,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2162,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2163,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2164,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2165,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2166,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2167,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2168,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2169,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2170,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2171,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2172,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2173,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2174,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2175,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2176,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2177,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2178,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2179,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2180,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2181,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2182,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2183,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2184,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2185,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2186,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2187,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2188,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2189,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2190,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2191,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2192,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2193,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2194,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2195,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2196,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2197,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2198,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2199,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2200,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2201,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2202,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2203,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2204,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2205,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2206,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2207,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2208,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2209,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2210,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2211,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2212,
    "topic": "Aortic Diseases",
    "q": "What key echocardiographic finding confirms Aortic Diseases?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2213,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2214,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2215,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2216,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2217,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2218,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2219,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2220,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2221,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2222,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2223,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2224,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2225,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2226,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2227,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2228,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2229,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2230,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2231,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2232,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2233,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2234,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2235,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2236,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2237,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2238,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2239,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2240,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2241,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2242,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2243,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2244,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2245,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2246,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2247,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2248,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2249,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2250,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2251,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2252,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2253,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2254,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2255,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2256,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2257,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2258,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2259,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2260,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2261,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2262,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2263,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2264,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2265,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2266,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2267,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2268,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2269,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2270,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2271,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2272,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2273,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2274,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2275,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2276,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2277,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2278,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2279,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2280,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2281,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2282,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2283,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2284,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2285,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2286,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2287,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2288,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2289,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2290,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2291,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2292,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2293,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2294,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2295,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2296,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2297,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2298,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2299,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2300,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2301,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2302,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2303,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2304,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2305,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2306,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2307,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2308,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2309,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2310,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2311,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2312,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2313,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2314,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2315,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2316,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2317,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2318,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2319,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2320,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2321,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2322,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2323,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2324,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2325,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2326,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2327,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2328,
    "topic": "Aortic Diseases",
    "q": "The gold standard diagnostic test for {{c1::Aortic Diseases}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2329,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2330,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2331,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2332,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2333,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2334,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2335,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2336,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2337,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2338,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2339,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2340,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2341,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2342,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2343,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2344,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2345,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2346,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2347,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2348,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2349,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2350,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2351,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2352,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2353,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2354,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2355,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2356,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2357,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2358,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2359,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2360,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2361,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2362,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2363,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2364,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2365,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2366,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2367,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2368,
    "topic": "Aortic Diseases",
    "q": "What is the classic chest radiograph sign of Aortic Diseases?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2369,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2370,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2371,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2372,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2373,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2374,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2375,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2376,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2377,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2378,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2379,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2380,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2381,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2382,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2383,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2384,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2385,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2386,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2387,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2388,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2389,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2390,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2391,
    "topic": "Demyelinating Disease",
    "q": "What is the classic CT imaging shape and anatomical feature of Demyelinating Disease?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2392,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2393,
    "topic": "Arthritis",
    "q": "What is the classic periosteal reaction seen on radiographs in Arthritis?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2394,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2395,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2396,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2397,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2398,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2399,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2400,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2401,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2402,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2403,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2404,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2405,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2406,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2407,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2408,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2409,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2410,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2411,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2412,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2413,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2414,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2415,
    "topic": "Scrotal Pathology",
    "q": "What is the imaging modality of choice for diagnosing Scrotal Pathology?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2416,
    "topic": "Bone Tumors",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Tumors?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2417,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2418,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2419,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2420,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2421,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2422,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2423,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2424,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2425,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2426,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2427,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2428,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2429,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2430,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2431,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2432,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2433,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2434,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2435,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2436,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2437,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2438,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2439,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2440,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2441,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2442,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2443,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2444,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2445,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2446,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2447,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2448,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2449,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2450,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2451,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2452,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2453,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2454,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2455,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2456,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2457,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2458,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2459,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2460,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2461,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2462,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2463,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2464,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2465,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2466,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2467,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2468,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2469,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2470,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2471,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2472,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2473,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2474,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2475,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2476,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2477,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2478,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2479,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2480,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2481,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2482,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2483,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2484,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2485,
    "topic": "Pneumonia and Infections",
    "q": "What is Pneumonia and Infections on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2486,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2487,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2488,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2489,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2490,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2491,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2492,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2493,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2494,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2495,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2496,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2497,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2498,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2499,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2500,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2501,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2502,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2503,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2504,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2505,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2506,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2507,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2508,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2509,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2510,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2511,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2512,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2513,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2514,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2515,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2516,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2517,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2518,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2519,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2520,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2521,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2522,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2523,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2524,
    "topic": "Trauma and Fractures",
    "q": "What are the hallmark radiographic findings of Trauma and Fractures?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2525,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2526,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2527,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2528,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2529,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2530,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2531,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2532,
    "topic": "Bone Tumors",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2533,
    "topic": "Bone Tumors",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Tumors?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2534,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2535,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2536,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2537,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2538,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2539,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2540,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2541,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2542,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2543,
    "topic": "Valvular Disease",
    "q": "What key echocardiographic finding confirms Valvular Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2544,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2545,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2546,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2547,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2548,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2549,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2550,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2551,
    "topic": "Valvular Disease",
    "q": "What is the gold standard imaging modality for diagnosing Valvular Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2552,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2553,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2554,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2555,
    "topic": "Gynecologic Imaging",
    "q": "What is the imaging modality of choice for diagnosing Gynecologic Imaging?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2556,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2557,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2558,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2559,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2560,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2561,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2562,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2563,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2564,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2565,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2566,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2567,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2568,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2569,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2570,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2571,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2572,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2573,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2574,
    "topic": "Pulmonary Embolism",
    "q": "High-resolution CT in {{c1::Pulmonary Embolism}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2575,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2576,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2577,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2578,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2579,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2580,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2581,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2582,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2583,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2584,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2585,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2586,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2587,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2588,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2589,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2590,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2591,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2592,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2593,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2594,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2595,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2596,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2597,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2598,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2599,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2600,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2601,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2602,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2603,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2604,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2605,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2606,
    "topic": "Intracranial Hemorrhage",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2607,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2608,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2609,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2610,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2611,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2612,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2613,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2614,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2615,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2616,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2617,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2618,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2619,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2620,
    "topic": "Interstitial Lung Disease",
    "q": "High-resolution CT in {{c1::Interstitial Lung Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2621,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2622,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2623,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2624,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2625,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2626,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2627,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2628,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2629,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2630,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2631,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2632,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2633,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2634,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2635,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2636,
    "topic": "Granulomatous Disease",
    "q": "Imaging of {{c1::Granulomatous Disease}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2637,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2638,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2639,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2640,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2641,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2642,
    "topic": "Pulmonary Embolism",
    "q": "What key chest radiograph findings differentiate Pulmonary Embolism from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2643,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2644,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2645,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2646,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2647,
    "topic": "Renal Masses",
    "q": "The diagnostic imaging modality for {{c1::Renal Masses}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2648,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2649,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2650,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2651,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2652,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2653,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2654,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2655,
    "topic": "Brain Tumors",
    "q": "What is the classic CT imaging shape and anatomical feature of Brain Tumors?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2656,
    "topic": "Congenital Heart Disease",
    "q": "What key echocardiographic finding confirms Congenital Heart Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2657,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2658,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2659,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2660,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2661,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2662,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2663,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2664,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2665,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2666,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2667,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2668,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2669,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2670,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2671,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2672,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2673,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2674,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2675,
    "topic": "Arthritis",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Arthritis?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2676,
    "topic": "Adrenal Pathology",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2677,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2678,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2679,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2680,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2681,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2682,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2683,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2684,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2685,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2686,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2687,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2688,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2689,
    "topic": "Acute Abdomen",
    "q": "Abdominal imaging in {{c1::Acute Abdomen}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2690,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2691,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2692,
    "topic": "Renal Masses",
    "q": "What is the imaging modality of choice for diagnosing Renal Masses?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2693,
    "topic": "Gynecologic Imaging",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2694,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2695,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2696,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2697,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2698,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2699,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2700,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2701,
    "topic": "Scrotal Pathology",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2702,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2703,
    "topic": "Thyroid Imaging",
    "q": "What are the classic imaging findings of Thyroid Imaging on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2704,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2705,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2706,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2707,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2708,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2709,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2710,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2711,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2712,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2713,
    "topic": "Bone Tumors",
    "q": "What is the classic radiographic appearance of Bone Tumors?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2714,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2715,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2716,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2717,
    "topic": "Adrenal Pathology",
    "q": "What ultrasound features of Adrenal Pathology carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2718,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2719,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2720,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2721,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2722,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2723,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2724,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2725,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2726,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2727,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2728,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2729,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2730,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2731,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2732,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2733,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2734,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2735,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2736,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2737,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2738,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2739,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2740,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2741,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2742,
    "topic": "Gynecologic Imaging",
    "q": "The diagnostic imaging modality for {{c1::Gynecologic Imaging}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2743,
    "topic": "Renal Masses",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2744,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2745,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2746,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2747,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2748,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2749,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2750,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2751,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2752,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2753,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2754,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2755,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2756,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2757,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2758,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2759,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2760,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2761,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2762,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2763,
    "topic": "Arthritis",
    "q": "What is the classic radiographic appearance of Arthritis?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2764,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2765,
    "topic": "Pituitary Disorders",
    "q": "What ultrasound features of Pituitary Disorders carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2766,
    "topic": "Soft Tissue Infections",
    "q": "Imaging of {{c1::Soft Tissue Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2767,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2768,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2769,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2770,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2771,
    "topic": "Brain Tumors",
    "q": "Non-contrast head CT in {{c1::Brain Tumors}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2772,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2773,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2774,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2775,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2776,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2777,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2778,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2779,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2780,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2781,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2782,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2783,
    "topic": "Soft Tissue Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2784,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2785,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2786,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2787,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2788,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2789,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2790,
    "topic": "Demyelinating Disease",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2791,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2792,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2793,
    "topic": "Hepatic and Biliary Imaging",
    "q": "Abdominal imaging in {{c1::Hepatic and Biliary Imaging}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2794,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2795,
    "topic": "Bone Infections",
    "q": "What are the hallmark radiographic findings of Bone Infections?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2796,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2797,
    "topic": "Brain Tumors",
    "q": "What is the appearance of Brain Tumors on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2798,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2799,
    "topic": "Thyroid Imaging",
    "q": "Ultrasound assessment of {{c1::Thyroid Imaging}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2800,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2801,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2802,
    "topic": "Intracranial Hemorrhage",
    "q": "Non-contrast head CT in {{c1::Intracranial Hemorrhage}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2803,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2804,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2805,
    "topic": "Bone Tumors",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Tumors}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2806,
    "topic": "Pituitary Disorders",
    "q": "Ultrasound assessment of {{c1::Pituitary Disorders}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2807,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What are the classic abdominal radiograph findings in Hepatic and Biliary Imaging?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2808,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2809,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2810,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2811,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2812,
    "topic": "Aortic Diseases",
    "q": "What is the gold standard imaging modality for diagnosing Aortic Diseases, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2813,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2814,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2815,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2816,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2817,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2818,
    "topic": "Granulomatous Disease",
    "q": "What pathognomonic imaging finding suggests Granulomatous Disease?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2819,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2820,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2821,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2822,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2823,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the appearance of Intracranial Hemorrhage on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2824,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2825,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2826,
    "topic": "Pneumonia and Infections",
    "q": "High-resolution CT in {{c1::Pneumonia and Infections}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2827,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2828,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2829,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2830,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2831,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2832,
    "topic": "Ischemic Stroke",
    "q": "Non-contrast head CT in {{c1::Ischemic Stroke}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2833,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2834,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2835,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2836,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2837,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2838,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2839,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2840,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2841,
    "topic": "Valvular Disease",
    "q": "Chest radiography in {{c1::Valvular Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2842,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2843,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2844,
    "topic": "Arthritis",
    "q": "What are the hallmark radiographic findings of Arthritis?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2845,
    "topic": "Lymphadenopathy",
    "q": "Computed tomography in {{c1::Lymphadenopathy}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2846,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2847,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2848,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2849,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2850,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2851,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2852,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2853,
    "topic": "Valvular Disease",
    "q": "What is the classic chest radiograph sign of Valvular Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2854,
    "topic": "Intracranial Hemorrhage",
    "q": "What is the classic CT imaging shape and anatomical feature of Intracranial Hemorrhage?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2855,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2856,
    "topic": "Trauma and Fractures",
    "q": "The preferred imaging modality to evaluate {{c1::Trauma and Fractures}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2857,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2858,
    "topic": "Soft Tissue Infections",
    "q": "What pathognomonic imaging finding suggests Soft Tissue Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2859,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2860,
    "topic": "Ischemic Stroke",
    "q": "What is the appearance of Ischemic Stroke on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2861,
    "topic": "Pancreatic Disorders",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2862,
    "topic": "Scrotal Pathology",
    "q": "What are the hallmark imaging findings of Scrotal Pathology?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2863,
    "topic": "Granulomatous Disease",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2864,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2865,
    "topic": "Bone Tumors",
    "q": "Radiographs of {{c1::Bone Tumors}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2866,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2867,
    "topic": "Acute Abdomen",
    "q": "What is the most sensitive imaging sign for Acute Abdomen?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2868,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2869,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2870,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2871,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2872,
    "topic": "Trauma and Fractures",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Trauma and Fractures?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2873,
    "topic": "Opportunistic Infections",
    "q": "What are the classic radiographic features of Opportunistic Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2874,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2875,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2876,
    "topic": "Pancreatic Disorders",
    "q": "Abdominal imaging in {{c1::Pancreatic Disorders}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2877,
    "topic": "Bone Infections",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2878,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What key chest radiograph findings differentiate Pneumothorax and Pleural Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2879,
    "topic": "Arthritis",
    "q": "The preferred imaging modality to evaluate {{c1::Arthritis}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2880,
    "topic": "Bone Infections",
    "q": "What is the classic radiographic appearance of Bone Infections?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2881,
    "topic": "Opportunistic Infections",
    "q": "Imaging of {{c1::Opportunistic Infections}} classically demonstrates {{c2::subcutaneous gas}}.",
    "a": "Pathognomonic sign. (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2882,
    "topic": "Pituitary Disorders",
    "q": "What are the classic imaging findings of Pituitary Disorders on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2883,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2884,
    "topic": "Bone Infections",
    "q": "What periarticular radiographic reaction characterized by lifting of the periosteum and a triangular rim of reactive bone is classically seen in Bone Infections?",
    "a": "Codman triangle and sunburst appearance.",
    "type": "basic"
  },
  {
    "id": 2885,
    "topic": "Scrotal Pathology",
    "q": "The diagnostic imaging modality for {{c1::Scrotal Pathology}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2886,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2887,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2888,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2889,
    "topic": "Trauma and Fractures",
    "q": "What is the classic radiographic appearance of Trauma and Fractures?",
    "a": "Radiolucent nidus surrounded by a dense zone of reactive cortical sclerosis.",
    "type": "basic"
  },
  {
    "id": 2890,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2891,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2892,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2893,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2894,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2895,
    "topic": "Congenital Heart Disease",
    "q": "What is the gold standard imaging modality for diagnosing Congenital Heart Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2896,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2897,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2898,
    "topic": "Aortic Diseases",
    "q": "Chest radiography in {{c1::Aortic Diseases}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2899,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2900,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2901,
    "topic": "Brain Tumors",
    "q": "M",
    "a": "a (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2902,
    "topic": "Pneumonia and Infections",
    "q": "What key chest radiograph findings differentiate Pneumonia and Infections from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2903,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2904,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2905,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2906,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2907,
    "topic": "Nephrolithiasis",
    "q": "U",
    "a": "l (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2908,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2909,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2910,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2911,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2912,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2913,
    "topic": "Bone Infections",
    "q": "Radiographs of {{c1::Bone Infections}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2914,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2915,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2916,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2917,
    "topic": "Bone Tumors",
    "q": "What are the hallmark radiographic findings of Bone Tumors?",
    "a": "Symmetric joint space narrowing, marginal erosions, and periarticular osteopenia.",
    "type": "basic"
  },
  {
    "id": 2918,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2919,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2920,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2921,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2922,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2923,
    "topic": "Pulmonary Embolism",
    "q": "What is Pulmonary Embolism on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2924,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "High-resolution CT in {{c1::Pneumothorax and Pleural Disease}} reveals {{c2::honeycombing and reticular opacities}}.",
    "a": "Characteristic parenchymal pattern. (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2925,
    "topic": "Bowel Obstruction",
    "q": "What are the classic abdominal radiograph findings in Bowel Obstruction?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2926,
    "topic": "Adrenal Pathology",
    "q": "Ultrasound assessment of {{c1::Adrenal Pathology}} highlights {{c2::microcalcifications}}.",
    "a": "Malignancy risk stratification. (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2927,
    "topic": "Pneumonia and Infections",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2928,
    "topic": "Hepatic and Biliary Imaging",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2929,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2930,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2931,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2932,
    "topic": "Interstitial Lung Disease",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2933,
    "topic": "Hepatic and Biliary Imaging",
    "q": "What is the most sensitive imaging sign for Hepatic and Biliary Imaging?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2934,
    "topic": "Splenic Disorders",
    "q": "What imaging findings characterize Splenic Disorders?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2935,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2936,
    "topic": "Pancreatic Disorders",
    "q": "What are the classic abdominal radiograph findings in Pancreatic Disorders?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2937,
    "topic": "Interstitial Lung Disease",
    "q": "What key chest radiograph findings differentiate Interstitial Lung Disease from simple presentations?",
    "a": "Contralateral tracheal shift and ipsilateral hemidiaphragm depression.",
    "type": "basic"
  },
  {
    "id": 2938,
    "topic": "Trauma and Fractures",
    "q": "What is the classic periosteal reaction seen on radiographs in Trauma and Fractures?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 2939,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2940,
    "topic": "Pulmonary Embolism",
    "q": "T",
    "a": "h (System: Pulmonary System)",
    "type": "cloze"
  },
  {
    "id": 2941,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2942,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2943,
    "topic": "Pneumothorax and Pleural Disease",
    "q": "What is Pneumothorax and Pleural Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2944,
    "topic": "Acute Abdomen",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2945,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2946,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2947,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2948,
    "topic": "Valvular Disease",
    "q": "The gold standard diagnostic test for {{c1::Valvular Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2949,
    "topic": "Soft Tissue Infections",
    "q": "What are the classic radiographic features of Soft Tissue Infections?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2950,
    "topic": "Demyelinating Disease",
    "q": "Non-contrast head CT in {{c1::Demyelinating Disease}} reveals {{c2::hyperdense blood}}.",
    "a": "Acute neuroimaging appearance. (System: Nervous System)",
    "type": "cloze"
  },
  {
    "id": 2951,
    "topic": "Ischemic Stroke",
    "q": "What is the classic CT imaging shape and anatomical feature of Ischemic Stroke?",
    "a": "Biconvex lens-shaped hyperdensity bounded by cranial suture lines.",
    "type": "basic"
  },
  {
    "id": 2952,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2953,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2954,
    "topic": "Pericardial Disease",
    "q": "What key echocardiographic finding confirms Pericardial Disease?",
    "a": "Right atrial and right ventricular diastolic collapse.",
    "type": "basic"
  },
  {
    "id": 2955,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2956,
    "topic": "Trauma and Fractures",
    "q": "Radiographs of {{c1::Trauma and Fractures}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2957,
    "topic": "Nephrolithiasis",
    "q": "What are the hallmark imaging findings of Nephrolithiasis?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2958,
    "topic": "Pericardial Disease",
    "q": "The gold standard diagnostic test for {{c1::Pericardial Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2959,
    "topic": "Nephrolithiasis",
    "q": "The diagnostic imaging modality for {{c1::Nephrolithiasis}} is {{c2::non-contrast CT}}.",
    "a": "Standard clinical imaging protocol. (System: Genitourinary System)",
    "type": "cloze"
  },
  {
    "id": 2960,
    "topic": "Congenital Heart Disease",
    "q": "The gold standard diagnostic test for {{c1::Congenital Heart Disease}} is {{c2::CT angiography}}.",
    "a": "Definitive vascular or cardiac imaging. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2961,
    "topic": "Lymphadenopathy",
    "q": "What imaging findings characterize Lymphadenopathy?",
    "a": "Diffuse retroperitoneal lymphadenopathy coalescing into bulky masses.",
    "type": "basic"
  },
  {
    "id": 2962,
    "topic": "Congenital Heart Disease",
    "q": "What is the classic chest radiograph sign of Congenital Heart Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2963,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2964,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2965,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2966,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2967,
    "topic": "Thyroid Imaging",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2968,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2969,
    "topic": "Opportunistic Infections",
    "q": "T",
    "a": "h (System: Infectious Disease & Immunology)",
    "type": "cloze"
  },
  {
    "id": 2970,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2971,
    "topic": "Splenic Disorders",
    "q": "What is the classic CT appearance of Splenic Disorders?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2972,
    "topic": "Lymphadenopathy",
    "q": "What is the classic CT appearance of Lymphadenopathy?",
    "a": "Peripheral wedge-shaped hypodense area abutting the capsule.",
    "type": "basic"
  },
  {
    "id": 2973,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2974,
    "topic": "Thyroid Imaging",
    "q": "What ultrasound features of Thyroid Imaging carry the highest malignancy risk?",
    "a": "Microcalcifications, taller-than-wide shape, hypoechogenicity, and irregular margins.",
    "type": "basic"
  },
  {
    "id": 2975,
    "topic": "Pericardial Disease",
    "q": "Chest radiography in {{c1::Pericardial Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2976,
    "topic": "Interstitial Lung Disease",
    "q": "What is Interstitial Lung Disease on a chest radiograph?",
    "a": "Focal oligemia (Westermark sign) distal to a pulmonary embolus.",
    "type": "basic"
  },
  {
    "id": 2977,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2978,
    "topic": "Gynecologic Imaging",
    "q": "What are the hallmark imaging findings of Gynecologic Imaging?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2979,
    "topic": "Pituitary Disorders",
    "q": "C",
    "a": "r (System: Endocrine System)",
    "type": "cloze"
  },
  {
    "id": 2980,
    "topic": "Nephrolithiasis",
    "q": "What is the imaging modality of choice for diagnosing Nephrolithiasis?",
    "a": "Non-contrast helical CT of the abdomen and pelvis.",
    "type": "basic"
  },
  {
    "id": 2981,
    "topic": "Lymphadenopathy",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2982,
    "topic": "Splenic Disorders",
    "q": "R",
    "a": "a (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2983,
    "topic": "Renal Masses",
    "q": "What are the hallmark imaging findings of Renal Masses?",
    "a": "Solid renal mass with heterogeneous contrast enhancement.",
    "type": "basic"
  },
  {
    "id": 2984,
    "topic": "Granulomatous Disease",
    "q": "What are the classic radiographic features of Granulomatous Disease?",
    "a": "Cavitary apical pulmonary lesions with surrounding consolidation.",
    "type": "basic"
  },
  {
    "id": 2985,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2986,
    "topic": "Pancreatic Disorders",
    "q": "What is the most sensitive imaging sign for Pancreatic Disorders?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2987,
    "topic": "Adrenal Pathology",
    "q": "What are the classic imaging findings of Adrenal Pathology on cross-sectional scans?",
    "a": "Lipid-rich adrenal adenoma with low unenhanced attenuation (<10 HU).",
    "type": "basic"
  },
  {
    "id": 2988,
    "topic": "Pericardial Disease",
    "q": "What is the gold standard imaging modality for diagnosing Pericardial Disease, and what is the key finding?",
    "a": "CT angiography demonstrating an intimal flap separating true and false lumens.",
    "type": "basic"
  },
  {
    "id": 2989,
    "topic": "Bowel Obstruction",
    "q": "What is the most sensitive imaging sign for Bowel Obstruction?",
    "a": "Free air under the right hemidiaphragm on upright chest radiograph.",
    "type": "basic"
  },
  {
    "id": 2990,
    "topic": "Bone Infections",
    "q": "The preferred imaging modality to evaluate {{c1::Bone Infections}} is {{c2::MRI}}.",
    "a": "Provides high sensitivity for structural evaluation. (System: Musculoskeletal System)",
    "type": "cloze"
  },
  {
    "id": 2991,
    "topic": "Pericardial Disease",
    "q": "What is the classic chest radiograph sign of Pericardial Disease?",
    "a": "Water-bottle heart configuration with clear lung fields.",
    "type": "basic"
  },
  {
    "id": 2992,
    "topic": "Demyelinating Disease",
    "q": "What is the appearance of Demyelinating Disease on neuroimaging?",
    "a": "Crescent-shaped hyperdensity crossing suture lines.",
    "type": "basic"
  },
  {
    "id": 2993,
    "topic": "Opportunistic Infections",
    "q": "What pathognomonic imaging finding suggests Opportunistic Infections?",
    "a": "Subcutaneous gas tracking along fascial planes in necrotizing fasciitis.",
    "type": "basic"
  },
  {
    "id": 2994,
    "topic": "Splenic Disorders",
    "q": "Computed tomography in {{c1::Splenic Disorders}} demonstrates {{c2::hypodense parenchymal lesions}}.",
    "a": "Diagnostic hallmark. (System: Hematologic & Lymphatic System)",
    "type": "cloze"
  },
  {
    "id": 2995,
    "topic": "Acute Abdomen",
    "q": "What are the classic abdominal radiograph findings in Acute Abdomen?",
    "a": "Dilated small bowel loops in a step-ladder pattern with multiple air-fluid levels.",
    "type": "basic"
  },
  {
    "id": 2996,
    "topic": "Bowel Obstruction",
    "q": "Abdominal imaging in {{c1::Bowel Obstruction}} typically demonstrates {{c2::bowel dilation}}.",
    "a": "Diagnostic hallmark. (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2997,
    "topic": "Bowel Obstruction",
    "q": "T",
    "a": "h (System: Gastrointestinal System)",
    "type": "cloze"
  },
  {
    "id": 2998,
    "topic": "Congenital Heart Disease",
    "q": "Chest radiography in {{c1::Congenital Heart Disease}} classically demonstrates a {{c2::cardiac silhouette enlargement}}.",
    "a": "Diagnostic chest radiograph sign. (System: Cardiovascular System)",
    "type": "cloze"
  },
  {
    "id": 2999,
    "topic": "Bone Infections",
    "q": "What is the classic periosteal reaction seen on radiographs in Bone Infections?",
    "a": "Concentric layers of reactive new bone (onion-skin appearance).",
    "type": "basic"
  },
  {
    "id": 3000,
    "topic": "Arthritis",
    "q": "Radiographs of {{c1::Arthritis}} typically demonstrate {{c2::joint space narrowing and erosions}}.",
    "a": "Key diagnostic imaging hallmark. (System: Musculoskeletal System)",
    "type": "cloze"
  }
];
