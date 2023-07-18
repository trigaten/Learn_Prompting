---
sidebar_position: 30
---

# 🟢 Study Buddy

One of our favorite ways to use LLMs is as a study tool! In particular, it is useful for explaining confusing terms as well as quizzing you on test content.

## Explaining Terms

I was recently reading a textbook about Cacti(@nobel2002cacti), and saw this passage:

```text
Because of adaptations to xeric conditions and the presence of **less derived woods** in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically. 
```

I had no idea what **less derived woods** meant, and Google only showed research articles on it. I decided to use ChatGPT to find out what it meant. I gave it the following prompt, which is simple the passage from the book and my question.

```text
Because of adaptations to xeric conditions and the presence of less derived woods in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically. 

What do less derived woods mean?

// highlight-start
In this context, "less derived woods" refers to the ancestral or primitive form of wood found in the early evolution of plants. These woods lack specialized structures and features that evolved later in more derived or advanced plants. In the Pereskioideae subfamily of the Cactaceae family, the wood is less derived compared to other subfamilies and is more similar to the wood found in non-cactus plants. The less derived wood in Pereskioideae is thought to be an adaptation to the more humid and less xeric environments in which these plants grow compared to other cacti.
//highlight-end
```

The model was able to answer my question quickly and I was able to continue with my reading.

## Quizzing Yourself

Another way to use LLMs as a study tool is to quiz yourself. If you have an upcoming calculus test, you could simply ask:

```text
Generate 5 calculus I quiz questions for me:

// highlight-start
1. What is the derivative of y = x3?
2. Evaluate the indefinite integral of x3 + 5x2 + 7x + 4.
3. What is the product rule for derivatives?
4. Find the equation of the line tangent to y = x2 at the point (4, 16).
5. What is the second derivative of y = x4?
//highlight-end
```

If you are studying a more specific topic, you may need to give the model additional information, for example your class notes!

```text
3/20/2020 2:30 PM

Marketing Class Notes

- Discussed 4 P's of marketing: Product, Price, Place, Promotion
- Difference between B2C and B2B: B2C is direct consumer market, B2B is business to business
- Different types of market research: Quantitative and Qualitative, such as surveys and focus groups
- Pricing Strategies: Skimming, Penetration, Competition, and Value
- Segmentation: segmenting customer base by age, income, etc.
- 4 types of segmentation: Demographic, Geographic, Psychographic, and Behavioral
- Discussed different promotional tools: Advertising, Personal Selling, Public Relations, Direct Marketing, and Sales Promotions

Generate 5 marketing quiz questions for me based on my notes:

// highlight-start
1. What are the 4 P's of marketing?
2. What is the difference between B2C and B2B?
3. What are two types of market research?
4. What are 4 types of segmentation?
5. Name 5 promotional tools.
//highlight-end
```

## Conclusion

There are probably other ways to use LLMs to study. Many learning companies like Duolingo and Quizlet are implementing LLMs into their products.