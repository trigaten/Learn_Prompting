# 🟢 Chain of Thought Prompting

Chain of Thought (CoT) prompting[^1] adalah metode prompting yang baru dikembangkan, yang mendorong LLM untuk menjelaskan pemikirannya. Gambar di bawah ini[^1] menunjukkan prompt standar dari few shot prompt (kiri) dibandingkan dengan prompt chain of thought (kanan).

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/49b9d0d7-72b9-43e0-aa52-d11eba9e39f7)

Prompt Biasa vs CoT (Wei et al.)

Ide utama CoT adalah dengan menunjukkan beberapa exemplar (contoh) few shot dimana proses penalaran (reasoning) dijelaskan dalam contoh, LLM juga akan menunjukkan proses pemikiran tersebut saat menjawab prompt. Penjelasan penalaran ini sering kali mengarah pada hasil yang lebih akurat.

## Contoh

Berikut beberapa demo. Yang pertama menunjukkan GPT-3 (davinci-003) gagal menyelesaikan masalah kata sederhana. Yang kedua menunjukkan GPT-3 (davinci-003) berhasil menyelesaikan masalah yang sama, dengan menggunakan CoT prompting.

### Salah

### Benar

## Hasil

CoT telah terbukti efektif dalam meningkatkan hasil pada tugas seperti operasi aritmatika, common sense, dan tugas symbolic reasoning[^1]. Khususnya, prompted PaLM 540B[^2] mencapai akurasi tingkat pemecahan 57% pada GSM8K[^3] (SOTA pada saat itu).

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/8eb9c41a-120b-4a7f-9e0b-94596914db27)

Perbandingan model pada benchmark GSM8K (Wei et al.)

## Batasan

Yang penting, menurut Wei et al., "CoT hanya memberikan keuntungan kinerja saat digunakan dengan model dari ∼100B parameter". Model yang lebih kecil menulis chain of thought yang tidak logis, yang mengakibatkan akurasi yang lebih buruk daripada standard prompting. Model biasanya mendapatkan peningkatan kinerja dari CoT prompting secara proporsional dengan ukuran model.

## Catatan

Tidak ada model bahasa yang ~~terluka~~ dalam proses menulis bab ini 😊.

---

[^1]: Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.
[↩](https://learnprompting.org/docs/intermediate/chain_of_thought#fnref-1)
[^2]: Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., … Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.
[↩](https://learnprompting.org/docs/intermediate/chain_of_thought#fnref-2)
[^3]: Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.
[↩](https://learnprompting.org/docs/intermediate/chain_of_thought#fnref-3)
