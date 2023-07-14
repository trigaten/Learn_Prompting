# **🟢 Ringkasan**

Mencegah prompt injection dapat sangat sulit, dan sedikit pertahanan yang kuat terhadapnya[^1][^2]. Namun, ada beberapa solusi yang masuk akal. Misalnya, jika aplikasi Anda tidak perlu mengeluarkan teks bebas, jangan memungkinkan keluaran seperti itu. Ada banyak cara yang berbeda untuk mempertahankan prompt. Kami akan membahas beberapa yang paling umum di sini.

Bab ini mencakup strategi tambahan yang masuk akal seperti menyaring kata-kata. Ini juga mencakup strategi perbaikan prompt (pertahanan instruksi, pasca-prompting, berbagai cara untuk melampirkan input pengguna, dan penandaan XML). Akhirnya, kami membahas menggunakan LLM untuk mengevaluasi output dan beberapa pendekatan model yang lebih spesifik.

---

[^1]: Crothers, E., Japkowicz, N., & Viktor, H. (2022). Teks yang Dihasilkan oleh Mesin: Survei Komprehensif dari Model Ancaman dan Metode Deteksi.
[↩](https://learnprompting.org/docs/prompt_hacking/defensive_measures/overview#fnref-1)
[^2]: Goodside, R. (2022). Pertahanan Injeksi Prompt GPT-3. https://twitter.com/goodside/status/1578278974526222336?s=20&t=3UMZB7ntYhwAk3QLpKMAbw
[↩](https://learnprompting.org/docs/prompt_hacking/defensive_measures/overview#fnref-2)
