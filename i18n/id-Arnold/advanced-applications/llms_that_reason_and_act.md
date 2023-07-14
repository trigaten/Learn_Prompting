# 🟡 LLM yang Melakukan Penalaran dan Aksi (Reason and Act)

ReAct(reason, act)[^1] adalah paradigma yang memungkinkan model bahasa untuk menyelesaikan tugas kompleks menggunakan penalaran bahasa alami. ReAct dirancang untuk tugas di mana LLM diizinkan untuk melakukan tindakan tertentu. Sebagai contoh, seperti pada sistem MRKL, LLM dapat berinteraksi dengan API eksternal untuk mengambil informasi. Ketika ditanya sebuah pertanyaan, LLM dapat memilih untuk melakukan tindakan untuk mengambil informasi, dan kemudian menjawab pertanyaan berdasarkan informasi yang diperoleh.

Sistem ReAct dapat dianggap sebagai sistem MRKL, dengan kemampuan tambahan yaitu **memiliki penalaran tentang** tindakan yang dapat dilakukan.

Perhatikan gambar berikut. Pertanyaan pada kotak atas berasal dari HotPotQA[^2], sebuah kumpulan data jawaban pertanyaan yang memerlukan penalaran kompleks. ReAct dapat menjawab pertanyaan dengan pertama-tama memikirkan tentang pertanyaan (Thought 1), dan kemudian melakukan tindakan (Act 1) untuk mengirim kueri ke Google. Kemudian, ia menerima pengamatan (Obs 1), dan melanjutkan dengan lingkaran pikiran, tindakan, dan pengamatan ini sampai ia mencapai kesimpulan (Act 3).

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/3bb1cc21-ec61-4555-a8ed-122df593c627)
Sistem ReAct (Yao et al.)

Pembaca yang memiliki pengetahuan tentang reinforcement learning mungkin mengenali proses ini serupa dengan loop RL klasik dari keadaan, tindakan, hadiah, keadaan,... ReAct memberikan beberapa formalisasi untuk hal ini dalam makalah mereka.

## Hasil

Google menggunakan LLM PaLM[^3] dalam eksperimen dengan ReAct. Perbandingan dengan prompting standar (hanya pertanyaan), CoT, dan konfigurasi lain menunjukkan bahwa kinerja ReAct sangat menjanjikan untuk tugas penalaran kompleks. Google juga melakukan studi pada kumpulan data FEVER[^4], yang mencakup ekstraksi dan verifikasi fakta.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/e0b65af7-71c3-4039-86e5-fbe288c256d9)
Hasil ReAct (Yao et al.)

---

[^1]: Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2022). ReAct: Synergizing Reasoning and Acting in Language Models. [↩](https://learnprompting.org/docs/advanced_applications/react#fnref-1)
[^2]: Yang, Z., Qi, P., Zhang, S., Bengio, Y., Cohen, W. W., Salakhutdinov, R., & Manning, C. D. (2018). HotpotQA: A Dataset for Diverse, Explainable Multi-hop Question Answering. [↩](https://learnprompting.org/docs/advanced_applications/react#fnref-2)
[^3]: Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., … Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways. [↩](https://learnprompting.org/docs/advanced_applications/react#fnref-3)
[^4]: Thorne, J., Vlachos, A., Christodoulopoulos, C., & Mittal, A. (2018). FEVER: a large-scale dataset for Fact Extraction and VERification. [↩](https://learnprompting.org/docs/advanced_applications/react#fnref-4)
