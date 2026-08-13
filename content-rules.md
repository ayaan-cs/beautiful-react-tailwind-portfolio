# Content rules — non-negotiable

1. `src/content/` is the only factual source for the site. If a claim is not in those files, it does not ship.
2. Never invent, infer, or strengthen a fact, metric, skill, status, or title. Fail closed: remove and flag.
3. Titles are exact as listed in `src/content/experience.js`.
4. Self-rated skill percentages are not headline metrics. Do not invent years of experience.
5. Live demo URLs must be real. If a demo or repo is not ready, label it in-development. Never use placeholder URLs.
6. Demos must not render invented data as measured results. Synthetic or illustrative datasets must be labelled.
7. Per-project NEVER-claim list:

   - **SentinelAI:** Unsupervised ensemble (Isolation Forest, One-Class SVM, DBSCAN) on synthetic/generated flows (`Faker` is a dependency). NEVER quote a detection AUC, F1, or production deployment. NEVER claim labelled-training superiority without a published eval.
   - **MindSight:** Visualizes synthetic brain-wave series and calls Hugging Face DeepSeek-R1. NEVER claim clinical EEG, medical accuracy, or real patient data.
   - **LaLiga TL:** Public Streamlit analytics app. The upstream README describes live APIs, injury models, and Ballon d'Or prediction as vision / future work. NEVER headline those as shipped models.
   - **IMDB sentiment:** Use the per-model table (Logistic Regression 88.45% accuracy is the best sklearn result). DistilBERT was used without additional training; do not call it fine-tuned. Dataset is the public IMDB review set, not proprietary data.
   - **Music Sentiment Analyzer:** In development. No public repo or demo URL until they exist.
   - **KNIME predictive maintenance:** NASA turbofan dataset. The repo README still has `XX%` placeholders. NEVER invent cost-savings or accuracy figures.
   - **Quanta:** Godot 4.7 prologue plus a local asset studio. NEVER claim a shipped commercial game or cloud inference.
   - **H-E-B / Samsung / USDA / Klein:** Employment-evidenced only. No public model metrics unless listed in content files.

8. American English. No em dashes. Never claim a document or model is error-free.
9. Where a result has a natural baseline (class balance, incumbent, random), show the baseline next to the number.
