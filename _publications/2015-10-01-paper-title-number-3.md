---
title: "Adaptive QA Within a Society of LLMs"
collection: publications
category: manuscripts
permalink: /publication/2015-10-01-paper-title-number-3
excerpt: 'Short abstract'
date: 2024-08-20
venue: 'arXiv Preprint'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
# paperurl: 'http://academicpages.github.io/files/paper1.pdf'
citation: 'Mohanna Hoveyda, Arjen P. de Vries, Harrie Oosterhuis, Faegheh Hasibi, Maarten de Rijke'
---

In question answering (QA), different questions can be effectively addressed with different answering strategies. Some require a simple lookup, while others need complex, multi-step reasoning to be answered adequately. This observation motivates the development of a dynamic method that adaptively selects the most suitable QA strategy for each question, enabling more efficient and effective systems capable of addressing a broader range of question types. To this aim, we build on recent advances in the orchestration of multiple large language models (LLMs) and formulate adaptive QA as a dynamic orchestration challenge. We define this as a contextual multi-armed bandit problem, where the context is defined by the characteristics of the incoming question and the action space consists of potential communication graph configurations among the LLM agents. We then train a linear upper confidence bound model to learn an optimal mapping between different question types and their corresponding optimal multi-LLM communication graph representation. Our experiments show that the proposed solution is viable for adaptive orchestration of a QA system with multiple modules, as it combines the superior performance of more complex strategies while avoiding their costs when simpler strategies suffice.