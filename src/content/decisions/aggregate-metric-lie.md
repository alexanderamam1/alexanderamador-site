---
title: "The aggregate metric was a lie"
dek: "Our overall CSAT looked stable. Underneath it, some PODs were drowning while others carried the score. I rebuilt the dashboard around the thing leadership didn't initially want to see."
tag: "BI & Reporting"
date: 2025-07-10
slug: "aggregate-metric-lie"
draft: false
---

## The situation

I was reporting CSAT across a six-POD operation for a US fintech client. Every week the aggregate number looked reasonable, stable enough that it didn't trigger escalations. But I kept noticing that the variance between PODs was wide. Some were consistently strong. Others were consistently underwater. The aggregate was averaging them into silence.

## What I weighed

The easier path was to keep reporting the single number. It's what the existing dashboard showed, it's what stakeholders were used to, and surfacing POD-level performance meant some teams would suddenly look bad on a metric they hadn't been explicitly managed against.

The harder path was to rebuild the dashboard around segments. That meant more complexity, more uncomfortable conversations, and the possibility that leadership would push back on the granularity.

## What I did

I rebuilt the dashboard in Power BI to show performance by POD, with each POD's target factored in separately. The aggregate number stayed visible but it was no longer the headline. The segment view was. Outliers that had been invisible for months became immediately apparent.

## What I learned

An aggregate metric that looks stable is sometimes just a bad average. When you have distinct operating units with different targets and different conditions, a single number doesn't describe anything real. It describes the math.

The dashboard became the main reporting surface for the operation. The conversations it enabled, about why certain PODs were underperforming and what was structurally different about them, were only possible because the data was no longer flattened.
