---
title: "The default decision threshold isn't actually 0.5"
dek: "My churn model had solid accuracy at the default threshold. I changed it anyway, because accuracy wasn't the right thing to optimize for."
tag: "Machine learning"
date: 2025-06-18
slug: "decision-threshold"
draft: false
---

## The situation

I was building a churn prediction model on a telco dataset of roughly 7,000 customers, using Logistic Regression and Random Forest. At the default 0.5 classification threshold, the model looked decent. Accuracy was reasonable. But when I looked at the confusion matrix, the recall on churners was low. The model was missing a lot of actual churners, classifying them as safe.

## What I weighed

The business asymmetry here is straightforward: a false negative (missing a churner) costs more than a false positive (flagging a loyal customer for retention outreach). Optimizing for accuracy treats both errors as equal. They're not.

The question was how far to move the threshold and what I'd be trading. Lowering it to 0.35 meant more churners caught, but also more loyal customers incorrectly flagged. I used the ROC curve to find the point where recall improved meaningfully without precision collapsing entirely.

## What I did

I set the threshold to 0.35. Recall went from 0.55 to 0.72. The ROC-AUC was 0.84. I documented the trade-off explicitly so whoever used the model understood they were getting a tool calibrated for retention, not a balanced classifier.

## What I learned

The default threshold is a placeholder, not a decision. It exists because someone had to pick a number. Whether it's the right number depends entirely on what the model is for and what errors cost more.

Explaining this to a non-technical audience is harder than tuning the threshold. "We're intentionally flagging more people than necessary" sounds wrong until you explain why missing a churner is worse than a wasted retention call.
