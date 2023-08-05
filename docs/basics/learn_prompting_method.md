---
sidebar_position: 1000
---

# 🟢 The Learn Prompting Method

:::takeaways
- Learn our method for Gen AI/prompt engineering
- Apply it to a case study
:::

The Learn Prompting Method of Problem Solving with Generative AI is a framework for problem solving in the Gen AI space. It helps you decide whether Gen AI is the right solution, how to apply prompt engineering, what tools to select, and more.
We will walk through each of the five steps, then provide a case study using this method.

## The Five Steps

### 1. State your problem

The first step in the Learn Prompting Method is to state your problem. This involves clearly articulating the issue you are facing, without jumping to potential solutions. For instance, "Our customers have queries about our product's features that need to be addressed, since we are missing out on potential business".

### 2. Examine relevant information

After stating your problem, the next step is to examine relevant information. This could include researching similar problems and their solutions, studying the context of your problem, or analyzing data related to your problem. It also includes finding relevant prompts and [Gen AI tools](https://learnprompting.org/docs/category/-tooling). This step is crucial in understanding the nuances of your problem and identifying potential approaches to solve it. At this point, you should know if Gen AI is a good fit for your problem.

### 3. Propose a solution

Once you've examined the relevant information, you should have a clearer idea of how to address your problem. Now it's time to propose a solution. This could be a prompt, a new tool, or a new way of using a current tool. The solution should be directly linked to the problem you've stated and the information you've examined.

### 4. Adjust the solution

Once you've picked a solution, which could be a prompt or a tool, the next step is to adjust it based on feedback and testing. This could involve setting up tests to see how users interact with the prompt, getting feedback from users, or making adjustments based on your own intuition and expertise. This is where prompt engineering comes in!

### 5. Launch your solution

The final step in the Learn Prompting Method is to launch your solution. This could involve integrating it into your product, publishing it on a platform, or simply starting to use it in your interactions with users. 

The Learn Prompting Method is a cycle, not a linear process. After launching your solution, you should continue to monitor its performance and make adjustments as needed. You can use the acronym SEPAL to remember these steps!

## Case Study: Using the Learn Prompting Method to Create a Hat Information Bot

Let's look at a case study of how the Learn Prompting Method could be used to create a chatbot from scratch. In this case, we have a collection of user questions about hats.

1. **State your problem:** We have a large volume of user queries about different types of hats, their history, and how to wear them. We need to do something about this because we are losing potential business.

2. **Examine relevant information:** We analyze the user queries we have collected. We notice that the most common questions are about the history of specific types of hats, how to wear them properly, and how to care for them. We also look at existing chatbots, examining their context length, pricing, and speed, and Gen AI tools that could potentially help us address our problem.

3. **Propose a solution:** Based on our analysis, we decide to create a chatbot using ChatGPT that can answer these three types of questions. We draft an initial prompt: 

<AIInput>
You are a knowledgeable hat historian who has studied the history, styles, and proper ways to wear various types of hats. A user asks you a question about hats. Respond to their query in a helpful and informative manner: USER_INPUT
</AIInput>

4. **Adjust the solution:** We test our initial prompts with a small group of users and collect their feedback. Based on their feedback, we realize that our prompts need to be more engaging and less formal. 

We adjust our prompts accordingly:

<AIInput>
You are a hat enthusiast with a wealth of knowledge about the history, styles, and etiquette of wearing various types of hats. A user is curious about hats and asks you a question. Respond to their query in a friendly and informative manner."
</AIInput>

We do even more user testing and realize that we need to segment our market: people interested hat history prefer the more formal approach, while those interested in style and wearing the hat would prefer a more informal bot. We develop an initial routing prompt that decides which type of user they are based on their question:

<AIInput>
"You are an AI that understands the nuances of hat-related queries. Based on the user's question, determine if they are more interested in the formal history of hats or the informal style and wearing of hats. Respond with 'Formal' for history-related queries and 'Informal' for style and wearing-related queries."
</AIInput>

We use a [tool](https://learnprompting.org/docs/category/-tooling) like Langchain, Voiceflow, or Dust to connect the routing prompt to the other two.

5. **Launch your solution:** We launch the chatbot on our website. We continue to monitor user interactions with the bot and make further adjustments as needed.

By following the Learn Prompting Method, we were able to create a chatbot that effectively answers user queries about hats. This process highlights the importance of understanding user needs, testing and adjusting solutions, and continuously improving based on user feedback.