---
title: "I built the dashboard for the operator, not the executive"
dek: "Leadership wanted a single number. The people running the floor needed something they could act on at 9 a.m. Monday. I shipped both against one source of truth."
tag: "BI & Reporting"
date: 2025-04-08
slug: "dashboard-for-operator"
draft: false
---

## The situation

There was pressure to simplify reporting into a single executive-facing number. One score, one color, one story. That's a reasonable ask from leadership. But the people actually running the operation, team leads and floor managers, needed something different. They needed to know which queues were underperforming, which agents needed coaching, and where to focus attention before the week started. A single number doesn't tell you any of that.

## What I weighed

Building one surface is easier. Building two means maintaining two, keeping them in sync, and making sure they draw from the same underlying data so they never contradict each other. There's also a political dimension: a detailed operational view makes performance visible at a granularity that not everyone is comfortable with.

The alternative was a single dashboard that tried to serve both audiences. Those usually serve neither well.

## What I did

I built two surfaces off one Power BI data model. The executive view showed the headline metrics: overall CSAT, trend, and variance from target. The operational view showed the same data broken down by POD, queue, and time period, with enough detail to drive a Monday morning team huddle.

Same source of truth. Different lenses.

## What I learned

Audience-driven design isn't a UX principle, it's an analytical one. The question "who acts on this and what decision are they making?" should come before any dashboard is built. When you skip that question you get a report that looks complete but doesn't actually help anyone do anything.

The executive doesn't need to know which queue had a 12% drop on Thursday. The floor manager needs to know exactly that.
