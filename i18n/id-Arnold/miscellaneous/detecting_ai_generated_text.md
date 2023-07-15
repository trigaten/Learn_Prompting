# 🟢 Mendeteksim Teks yang Dihasilkan AI

Deteksi teks yang dihasilkan oleh kecerdasan buatan (AI) adalah masalah besar bagi para peneliti keamanan dan pendidik, di antara lain. Alat seperti [GPTZero](https://gptzero.me/), [GPT2 detector](https://openai-openai-detector.hf.space/) dan [detektor bilingual](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) telah mencapai kesuksesan yang signifikan. Namun, alat-alat ini dapat diperdaya.

OpenAI dan para peneliti lain[^1][^2] sedang bekerja untuk memperkenalkan statistical watermarking ke dalam teks yang dihasilkan, tetapi hal ini juga bisa diperdaya dengan memodifikasi sebagian besar teks.

Masalah deteksi teks AI kemungkinan akan menjadi ‘perlombaan senjata’ ketika model baru dan metode deteksi baru diperkenalkan. Banyak perusahaan telah mulai membangun solusi yang mereka klaim sangat efektif, tetapi sulit untuk membuktikannya, terutama karena model berubah dari waktu ke waktu.

Artikel ini akan membahas beberapa metode saat ini untuk mendeteksi teks yang dihasilkan oleh AI, dan selanjutnya akan membahas beberapa cara orang telah menemukan untuk memperdayanya.

## Klasifikasi Teks OpenAI

[Klasifikasi Teks OpenAI](https://platform.openai.com/ai-text-classifier) adalah upaya yang cukup baik untuk detektor teks AI umum. Dengan melatih model pada sejumlah besar data yang dihasilkan oleh AI dan teks yang ditulis oleh manusia dengan kualitas yang sama, detektor dapat menghitung kemungkinan bahwa setiap teks yang diberikan dibuat oleh LLM.

Detektor ini memiliki sejumlah keterbatasan - tidak menerima inputan di bawah 1000 kata, teks dapat dengan mudah diedit untuk mengganggu perhitungan probabilitas, dan karena set pelatihan yang difokuskan pada profesional, ia mengalami kesulitan lebih banyak dalam teks yang dibuat oleh anak-anak atau penutur non-bahasa Inggris.

Saat ini, detektor ini hanya menandai teks manusia sebagai dihasilkan oleh AI sekitar 9%, dan mengidentifikasi teks yang dihasilkan oleh AI dengan benar sekitar 26%. Seiring dengan meningkatnya kekuatan dan cakupan model, angka-angka tersebut akan meningkat, tetapi mungkin perlu detektor yang lebih spesifik yang memadai untuk menilai apakah teks dihasilkan oleh AI atau tidak.

## Metode Watermark

Metode untuk mendeteksi teks yang dihasilkan oleh AI memerlukan pengenalan statistical watermarking saat menghasilkan teks. Teknik ini dapat menggunakan "whitelist" LLM, yaitu metode untuk menentukan apakah teks dihasilkan oleh model AI tertentu. Watermark bekerja dengan memilih set acak token "hijau" sebelum kata dihasilkan, dan kemudian menggunakan soft prompting pada penggunaan token yang dipilih selama sampling. Nilai bobot ini memiliki efek minimal pada kualitas hasil generation, tetapi dapat dideteksi secara algoritmik oleh LLM lain[^3].

Ini adalah ide yang menarik, tetapi memerlukan pencipta model untuk mengimplementasikan kerangka kerja ini ke dalam LLM mereka. Jika suatu model tidak memiliki watermark yang dibangun di dalamnya, metode ini tidak akan berhasil.

## DetectGPT

[Metode DetectGPT](https://detectgpt.ericmitchell.ai/)[^4] dapat mendeteksi teks yang dihasilkan oleh AI dengan sedikit pengaturan dibandingkan konsep sebelumnya. Para peneliti telah menemukan bahwa AI yang menghasilkan teks LLM cenderung "mengisi daerah lengkungan negatif dari fungsi probabilitas log-model". Karena itu, maka mungkin untuk membuat sistem berbasis lengkungan untuk menentukan apakah suatu blok teks dihasilkan secara prosedural.

Cara kerjanya adalah dengan menghitung probabilitas log dari model yang diduga telah menghasilkan teks dan membandingkannya dengan perubahan acak teks dari model bahasa generik yang telah dilatih sebelumnya. Dengan cara ini, DetectGPT dapat mengidentifikasi kemungkinan bahwa bagian yang diberikan dihasilkan menggunakan kurva probabilitas saja!

## Catatan

Untuk diskusi tambahan tentang topik detektor dan bagaimana orang memperdayanya, lihat [artikel ini](https://learnprompting.org/docs/miscl/trickery).

---

[^1]: Bansal, A., yeh Ping-Chiang, Curry, M., Jain, R., Wigington, C., Manjunatha, V., Dickerson, J. P., & Goldstein, T. (2022). Certified Neural Network Watermarks with Randomized Smoothing.
[↩](https://learnprompting.org/docs/miscl/detect#fnref-1)
[^2]: Gu, C., Huang, C., Zheng, X., Chang, K.-W., & Hsieh, C.-J. (2022). Watermarking Pre-trained Language Models with Backdooring.
[↩](https://learnprompting.org/docs/miscl/detect#fnref-2)
[^3]: Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Language Models. https://arxiv.org/abs/2301.10226
[↩](https://learnprompting.org/docs/miscl/detect#fnref-3)
[^4]: Mitchell, E., Lee, Y., Khazatsky, A., Manning, C., & Finn, C. (2023). DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature. https://doi.org/10.48550/arXiv.2301.11305
[↩](https://learnprompting.org/docs/miscl/detect#fnref-4)
