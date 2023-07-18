---
sidebar_position: 1
---

# 🟢 Pendahuluan

Bab ini membahas bagaimana membuat penyelesaian lebih dapat diandalkan, serta bagaimana mengimplementasikan pemeriksaan untuk memastikan outputnya dapat diandalkan.

Secara tertentu, kebanyakan teknik sebelumnya yang dibahas berhubungan dengan peningkatan akurasi penyelesaian, dan karenanya keandalan, terutama konsistensi diri (@wang2022selfconsistency). Namun, ada sejumlah teknik lain yang dapat digunakan untuk meningkatkan keandalan, di luar strategi dasar untuk pemberian instruksi.

%%LLMs|LLM%% telah dikenali lebih dapat diandalkan daripada yang kita harapkan dalam menginterpretasikan *apa yang dimaksud* oleh instruksi yang salah eja, kurang bersifat formal, atau bahkan menyesatkan(@webson2023itscomplicated). Meskipun memiliki kemampuan ini, Llm masih menunjukkan berbagai masalah termasuk halusinasi(@ye2022unreliability), penjelasan yang cacat dengan metode %%CoT|CoT prompting%%(@ye2022unreliability), dan beberapa bias termasuk mayoritas label bias, recency bias, dan common token bias(@zhao2021calibrate). Selain itu, CoT tanpa tembakan nol bisa sangat bias ketika berurusan dengan topik sensitif (@shaikh2022second).

Solusi umum untuk beberapa masalah ini termasuk kalibrator untuk menghilangkan _bias a priori_, dan pemeriksa untuk menghitung kelengkapan, serta mempromosikan keberagaman dalam kelengkapan.
