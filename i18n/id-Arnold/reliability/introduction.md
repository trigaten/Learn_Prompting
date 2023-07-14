# 🟢 Pendahuluan

Bab ini membahas cara membuat penyelesaian yang lebih dapat diandalkan, serta cara mengimplementasikan pemeriksaan untuk memastikan hasil yang dapat diandalkan.

Secara umum, sebagian besar teknik yang dibahas sebelumnya berhubungan dengan meningkatkan akurasi kelengkapan, dan dengan demikian keandalan, terutama konsistensi diri[^1]. Namun, ada sejumlah teknik lain yang dapat digunakan untuk meningkatkan keandalan, di luar strategi dasar untuk pemberian instruksi.

LLM telah dikenali lebih dapat diandalkan daripada yang kita harapkan dalam menginterpretasikan apa yang dimaksud oleh instruksi yang salah eja, kurang bersifat formal, atau bahkan menyesatkan[^2]). Meskipun memiliki kemampuan ini, LLM masih menunjukkan berbagai masalah termasuk halusinasi[^3], penjelasan yang cacat dengan metode CoT[^3], dan beberapa bias termasuk mayoritas label bias, recency bias, dan common token bias[^4]. Selain itu, zero-shot CoT dapat menjadi sangat bias dalam menangani topik yang sensitif[^5].

Solusi umum untuk beberapa masalah ini termasuk kalibrator untuk menghilangkan bias *a priori*, dan verifikator untuk menilai kelengkapan, serta mempromosikan keanekaragaman dalam kelengkapan.

---

[^1]: Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models. [↩](https://learnprompting.org/docs/reliability/intro#fnref-1)
[^2]: Albert Webson. (2023). Are Language Models Worse than Humans at Following Prompts? It’s Complicated. arXiv:2301.07085v1 [[Cs.CL](http://cs.cl/)]. [↩](https://learnprompting.org/docs/reliability/intro#fnref-2)
[^3]: Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning. [↩](https://learnprompting.org/docs/reliability/intro#fnref-3)
[^4]: Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models. [↩](https://learnprompting.org/docs/reliability/intro#fnref-4)
[^5]: Shaikh, O., Zhang, H., Held, W., Bernstein, M., & Yang, D. (2022). On Second Thought, Let’s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning. [↩](https://learnprompting.org/docs/reliability/intro#fnref-5)
