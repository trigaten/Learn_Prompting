# 🟢 Kelemahan LLM

Large language models (LLM) sangat kuat, tetapi bukan berarti sempurna. Ada banyak kelemahan yang harus Anda ketahui saat menggunakannya.

## Mengutip Sumber

LLM pada umumnya **tidak dapat mengutip sumber dengan akurat**. Hal ini karena mereka tidak memiliki akses ke internet, dan tidak ingat persis dari mana informasi mereka berasal. Mereka sering kali menghasilkan sumber yang terlihat bagus, tetapi sepenuhnya tidak akurat.

> CATATAN
> 
> 
> Strategi seperti search augmented LLMs (LLM yang dapat mencari di internet dan sumber lainnya) seringkali dapat mengatasi masalah ini.
> 

## Bias

LLM sering kali memiliki bias dalam menghasilkan respon yang stereotip. Meskipun telah diberi perlindungan, mereka kadang-kadang mengucapkan hal yang seksis/rasis/homofobik. Hati-hati saat menggunakan LLM dalam aplikasi konsumen, dan juga hati-hati saat menggunakan mereka dalam penelitian (mereka dapat menghasilkan hasil yang bias).

## Halusinasi

LLM seringkali menghasilkan kebohongan ketika ditanya pertanyaan yang tidak mereka ketahui jawabannya. Terkadang mereka akan menyatakan bahwa mereka tidak tahu jawabannya, tetapi sebagian besar waktu mereka akan dengan percaya diri memberikan jawaban yang salah.

## Matematika

LLM seringkali buruk dalam matematika. Mereka kesulitan dalam menyelesaikan masalah matematika sederhana, dan seringkali tidak dapat menyelesaikan masalah matematika yang lebih kompleks.

> CATATAN
> 
> 
> Masalah ini dapat diatasi sampai batas tertentu dengan menggunakan LLM yang diperkuat dengan alat seperti [tool augmented LLM](https://learnprompting.org/docs/advanced_applications/mrkl).
> 

## Prompt Hacking

Pengguna seringkali bisa menipu LLM untuk menghasilkan konten apa pun yang mereka inginkan. Baca lebih lanjut tentang hal ini [di sini](https://learnprompting.org/docs/category/-prompt-hacking).
