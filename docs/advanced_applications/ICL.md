---
sidebar_position: 2
---

# 🟡 Advanced In-Context Learning (ICL)

ICL is an exciting new paradigm in NLP where large language models LLMs make predictions based on contexts augmented with just a few training examples. LLMs are able to extract patterns from the examples provided in the context and use them to perform many complex NLP tasks. We'll be discussing recent optimizations of ICL covering methods for fine-tuning LLM for ICL, how to pick good training examples for ICL and how to design great prompts.

The key idea of in-context learning is to learn from analogy. First, ICL requires a few examples to form a demonstration context. These examples are usually written in natural language templates. Then, ICL concatenates a query question and a piece of demonstration context together to form a prompt, which is then fed into the language model for prediction. Different from supervised learning requiring a training stage that uses backward gradients to update model parameters, ICL does not conduct parameter updates and directly performs predictions on the pretrained language models. The model is expected to learn the pattern hidden in the demonstration and accordingly make the right prediction.

## **ICL Methods**

The figure above illustrates a typical ICL process each step on the figure plays a factor in ICL and can be optimized to yield better performance we're going to discuss a few of those steps.

  
  - **Prompt Design (Demonstration design)**
  
  - **LLM Selections and warmup**
    
  - **Scoring Function**

<p align="center">
  <img width="800" height="400" src="https://user-images.githubusercontent.com/68178214/218292834-814fbab6-1f82-4960-8447-d3ecf2064879.png" />
</p>

 
### **1. Prompt Design (Demonstration design)**

Now let's talk about another step of ICL which is prompt design, or demonstration design as shown in the figure above. This step is very important and can make or break your model's performance. There are two main areas of prompt design

  - Demonstration organization 
   
  - Demonstration format

### Demonstration organization

First let's focus on demonstration organization. This involves selecting and then ordering a subset of the training examples you have available for your Target tasks. The selected examples will be used as demonstrations to the LLM. Example selection can be either unsupervised or supervised. 

#### Demonstration Selection

Unsupervised methods for selection include using predefined metrics like L2 distance or cosine similarity distance to select the closest neighbours as demonstrations, or selecting prompts with low perplexity. 

Supervised methods involve using a scoring language model to evaluate the concatenation of each candidate example and the input, labelling high scoring candidates as positive examples and low scoring candidates as hard negative examples. Reinforcement learning has also been used to model the example selection process.

#### Demonstration Ordering

Now for ordering the examples which can also play a big role. Studies have proposed training free methods for sorting examples like sorting by distance to the input or using entropy metrics.

### Demonstration Formatting

A common way to format demonstrations is concatenating examples (x1, y1), . . . ,(xk, yk) with a template T directly. However, in some tasks thatnneed complex reasoning (e.g., math word problems, commonsense reasoning), it is not easy to learn the mapping from xi to yi with only k demonstrations. Although template engineering has been studied in prompting, some researchers aim to design a better format of demonstrations for ICL by describing tasks with the instruction I and adding intermediate reasoning steps between xi and yi

####  Instruction Formatting

This involves the design of the prompt itself, including its language and structure. One aspect of formatting is the format of the instructions of the prompt, good instructions are key to good ICL performance, but they can be hard to come by because they rely on human written sentences. LLM can actually help to generate task instructions on their own, given several demonstration examples methods like automatic prompt engineer(APE) use LLM for automatic generation and selection of instructions in summary prompt design is crucial to ICL success and there are many approaches to optimize different aspects of the prompts to boost performance optimizing each of the prompt components is likely to have a big impact on the performance and robustness of ICL. 

#### Reasoning Steps Formatting

Adding intermediate reasoning steps between inputs and outputs to construct demonstrations, which are called chain-of-thoughts (CoT). With chain-of-thought prompting, LLMs predict chain-of-thoughts context and then give the final answer. CoT prompting can learn complex reasoning by decomposing input-output mappings into many intermediate steps. As input-output mappings are decomposed into step-by-step reasoning, some researchers apply multi-stage ICL for CoT prompting and design CoT demonstrations for each step. Multi-stage ICL queries LLMs with different prompts in each reasoning step. Self-Ask allows LLMs to generate follow-up questions for the input and ask themselves these questions. Then the questions and intermediate answers will be added to CoTs.


### **2. LLM Selections and warmup**

The first step is of course the pre-training of the LLM or selecting a pre-trained model to be used out of the box such as GPT 3 or Bloom. it's important to note that the ICL capacity of LLM seems to increase as the number of model parameters or the number of pre-training steps increases so keep that in mind. Once you have a pre-trained LLM you want to use you can either use it as it is or you can optionally do something called Model warm-up model warm-up fine tunes the LLM to specifically increase its capacity for in-context learning during inference.

Let's look at two ways to do model warm-up

   - Supervised in context training
   
   -  Self-supervised in-context training

### Supervised in context training

Supervised in-context training fine tunes the LLM on a data set containing a broad range of tasks prepared in ICL formats similar to the format you would like to use for your task. The training improves the overall few shot ICL abilities of the model because it learns to process diverse ICL examples. Supervised in-context training works best when the tasks and data sets used are close to the domain of the target task the LM will ultimately be used for.

### Self-supervised in-context training

Self-supervised in-context training on the other hand involves constructing self-supervised training data based on the ICL formats of Downstream tasks. Basically, you use the Frozen LLM to generate some synthetic training data for your Target task in the Target ICL format then you fine-tune the LLM on that synthetic training data, this approach has been shown to improve the ICL capacity of the model since it becomes more focused on the specific format that will be presented during Inference. In overall model warm-up has the benefit that the model becomes more sensitive towards ICL, leading to better ICL performance. However keep in mind that model warm-up requires updating the model weights or adding additional weights to the model this is prohibitive for LLM since it might require having multiple versions of the LLM for each Target task.

### **3. Scoring Function**

The scoring function decides how we can transform the predictions of a language model into an estimation of the likelihood of a specific answer

A direct estimation method (Direct) adopts the conditional probability of candidate answers that can be represented by tokens in the vocabulary of language models. Although directly adopting the conditional probability of candidate answers is efficient, this method still poses some restrictions on the template design. Perplexity is also a simple and widely scoring function. This method has universal applications, including both classification tasks and generation tasks. However, both methods are still sensitive to prompt surface, while Channel is a remedy that especially works under imbalanced data regimes.

Existing scoring functions all compute a score straightforwardly from the conditional probability of LLMs. There is limited research on calibrating the bias or mitigating the sensitivity via scoring strategies. For instance, some studies add additional calibration parameters to adjust the model predictions.

## **Performance Of ICL: Why does it work So Well**

Now let's discuss the performance of ICL on traditional tasks and benchmarks such as super glue and Squad. There is still some room of improvement of ICL compared
to fine-tuning although the Gap is narrowing. This is perhaps due to the fact that fine-tuned methods are trained using the whole training data set unlike ICL which only sees a few demonstrations the intrinsic capabilities of language models have prompted researchers to propose new more challenging benchmarks that fit better with the few shot nature of ICL.

There have been promising results on benchmarks such as big bench where ICL methods outperform human reader results in 65percent of tasks given all of these capabilities of ICL. It is interesting to ask the question ‘why does ICL work so well’ we are after all getting this amazing capacity for free, as a result of the castle LM training objective. How are LLM able to do this? There have been a few studies aiming to uncover this in the literature, one factor that might play a role is the distribution of the training data. When training on a very large data set the ICL ability of LLM seems to emerge when the data appears in clusters and there are a sufficient number of rare classes present. Another factor is that Transformer models might be learning to encode learning algorithms implicitly during the training process due to the properties of their architecture. During inference Transformer LLM might be performing an implicit fine tuning using the provided examples in the context.

