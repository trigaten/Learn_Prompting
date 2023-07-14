# 🟡 Least to Most Prompting

Least to Most (LtM)[^1] prompting selangkah lebih jauh daripada CoT prompting dengan pertama-tama memecahkan masalah menjadi sub masalah kemudian menyelesaikan masing-masing. Ini adalah teknik yang terinspirasi dari strategi pendidikan untuk anak-anak di dunia nyata.

Seperti pada CoT prompting, masalah yang akan diselesaikan dibagi menjadi serangkaian submasalah yang berdasarkan satu sama lain. Pada langkah kedua, submasalah ini diselesaikan satu per satu. Berbeda dengan chain of thought, solusi submasalah sebelumnya dimasukkan ke dalam prompt dalam upaya untuk menyelesaikan masalah berikutnya.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/ed7ab6be-560e-495d-8415-517f9a235d28)


Diagram dari Least to Most prompting

## Contoh: Customer Inquiry Response

Mari bertanya pada pertanyaan layanan pelanggan yang agak rumit:

Hasilnya gagal (kita masih dalam proses return time), jadi mari kita coba memecahkannya menjadi submasalah:

Mari coba memecahkan submasalah pertama:

Dengan hanya menyelesaikan submasalah pertama, kita dapat menyelesaikan seluruh masalah. Jika GPT-3 tidak mengembalikan jawaban segera, kita bisa menyelesaikan masalah berikutnya dan seterusnya sampai ia mengembalikan jawaban. Perlu dicatat bahwa kita menggunakan `Mari kita selesaikan langkah demi langkah.`. Penambahan frasa ini tidak selalu diperlukan, tetapi membantu untuk contoh ini.

## Contoh: penggabungan surat

LtM awalnya diperkenalkan menggunakan few-shot prompting, bukan instruksi eksplisit untuk memecah masalah menjadi beberapa langkah (seperti yang terlihat di atas). Selain itu, terkadang dapat diimplementasikan dengan satu prompt saja daripada prompt berantai. Mari kita telaah masalah menggabungkan huruf terakhir dari kata-kata individu[^2] (misalnya, diberikan `cake, etymology` sebagai kata masukan, keluarannya harus menjadi `ey`).

### Upaya Pertama: Standar

Prompt standar dengan contoh few-shot mengasilkan output yang sangat buruk, bahkan dengan model lebih canggih seperti text-davinci-003.

### Upaya Kedua: Chain of Thought

Chain of Thought jauh lebih baik daripada prompting standar. Hal ini terjadi karena mesin sekarang memungkinkan model untuk mempertimbangkan untuk mengekstrak huruf terakhir dari setiap kata secara mandiri, mengurangi kompleksitas menjadi operasi pengelompokan huruf yang telah dikumpulkan sebelumnya. Namun, hal ini mulai mendetailkan pada ukuran yang lebih besar.

### Upaya Ketiga: Least to Most (single prompt)

Dengan Least to Most prompting, kita memperluas konsep Chain of Thought dengan merumuskan kembali langkah-langkah individu untuk menyatakan kembali hasil penggabungan sebelumnya. Ini menyederhanakan setiap langkah menjadi menggabungkan hanya satu huruf baru. Ini mengarah pada kinerja yang baik hingga 12 atau lebih kata.

Pendekatan ini mungkin terlihat sangat mirip dengan Chain of Thought, tetapi secara konseptual sangat berbeda. Di sini, pada setiap langkah, kita memperkenalkan penggabungan sebelumnya. Dalam kasus "think, machine, learning", daripada menggabungkan huruf "k", "e", "g" secara individu, kita akan menggabungkan "k" dan "e", kemudian " ke "dan" g ". Akibat dari reintroduksi pekerjaan sebelumnya ini, model sekarang dapat menggeneralisasi ke rangkaian yang lebih panjang karena membawa hasil secara bertahap dan hanya perlu melakukan sedikit pekerjaan pada setiap langkah.

### Hasil

Pada masalah penggabungan huruf terakhir dengan 12 kata, Chain of Thought memiliki akurasi 34%, sedangkan Least to Most memiliki akurasi 74% (karya ilmiah makalah tersebut menggunakan text-davinci-002 sebagai model).

## Contoh: generalisasi komposisional (SCAN)

Benchmarks SCAN memerlukan model untuk mengonversi bahasa alami (natural language) menjadi urutan tindakan. Misalnya, kalimat "berlari ke kiri dan berjalan dua kali" akan diterjemahkan menjadi "TURN_LEFT + RUN + WALK * 2". Model bahasa melakukan kinerja yang sangat buruk ketika dihadapkan pada urutan yang lebih panjang daripada yang ada pada data set training.

### Upaya Pertama: Standard Prompting

Menggunakan prompting standar sederhana, text-davinci-003 mencapai titik yang mengesankan, tetapi masih gagal.

### Upaya Kedua: Least to Most, Langkah Pertama - Reduksi

Di sini, kita bekerja dengan 2 prompt yang berbeda. Prompt pertama digunakan untuk mengurangi masalah input menjadi urutan langkah yang lebih sederhana. Prompt kedua digunakan untuk memetakan urutan yang disederhanakan ini ke dalam tindakan aktual.

Kedua prompt cukup panjang, dan menggunakan notasi python yang dikompresi untuk tindakan untuk menghemat token.

Langkah pertama memecah deskripsi bahasa alami menjadi bahasa yang lebih eksplisit, namun masih seperti manusia. Ini akan membantu langkah pemetaan memahami urutan. Misalnya, "melompat di sekitar kiri dua kali" direduksi menjadi "melompat ke kiri" -> `TURN_LEFT + JUMP` dan "melompat di sekitar kiri" -> `(TURN_LEFT + JUMP) * 4`. Demikian pula, langkah reduksi adalah yang digunakan untuk menjelaskan konsep pengulangan (dua kali, tiga kali, dll.).

### Upaya Kedua: Least to Most, Langkah Kedua - Pemetaan

Pada langkah kedua, kita menggunakan output dari reduksi, dan lagi menggunakan prompt yang cukup panjang (14 kasus) untuk menerjemahkan deskripsi bahasa alami yang disederhanakan menjadi urutan tindakan.

Di sini, kami menyuntikkan output dari langkah pertama:

> "melompat di sekitar kiri dua kali" dapat dipecahkan dengan: "melompat ke kiri", "melompat di sekitar kiri", "melompat di sekitar kiri dua kali". "berjalan ke kiri berlawanan tiga kali" dapat dipecahkan dengan: "berjalan ke kiri berlawanan", "berjalan ke kiri berlawanan tiga kali". Jadi, "melompat di sekitar kiri dua kali setelah berjalan ke kiri berlawanan tiga kali" dapat dipecahkan dengan: "melompat ke kiri", "melompat di sekitar kiri", "melompat di sekitar kiri dua kali", "berjalan ke kiri berlawanan", "berjalan ke kiri berlawanan tiga kali".
> 

ke dalam LLM.

### Hasil

LtM mengarah pada beberapa peningkatan:

- akurasi yang lebih baik dibandingkan dengan Chain of Thought
- peningkatan generalisasi pada masalah yang lebih sulit dari prompt
- kinerja yang sangat meningkat dalam generalisasi komposisional, terutama pada benchmark SCAN[^3]

Prompt standar dengan text-davinci-002 (model yang digunakan dalam makalah) menghasilkan 6% masalah SCAN yang berhasil diselesaikan, sementara Least to Most prompting menghasilkan tingkat keberhasilan 76% yang mengesankan. Hasilnya bahkan lebih signifikan dengan code-davinci-002, di mana Least to Most prompting mencapai tingkat keberhasilan 99,7%.

---

[^1]: Zhou, D., Schärli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). Least-to-Most Prompting Enables Complex Reasoning in Large Language Models. [↩](https://learnprompting.org/docs/intermediate/least_to_most#fnref-1)
[^2]: Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models. [↩](https://learnprompting.org/docs/intermediate/least_to_most#fnref-2)
[^3]: Lake, B. M., & Baroni, M. (2018). Generalization without Systematicity: On the Compositional Skills of Sequence-to-Sequence Recurrent Networks. https://doi.org/10.48550/arXiv.1711.00350
[↩](https://learnprompting.org/docs/intermediate/least_to_most#fnref-3)
