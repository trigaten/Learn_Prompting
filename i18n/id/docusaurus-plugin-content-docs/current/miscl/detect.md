---
sidebar_position: 1
--- 

# 🟢 Mendeteksi Teks yang Dihasilkan AI

Mendeteksi teks yang dihasilkan oleh AI adalah masalah besar bagi peneliti keamanan dan pendidik, antara lain. Alat seperti [GPTZero](https://gptzero.me), [pendeteksi GPT2](https://openai-openai-detector.hf.space), dan [pendeteksi bilingual](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) telah mencapai kesuksesan yang signifikan, Namun, mereka dapat [dikelabui](https://learnprompting.org/docs/miscl/trickery).

OpenAI dan peneliti lain(@bansal2022certified)(@gu2022watermarking) sedang bekerja untuk memperkenalkan pembingkaian statistik ke dalam teks yang dihasilkan, tetapi hal ini juga bisa disalahgunakan dengan memodifikasi sebagian besar teks.

Masalah deteksi teks AI kemungkinan akan menjadi perlombaan senjata saat model-model baru dan metode deteksi baru diperkenalkan. Banyak perusahaan sudah mulai membangun solusi yang mereka klaim sangat efektif, tetapi sulit untuk membuktikan hal ini, terutama ketika model berubah seiring waktu.

Artikel ini akan membahas beberapa metode saat ini untuk mendeteksi teks yang dihasilkan oleh AI, dan berikutnya akan membahas beberapa cara yang telah ditemukan oleh orang-orang untuk menipu mereka.

## Klasifikasi Teks OpenAI

[Klasifikasi Teks OpenAI](https://platform.openai.com/ai-text-classifier) adalah upaya yang cukup baik dalam mendeteksi teks AI umum. Dengan melatih model pada sejumlah besar data yang dihasilkan oleh AI dan teks yang ditulis manusia dengan kualitas yang sama, detektor tersebut mampu menghitung kemungkinan bahwa teks apa pun diciptakan oleh LLM.

Ini memiliki sejumlah keterbatasan—tidak menerima pengiriman apapun dengan kata-kata di bawah 1000, teks dapat dengan mudah diedit untuk mempengaruhi perhitungan probabilitas, Dan karena set pelatihan yang difokuskan pada profesional, ia lebih sulit dalam mengatasi teks yang dibuat oleh anak-anak atau penutur bahasa Inggris non.

Saat ini, teks manusia sering kali dianggap hanya dihasilkan oleh AI sekitar 9% waktu, dan dengan benar mengidentifikasi teks yang dihasilkan AI sekitar 26% waktu. Seiring meningkatnya kekuatan dan cakupan model tersebut, angka-angka tersebut akan meningkat, tetapi mungkin diperlukan detektor yang lebih spesifik untuk secara memadai menilai apakah teks itu dihasilkan atau tidak.

## Metode Watermark

Salah satu metode untuk mendeteksi teks yang dihasilkan oleh kecerdasan buatan membutuhkan pengenalan air yang statistik saat menghasilkan teks. Teknik-teknik ini mungkin menggunakan Daftar Putih LLM, yang merupakan metode untuk menentukan apakah teks dihasilkan oleh model AI tertentu. Pembatas air bekerja dengan memilih set acak token "hijau" sebelum kata dihasilkan, dan kemudian secara perlahan mendorong penggunaan token yang dipilih selama sampling. Nilai-nilai ini yang memiliki bobot memiliki efek minimal terhadap kualitas generasi, tetapi dapat dideteksi secara algoritma oleh LLM lainnya (@kirchenbauer2023watermarking).

Ini adalah ide menarik, tetapi membutuhkan pembuat model untuk mengimplementasikan kerangka kerja ini ke dalam LLM mereka. Jika model tidak memiliki watermark yang sudah tersedia, metode ini tidak akan berfungsi.

## DetectGPT

Metode [DetectGPT](https://detectgpt.ericmitchell.ai/)(@mitchell2023detectgpt) mampu mendeteksi teks yang dihasilkan oleh AI dengan pengaturan yang lebih sedikit dari konsep sebelumnya. Peneliti telah menemukan bahwa generasi teks LLM cenderung "mengisi wilayah lengkung negatif dari fungsi log probabilitas model tersebut". Karena ini, memungkinkan untuk membuat sistem berbasis lengkungan untuk menentukan apakah sebuah blok teks dihasilkan secara prosedural.

Ini bekerja dengan menghitung probabilitas log dari model yang dianggap telah menghasilkan teks dan membandingkannya dengan perubahan acak teks dari model bahasa generik lain yang telah dilatih sebelumnya. Dengan cara ini, DetectGPT dapat mengidentifikasi kemungkinan teks tersebut dihasilkan menggunakan kurva probabilitas saja!

## Catatan

Untuk diskusi tambahan tentang topik detektor dan bagaimana orang memperdayanya, lihat [artikel ini](https://learnprompting.org/docs/miscl/trickery).
