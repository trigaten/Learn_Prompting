---
sidebar_position: 90
---

# 📙 Vocabulary Reference

Please refer to this page for a list of terms and concepts that we will use throughout this course.

#### Large Language Models (LLMs), Pretrained Language Models (PLMs)(@branch2022evaluating), Language Models (LMs), and foundation models

These terms all refer more or less to the same thing: large AIs (neural networks), which have usually been trained 
on a huge amount of text.

#### Masked Language Models (MLMs)

MLMs are a type of NLP model, which have a special token, usually `[MASK]`, which is
replaced with a word from the vocabulary. The model then predicts the word that
was masked. For example, if the sentence is "The dog is [MASK] the cat", the model
will predict "chasing" with high probability.

#### Sentiment Analysis

Sentiment analysis is the task of classifying text into positive, negative, or other sentiments. 