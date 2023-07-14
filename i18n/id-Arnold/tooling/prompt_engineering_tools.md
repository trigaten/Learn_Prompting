# Prompt Engineering Tools

Bagian ini berisi daftar alat non-IDE yang berguna untuk prompting.

## Pengembangan, Pengujian, dan Chaining Prompt

### [LangChain](https://github.com/hwchase17/langchain/)

> Large language models (LLM) muncul sebagai teknologi yang sangat berpengaruh, memungkinkan pengembang untuk membangun aplikasi yang sebelumnya tidak dapat dibuat. Namun, menggunakan LLM ini secara terpisah seringkali tidak cukup untuk menciptakan aplikasi yang benar-benar kuat - kekuatan sebenarnya datang ketika Anda dapat menggabungkannya dengan sumber komputasi atau pengetahuan lain.
> 

> Perpustakaan ini bertujuan untuk membantu dalam pengembangan aplikasi jenis tersebut.
> 

### [Dust.tt](https://dust.tt/)

> Platform Dust membantu membangun aplikasi LLM sebagai serangkaian pemanggilan prompt ke model eksternal. Dust.tt menyediakan antarmuka grafis yang mudah digunakan untuk membangun rangkaian prompt, serta serangkaian blok standar dan bahasa pemrograman yang dikustomisasi untuk mengurai dan memproses output model bahasa.
> 

> Dust.tt ini menyediakan serangkaian fitur untuk membuat pengembangan aplikasi lebih cepat, lebih mudah, dan lebih andal:
> 
> - menjalankan beberapa penyelesaian secara paralel
> - memeriksa output eksekusi
> - versioning prompt chains
> - bahasa pemrograman kustom untuk memproses data dan teks
> - integrasi API untuk berbagai model dan layanan eksternal

### [OpenPrompt](https://thunlp.github.io/OpenPrompt/)[^1]

> Pembelajaran prompt adalah paradigma terbaru untuk menyesuaikan model bahasa pra-pelatihan (pre-trained language models / PLM) dengan tugas NLP downstream, yang memodifikasi teks masukan dengan template teks dan langsung menggunakan PLM untuk melakukan tugas pra-pelatihan. OpenPrompt adalah perpustakaan yang dibangun menggunakan PyTorch dan menyediakan kerangka kerja standar, fleksibel, dan dapat diperluas untuk men-deploy jalur pembelajaran prompt. OpenPrompt mendukung proses memuat PLM langsung dari huggingface transformers. Di masa depan, kami juga akan mendukung PLM yang diimplementasikan oleh perpustakaan lain.
> 

### [BetterPrompt](https://github.com/stjordanis/betterprompt)

> ⚡ Suite pengujian untuk prompt LLM sebelum mendorongnya ke PROD ⚡
> 

### [Prompt Engine](https://github.com/microsoft/prompt-engine)

> Perpustakaan utilitas NPM untuk membuat dan memelihara prompt untuk Large language models (LLM).
> 

### [Promptify](https://github.com/promptslab/Promptify)

> Hanya mengandalkan LLM sering tidak cukup untuk membangun aplikasi & alat. Untuk membuka potensi penuh mereka, penting untuk mengintegrasikan LLM dengan sumber komputasi atau pengetahuan lain dan membuat jalur siap produksi.
> 

> Perpustakaan ini bertujuan untuk membantu dalam mengembangkan jalur untuk menggunakan API LLM dalam produksi, memecahkan Tugas NLP seperti NER, Klasifikasi, Pertanyaan, Jawaban, Ringkasan, Text2Graph, dll. dan menyediakan agen yang kuat untuk membangun agen obrolan untuk tugas yang berbeda.
> 

### [TextBox](https://github.com/RUCAIBox/TextBox)[^2]

> TextBox 2.0 adalah perpustakaan untuk menghasilkan teks yang terbaru berbasis Python dan PyTorch yang fokus pada membangun pipeline yang terpadu dan standar untuk menerapkan model bahasa pra-pelatihan pada saat menghasilkan teks.
> 

### [ThoughtSource](https://github.com/OpenBioLink/ThoughtSource)

> "ThoughtSource bersifat open source dan merupakan komunitas sentral yang berpusat pada data dan alat untuk penalaran chain-of-thought dalam LLM (Wei 2022). Tujuan jangka panjang kami adalah untuk memungkinkan penalaran yang dapat dipercaya dan kuat dalam sistem AI canggih untuk mengemudikan penelitian ilmiah dan praktik medis."
> 

## Misc.

### [GPT Index](https://gpt-index.readthedocs.io/en/latest/)[^3]

> GPT Index adalah proyek yang terdiri dari serangkaian struktur data yang dirancang untuk memudahkan penggunaan basis pengetahuan eksternal besar dengan LLM.
> 

### [Deforum](https://github.com/HelixNGC7293/DeforumStableDiffusionLocal)

Video animasi AI

### [Visual Prompt Builder](https://tools.saxifrage.xyz/prompt)

Bangun prompt, secara visual

### [Interactive Composition Explorer](https://github.com/oughtinc/ice)

> ICE adalah perpustakaan Python dan penjelajah jejak untuk program model bahasa.
> 

### [PTPT - Prompt To Plain Text](https://github.com/LeslieLeung/PTPT)

> PTPT adalah tool berupa command-line yang memungkinkan Anda dengan mudah mengonversi file teks polos menggunakan prompt yang telah ditentukan sebelumnya dengan bantuan ChatGPT. Dengan PTPT, Anda dapat dengan mudah membuat dan berbagi format prompt, membuat kolaborasi dan kustomisasi menjadi mudah. Selain itu, dengan berlangganan, Anda mendapatkan akses ke prompt lebih banyak lagi untuk meningkatkan pengalaman Anda. Jika Anda tertarik dengan rekayasa prompt, Anda dapat menggunakan PTPT untuk mengembangkan dan berbagi prompt Anda.
> 

### [Orquesta AI Prompts](https://orquesta.cloud/platform/ai-llm-prompts)

> Platform kolaborasi rendah kode untuk AI Prompts
> 
- Manajemen siklus hidup prompt lengkap (dari ideasi hingga pengumpulan umpan balik)
- Fitur dan keamanan tingkat enterprise
- Dukungan untuk LLM publik, pribadi, dan kustom
- Prompt berdasarkan konteks kustom dan aturan bisnis. Evaluaation on the Edga
- Pencatatan waktu real-time dan pengumpulan kinerja dan ekonomi prompt

### Lainnya

[https://gpttools.com](https://gpttools.com/)

---

[^1]: Ding, N., Hu, S., Zhao, W., Chen, Y., Liu, Z., Zheng, H.-T., & Sun, M. (2021). OpenPrompt: An Open-source Framework for Prompt-learning. arXiv Preprint arXiv:2111.01998. [↩](https://learnprompting.org/docs/tooling/tools#fnref-1)
[^2]: Tang, T., Junyi, L., Chen, Z., Hu, Y., Yu, Z., Dai, W., Dong, Z., Cheng, X., Wang, Y., Zhao, W., Nie, J., & Wen, J.-R. (2022). TextBox 2.0: A Text Generation Library with Pre-trained Language Models. [↩](https://learnprompting.org/docs/tooling/tools#fnref-2)
[^3]: Liu, J. (2022). GPT Index. https://doi.org/10.5281/zenodo.1234
[↩](https://learnprompting.org/docs/tooling/tools#fnref-3)
