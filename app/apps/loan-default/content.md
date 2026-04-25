# Loan Default Predictor

> A LightGBM model that estimates default probability for Lending Club personal loans, served as a live Streamlit web app.

A small end-to-end ML project built on the public Lending Club historical loan dataset. The model takes borrower features at loan origination and returns the probability that the loan will be charged off rather than fully repaid. The deployed Streamlit app lets anyone poke sliders and watch the prediction update.

---

## Why this project

Most of my paid ML work is regulated and not shippable to a portfolio. This is a deliberately small public project that mirrors the kind of work I do day to day — tabular data, gradient-boosted trees, careful feature engineering around leakage, and an interactive demo built around the model.

---

## Tech stack

| Layer | Technology |
|---|---|
| Language | Python 3.12 |
| Modeling | LightGBM 4.5 |
| Tooling | scikit-learn, pandas, numpy |
| App | Streamlit |
| Hosting | Streamlit Community Cloud |

---

## Dataset

**Lending Club accepted loans, 2007–2018Q4.** ~2.2M rows of approved loans with their final outcome (`Fully Paid` or `Charged Off`), plus borrower features captured at the time of origination.

Public dataset, available on Kaggle.

---

## Feature engineering

- **Filtered to settled loans only.** In-flight loans (`Current`, `In Grace Period`, etc.) were excluded since the outcome is not yet known.
- **Parsed text-encoded numerics.** `term` ("36 months" → 36), `int_rate` ("13.5%" → 13.5), `revol_util`, and `emp_length` ("10+ years" → 10).
- **Dropped leakage columns.** `total_pymnt`, `recoveries`, `last_pymnt_*`, `out_prncp` and similar fields are populated post-default and would short-circuit the model. Removing them is the most consequential modeling decision in the project.
- **Twenty originate-time features kept**, including loan amount, term, interest rate, FICO range, DTI, employment length, home ownership, purpose, state, and prior credit history (delinquencies, inquiries, open accounts, public records, revolving balance and utilization).
- **Stratified subsample to 10%** (~135K rows) of the full dataset for fast iteration. Final-data AUC came within a couple of percentage points of full-data AUC in spot checks.

---

## Modeling

LightGBM classifier, 500 trees, learning rate 0.05, num_leaves 63, early stopping on validation AUC. Categorical features (term, grade, home ownership, verification status, purpose, state) handled natively by LightGBM, no manual encoding. 80/20 train/test split, stratified by default outcome.

### Results

| Metric | Value |
|---|---|
| AUC | 0.714 |
| Accuracy at 0.5 threshold | 0.804 |
| Test set size | 26,907 |
| Default rate (test) | 19.96% |

AUC of 0.714 sits in the typical range reported in the Lending Club literature (0.70–0.75), so the model is performing as expected — strong enough to be useful, not artificially boosted by leaked features.

### Diagnostic plots

<p align="center">
  <img src="/apps/loan-default/roc.png" width="48%" alt="ROC curve">
  <img src="/apps/loan-default/confusion.png" width="48%" alt="Confusion matrix">
</p>

<p align="center">
  <img src="/apps/loan-default/importance.png" width="80%" alt="Top 20 features by importance">
</p>

---

## Notes on feature importance

Gain-based feature importance ranks `addr_state` near the top. That's a known quirk of high-cardinality categoricals in LightGBM — the model gets many splits from a 50-state feature, which inflates total gain. SHAP values would tell a more honest story about per-prediction influence; that's a planned follow-up.

---

## Live demo

Try it at **[loandefaultpredictor-rayjackcb.streamlit.app](https://loandefaultpredictor-rayjackcb.streamlit.app)**. Move the sliders and dropdowns in the sidebar to see the prediction update live.

---

## Source

Repo at [github.com/rjcb-commits/loan_default_predictor](https://github.com/rjcb-commits/loan_default_predictor).
