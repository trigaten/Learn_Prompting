---
sidebar_position: 200000
---

# 🔥 Hot Topics

## GPT-4

GPT-4(@openai2023gpt4) adalah LLM berikutnya dalam seri GPT milik OpenAI. Hal ini meningkatkan GPT-3 dalam beberapa hal, termasuk pemikiran yang lebih baik dan panjang konteks yang lebih lama. Saat ini, kami tidak secara langsung membahasnya dalam kursus ini karena 1) tidak semua orang memiliki akses ke sana dan 2) sebagian besar strategi prompting yang kami bahas di situs web ini juga berfungsi untuk GPT-4. Kami mendorong Anda untuk membaca [halaman OpenAI](https://openai.com/research/gpt-4) tentang GPT-4 untuk lebih detail.

## Agen

Agen adalah sistem AI yang dapat melakukan tindakan dan melakukan tugas, yang sering melibatkan penggunaan alat.

### Auto-GPT
Bayangkan memiliki asisten pribadi yang dapat melakukan apa yang Anda inginkan dengan kekuatan AI. Bayangkan memiliki asisten pribadi yang dapat melakukan apa yang Anda inginkan dengan kekuatan AI. Dibuat oleh Toran Bruce Richards, bekerja dengan cara memecah tujuan yang diberikan menjadi sub-tugas dan kemudian menggunakan internet dan alat lainnya untuk menyelesaikan sub-tugas tersebut(@richards2023). Misalnya, jika Anda meminta Auto-GPT untuk "menulis posting blog tentang berita terbaru dalam kecerdasan buatan," maka ia akan mencari artikel berita terbaru tentang kecerdasan buatan, membacanya, dan kemudian menulis posting blog tentang apa yang dipelajari. Untuk menggunakan Auto-GPT, Anda perlu mengikuti instruksi pengaturan [di sini](https://significant-gravitas.github.io/Auto-GPT/setup/). Setelah Anda menginstal Auto-GPT, Anda dapat mulai menggunakannya dengan mengetik tujuan ke dalam bilah prompt. Auto-GPT kemudian akan mencoba mencapai tujuan tersebut.

### Baby AGI
BabyAGI adalah sistem manajemen tugas yang didukung AI yang dibuat oleh Yohei Nakajima (@nakajima2023). Sistem menggunakan API OpenAI dan Pinecone untuk membuat dan menjalankan tugas berdasarkan prioritas dan tingkat kesulitan tugas sebelumnya serta tujuan yang telah ditentukan sebelumnya. BabyAGI bekerja dengan menjalankan sebuah loop yang melakukan langkah-langkah berikut:
1. Mengambil tugas pertama dari daftar tugas.
2. Mengirimkan tugas ke agen eksekusi, yang menggunakan API OpenAI untuk menyelesaikan tugas berdasarkan konteks.
3. Memperkaya hasil dan menyimpannya di Chroma.
4. Membuat tugas baru dan mengubah prioritas daftar tugas berdasarkan tujuan dan hasil dari tugas sebelumnya.

### AgentGPT
Reworkd’s [AgentGPT](https://agentgpt.reworkd.ai/) adalah platform yang memungkinkan pengguna untuk membuat dan menerapkan agen AI mandiri, mulai dari layanan pelanggan hingga analisis data (@reworkd2023). Ia mengedukasi agen AI pada tugas yang berbeda dan kemudian memberikan kepadanya untuk mencapai tujuan yang telah ditentukan. Agen dapat memanfaatkan berbagai API untuk mengakses dan memproses informasi dunia nyata, dan mereka juga dapat berbicara dengan manusia dan agen lain. Untuk menggunakan AgentGPT, pengguna perlu mendaftar dan memilih tujuan untuk agen mereka. Kemudian, mereka dapat menginstruksikan agennya dengan menyediakan data dan instruksi.
