# Python Screening Task 3: Evaluating Open Source Models for Student Competence Analysis

## Level 1: Starting Broad — Open Source Model Landscape by License

There are more than 100 open-source AI models available today. Below are examples of popular models categorized by their open-source licenses:

- **Apache License (permissive, allows commercial use, modification)**
  - Mistral 7B
  - Qwen (Qwen-7B)
  
- **MIT License (very permissive, widely used)**
  - GPT-4All
  - DeepSeek

- **Creative Commons and variants (some with restrictions)**
  - OpenChat (CC BY-NC)
  - Gemma (varies by release)

- **Rail License / Vendor-Locking Licenses (restrictive in modification or commercial use)**
  - Phi-1 Mini (Rail License)
  - GPT-OSS 20B

***

## Level 2: License and Accessibility Depth

Just being open source does not mean models are truly open: availability of source code, weights, and freedom to fine-tune varies widely.

- **Restricted models (weights/source/license constraints)**
  - Phi-1 Mini (Rail license restricts commercial use and fine-tuning)
  - GPT-OSS 20B (vendor-restricted model weights, limited modification)
  
- **Truly open models (weights + code + permissive licenses)**
  - Mistral 7B (Apache 2.0, fully open weights and code)
  - DeepSeek (MIT License, focus on reasoning and tutoring capabilities)

***

## Level 3: Hardware and Deployment Feasibility

Filtering from Level 2 models, now exclude models too heavy for typical laptop deployment (i5 CPU, 16GB RAM, 512GB SSD):

- **Omitted (resource heavy)**
  - GPT-OSS 20B (requires >16GB VRAM, >50GB disk)
  - Phi-1 Mini (though smaller, weights and license restrictions limit usable independent deployment)
  
- **Fit for laptop deployment**
  - Mistral 7B (7B parameters, runs with 12-16 GB RAM for inference)
  - DeepSeek (smaller models, optimized for reasoning)

***

## Level 4: Final Filter for Tutoring and Competence Analysis Use Case

From the laptop-feasible list, focus on models suitable for:

- Analyzing student-written Python code deeply
- Generating Socratic prompts to assess conceptual understanding
- Identifying gaps without giving direct solutions

- **Omitted**
  - Mistral 7B: Very strong generalist but less specialized in educational contextual reasoning or dialogue tutoring
  - GPT-4All: Better at code generation or completion, less strong in reasoning and pedagogy
- **Kept**
  - DeepSeek R1 Distilled 7.1B: Designed for deep reasoning and tutoring (e.g., Socratic method), better suited for nuanced student competence assessment and prompting
  - Qwen 7B: Robust reasoning and multitask capabilities, permissive Apache license, can be fine-tuned for educational dialogue prompting

***

## Research Plan for Evaluating Open Source AI Models for Student Competence Analysis in Python Learning

My approach to identifying and evaluating AI models for this task involves a multi-level filtering process. First, I will gather a broad list of open-source models categorized by license type (Apache, MIT, Rail, etc.) to understand their availability and permissible use. Next, I will filter models based on true openness (availability of weights, source code, and permissive licensing) to avoid vendor lock-ins or restricted customizations. At the next stage, I will consider hardware feasibility, eliminating models that require more than 16GB RAM or extensive GPU resources unsuitable for typical laptop environments(Covers majority of python enthusiasts leaping towards Gen AI). Finally, I will assess each model’s suitability for tutoring, deep reasoning, and competence analysis by focusing on their ability to analyze code, generate insightful prompts, and detect reasoning gaps. Models like DeepSeek R1 Distilled 7.1B and Qwen 7B emerge as candidates that balance openness, resource demands, and tutoring suitability. Testing will involve empirical evaluation on Python code comprehension tasks, prompt generation quality, and feedback usefulness, using both automated metrics and human educator review to validate effectiveness.

Key criteria to assess model suitability include interpretability of generated prompts, depth of reasoning ability, robustness to misconceptions, and resource efficiency. A model should be able to guide learners without giving direct answers while recognizing nuanced errors in student code or logic. Testing meaningfulness of prompts will involve qualitative analysis by domain experts and quantitative assessment of learning outcomes through learner engagement metrics. Trade-offs exist between accuracy (large, powerful models), interpretability (models that produce explainable reasoning), and cost (both computational and monetary). The distilled DeepSeek R1 7.1B model was chosen for its reasonable parameter size enabling laptop deployment, and its architecture optimized for teaching reasoning and Socratic prompting. Limitations include potential loss of nuance in smaller models compared to very large LLMs and dependency on fine-tuning with relevant educational datasets to maximize relevance. Overall, a systematic, incremental evaluation adapting model capabilities to practical constraints and pedagogical goals offers a promising path for integrating AI in student competence analysis.

***

### Reasoning towards my approach:

- **Suitability for high-level competence analysis** requires a model to exhibit strong reasoning, capability to assess conceptual understanding, and generate scaffolding prompts that encourage deeper learning without direct solutions.
- **Testing meaningful prompt generation** involves both automated assessment (diversity, relevance, context sensitivity) and human expert evaluation focusing on pedagogical impact and alignment with learning objectives.
- **Trade-offs** include balancing model accuracy and depth (favoring large models) against interpretability and computational feasibility (favoring smaller distilled models), along with licensing and deployment considerations affecting total cost and accessibility.
- **Choice of DeepSeek R1 Distilled 7.1B** was driven by its combination of permissive licensing, manageable hardware requirements, and architecture focused on reasoning and tutoring, though it may have slightly reduced reasoning detail compared to the full V3.1 variant — a practical compromise for deployment and fine-tuning in educational contexts.

This plan ensures thorough, realistic evaluation of model fitness for the specific goal of Python learning competence assessment.

Here is a structured stepwise approach with the requested reasoning and model filtration for the Python Screening Task 3:

***

# Summary

The final recommendation focuses on **DeepSeek** and **Qwen 7B** as promising open-source models to adapt for high-level student competence analysis in Python learning. These models provide a balance of:

- True openness (weights + permissive licenses)
- Deployability on typical laptop hardware
- Reasoning ability for nuanced prompt generation
- Potential for fine-tuning or adaptation for tutoring use cases

This layered approach ensures a practical, legal, and technical fit for FOSSEE’s possible educational AI application without recommending oversized or locked-down models that are commercially restrictive or unsuitable for deployment on modest resources.

***

If needed, a detailed research plan can follow from this filtering methodology describing evaluation criteria, testing methodology, reasoning on trade-offs, and final model suitability rationale as per the screening task requirements.







References : 

(https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1551596/full)
(https://onlinelibrary.wiley.com/doi/10.1155/2022/5215722)
(https://www.sciencedirect.com/science/article/pii/S2666920X25000888)
(https://www.nature.com/articles/s41598-025-15202-6)
(https://www.sciencedirect.com/science/article/pii/S2949882123000403)
(https://www.tandfonline.com/doi/full/10.1080/14703297.2024.2422337)

(https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1551596/full)
(http://arxiv.org/pdf/2407.04873.pdf)
(https://www.ibm.com/think/insights/open-source-ai-tools)
(https://juholeinonen.com/assets/pdf/koutcheme2024evaluating.pdf)
(https://www.sciencedirect.com/science/article/pii/S2590291125005662)
(https://juholeinonen.com/assets/pdf/koutcheme2025evaluating.pdf)
(https://www.instaclustr.com/education/open-source-ai/top-10-open-source-llms-for-2025/)
(https://journal.esrgroups.org/jes/article/download/7925/5404/14507)
(https://www.coursera.org/learn/open-source-ai-models)
(https://acris.aalto.fi/ws/portalfiles/portal/154625575/SCI_Koutcheme_etal_ITiCSE_2024.pdf)