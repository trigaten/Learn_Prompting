# 🟡 Kode sebagai Penalaran

[Model Bahasa yang Didukung Program / Program-aided Language Models (PAL)](https://reasonwithpal.com/)[^1] adalah contoh lain dari sistem MRKL. Ketika diberikan pertanyaan, PAL dapat **menulis kode** yang menyelesaikan pertanyaan tersebut. Mereka mengirimkan kode ke programmatic runtime untuk mendapatkan hasilnya. PAL bekerja berbeda dengan CoT; penalaran menengah PAL adalah kode, sedangkan CoT adalah bahasa alami.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b68ea9ff-ed00-4cc1-86c6-2dabd5037432)
Contoh PAL (Gao et al.)

Satu hal penting yang perlu diperhatikan adalah PAL sebenarnya memadukan bahasa alami (natural language / NL) dengan kode. Pada gambar di atas, bagian bertanda warna biru adalah penalaran bahasa alami yang dihasilkan oleh PAL. Meskipun tidak ditunjukkan dalam gambar, PAL sebenarnya menghasilkan '#' sebelum setiap baris penalaran NL, sehingga mereka diinterpretasikan sebagai komentar oleh programmatic runtime.

## Contoh

Mari kita lihat contoh PAL menyelesaikan pertanyaan matematika. Saya menggunakan 3-shot prompt, yang merupakan versi disederhanakan dari [ini](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)[^1].

Saya akan menggunakan langchain, sebuah package Python untuk mengikat fungsi LLM untuk ini. Pertama, beberapa instalasi diperlukan:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llmsimport OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

Kemudian, kita bisa membuat contoh GPT-3 davinci-002 (API call terjadi ketika kita menggunakan objek ini)

```python
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Ini adalah few shot prompt-nya:

```
MATH_PROMPT = '''
Q: Ada sembilan komputer di ruang server. Lima komputer lebih dipasang setiap hari, mulai dari hari Senin hingga Kamis. Berapa banyak komputer sekarang di ruang server?

# solusi dalam Python:
"""Ada sembilan komputer di ruang server. Lima komputer lebih dipasang setiap hari, mulai dari hari Senin hingga Kamis. Berapa banyak komputer sekarang di ruang server?"""
komputer_awal = 9
komputer_per_hari = 5
num_hari = 4  # 4 hari antara Senin dan Kamis
komputer_ditambahkan = komputer_per_hari * num_hari
komputer_total = komputer_awal + komputer_ditambahkan
hasil = komputer_total
return hasil

Q: Shawn memiliki lima mainan. Untuk Natal, dia mendapat dua mainan dari ibu dan ayahnya masing-masing. Berapa mainan yang dia miliki sekarang?

# solusi dalam Python:
"""Shawn memiliki lima mainan. Untuk Natal, dia mendapat dua mainan dari ibu dan ayahnya masing-masing. Berapa mainan yang dia miliki sekarang?"""
mainan_awal = 5
mainan_ibu = 2
mainan_ayah = 2
total_diterima = mainan_ibu + mainan_ayah
total_mainan = mainan_awal + total_diterima
hasil = total_mainan

Q: Jason memiliki 20 permen. Dia memberikan beberapa permen kepada Denny. Sekarang Jason memiliki 12 permen. Berapa permen yang diberikan Jason kepada Denny?

# solusi dalam Python:
"""Jason memiliki 20 permen. Dia memberikan beberapa permen kepada Denny. Sekarang Jason memiliki 12 permen. Berapa permen yang diberikan Jason kepada Denny?"""
jason_permen_awal = 20
jason_permen_setelah = 12
denny_permen = jason_permen_awal - jason_permen_setelah
hasil = denny_permen

Q: {pertanyaan}

# solusi dalam Python:
'''
```

Sekarang kita bisa meneruskan prompt gabungan ke GPT-3.

```python
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

Hasilnya adalah:

```
Emma melakukan perjalanan pesawat selama 60 menit ke Seattle. Kemudian dia melakukan perjalanan kereta selama 2 jam ke Portland, dan kemudian perjalanan bus selama 30 menit ke Vancouver. Berapa lama dia melakukan perjalanan ke Vancouver?

perjalanan_pesawat = 60
perjalanan_kereta = 2 * 60  # 2 jam dalam menit
perjalanan_bus = 30
total_waktu = perjalanan_pesawat + perjalanan_kereta + perjalanan_bus
hasil = total_waktu
```

Akhirnya, kita bisa meneruskan kode ini ke runtime Python untuk mendapatkan jawabannya:

```python
exec(llm_out)
print(hasil)
```

Hasilnya adalah **210**, artinya hasilnya benar.

Lihat buku catatan Jupyter untuk contoh ini [di sini](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## More

Lihat juga mengenai [PAL’s colab example](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).

---

[^1]: Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2022). PAL: Program-aided Language Models. [[↩](https://learnprompting.org/docs/advanced_applications/pal#fnref-1)]
