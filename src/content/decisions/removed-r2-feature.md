---
title: "I removed the feature that gave me R² = 0.93"
dek: "A predictive model had one variable that explained almost everything. Here's why I killed it before it shipped."
tag: "Predictive modeling"
date: 2025-08-14
slug: "removed-r2-feature"
draft: false
---

## The situation

I was building a regression model to predict employee headcount for a set of companies, working with roughly 19,400 records. The goal was a deployable model, not a research exercise. At some point during feature selection, one variable came back with an R² contribution that made the whole model look solved: 0.93 correlation with the target.

That number should have made me suspicious. It did.

## What I checked

I pulled the distribution of that variable against the target. About 21% of the values were near-identical to the employee count I was trying to predict. Not correlated. Nearly identical. The feature wasn't explaining employee count, it was repeating it with slight noise. Shipping that model would have meant shipping a lookup table dressed up as a prediction.

I also ran a Random Forest alongside the linear regression to see if the signal held up differently. It didn't change the diagnosis.

## What I did

I removed the feature. The model dropped to R² = 0.64 using multiple linear regression. That's the number I reported and the model I shipped.

## What I learned

R² = 0.93 is not a result. It's a question. Any time a single feature explains that much variance in a real-world dataset, the first instinct should be to look for data leakage, not to celebrate. The 0.64 model was honest. The 0.93 model was a liability.

Reporting the lower number was the right call. It's also the harder one to make when someone is expecting strong results.
