---
sidebar_position: 98
---

# 🟢 ایل ایل ایم کی ترتیبات


<!-- import Temperature from '@site/docs/assets/basics/temperature.svg'; -->
import Temperature from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- درجہ حرارت، اوپر P، اور زیادہ سے زیادہ لمبائی کو سمجھیں۔
:::

# تعارف

ہم ماڈل کے مختلف پہلوؤں کو کنٹرول کرنے کے لیے مخصوص %%LLM|LLM%%[^a] سیٹنگز استعمال کر سکتے ہیں، جیسے کہ یہ کتنا 'رینڈم' ہے۔ ان ترتیبات کو مزید تخلیقی، ٹیکسٹوع اور دلچسپ آؤٹ پٹ پیدا کرنے کے لیے ایڈجسٹ کیا جا سکتا ہے۔ درجہ حرارت، اوپر P اور زیادہ سے زیادہ لمبائی کی ترتیبات سب سے اہم ہیں، لیکن ہم ہر اس ترتیب کی وضاحت کرتے ہیں جسے OpenAI پلے گراؤنڈ آپ کو ترمیم کرنے کی اجازت دیتا ہے۔

## درجہ حرارت

import Temp from '@site/docs/assets/basics/openai_temperature.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
درجہ حرارت زبان کے ماڈل کے آؤٹ پٹ کی غیر متوقع صلاحیت کو کنٹرول کرتا ہے۔ اعلی درجہ حرارت کی ترتیبات کے ساتھ، آؤٹ پٹ زیادہ تخلیقی اور کم پیشین گوئی بن جاتے ہیں کیونکہ یہ کم ممکنہ ٹوکنز کے امکانات کو بڑھاتا ہے جبکہ زیادہ ممکنہ ٹوکنز کے لیے اسے کم کرتا ہے۔ اس کے برعکس، کم درجہ حرارت زیادہ قدامت پسند اور متوقع نتائج پیدا کرتا ہے۔ مندرجہ ذیل مثال آؤٹ پٹ میں ان اختلافات کو واضح کرتی ہے:
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Temp} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

<AIInput>
ساحل سمندر پر 10 عجیب، انوکھی اور تفریحی چیزیں کیا ہیں؟ تفصیل کے بغیر فہرست بنائیں۔
</AIInput>
<AIOutput title="ChatGPT Output (Temperature=0, Top P = 1)">
1. ریت کا قلعہ بنائیں
2. seashells جمع
3. بیچ والی بال کھیلیں
4. پتنگ اڑائیں۔
5. پکنک منائیں۔
6. پیڈل بورڈنگ کی کوشش کریں۔
7. فریسبی کھیلیں
8. اسنارکلنگ پر جائیں۔
9. ساحل کے ساتھ ایک لمبی چہل قدمی کریں۔
10. غروب آفتاب دیکھیں
</AIOutput>
<AIOutput title="ChatGPT Output (Temperature=1.5, Top P = 1)">
1. اتھلے پانیوں میں بلبلگم کے بلبلوں کو اڑاتا ہے۔
1. ریت کے قلعے کے پیچیدہ مجسمے بنائیں
2. بیچ والی بال کے ایک امپرووائزڈ میچ میں شامل ہوں۔
3. قریبی چٹانوں کے ساتھ ایک خوبصورت پیدل سفر کریں۔
4. ہر شخص کی ساحل سمندر سے متعلق کہانی کو لوگ دیکھیں اور اس کا اندازہ لگائیں۔
5. ساحل سمندر کے آرٹ کا اپنا ٹکڑا بنانے کے لیے سیشیلز جمع کریں۔
6. سرف کرنا سیکھیں یا پانی کے دیگر کھیل آزمائیں
7. ایک بے ساختہ ریت کی لڑائی شروع کریں۔
8. مقامی لوگوں کی طرح ساحل پر ماہی گیری کی کوشش کریں۔
9.  ایک سینڈ کیسل بلڈنگ مقابلہ منعقد کرکے دوستانہ مقابلے میں حصہ لیں
</AIOutput>

اعلی درجہ حرارت کی ترتیب کے ساتھ پیدا ہونے والا آؤٹ پٹ ساحل سمندر پر کرنے کے لیے سرگرمیوں کی ایک زیادہ خیالی اور ٹیکسٹوع فہرست پیش کرتا ہے۔ یہ تخلیقی تحریر کے لیے بہت مفید ثابت ہو سکتا ہے۔

:::note
اگر آپ درجہ حرارت کو بہت زیادہ ایڈجسٹ کرتے ہیں، تو آپ کو 'بیکسمتھ سٹین مین بیچ کے قریب ایک سپنج بال بیس بال ہوم رن مقابلہ شروع کریں' جیسے غیر حساس نتائج مل سکتے ہیں۔
:::

<!-- import Top from '@site/docs/assets/basics/openai_top_p.webp'; -->
import Top from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/openai_top_p.webp';

## ٹاپ پی

ٹاپ P[^b] زبان کے ماڈلز میں ایک ترتیب ہے جو ان کے آؤٹ پٹ کی بے ترتیبی کو منظم کرنے میں مدد کرتی ہے۔ یہ ایک امکانی حد قائم کرکے اور پھر ایسے ٹوکنز کو منتخب کرکے کام کرتا ہے جن کا مشترکہ امکان اس حد سے تجاوز کرتا ہے۔

<div className="flex flex-col sm:flex-row justify-between">
  <div>
مثال کے طور پر، آئیے ایک مثال پر غور کریں جہاں ماڈل <code>بلی ___</code> میں اگلے لفظ کی پیش گوئی کرتا ہے۔ سرفہرست پانچ الفاظ جن پر یہ غور کر رہا ہے وہ ہو سکتے ہیں <code>درخت</code> (امکان 0.5)، <code>چھت</code> (امکان 0.25)، <code>وال</code> (امکان 0.15)، < code>window</code> (امکان .07) اور <code>کارپٹ</code>، .03 کے امکان کے ساتھ۔
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Top} className="img-docs w-20 sm:w-auto" />
  </div>
</div>
<br/>

اگر ہم Top P کو `.90` پر سیٹ کرتے ہیں، تو AI صرف ان ٹوکنز پر غور کرے گا جو مجموعی طور پر کم از کم ~90% تک کا اضافہ کرتے ہیں۔ ہمارے معاملے میں:

- <code>tree</code> -> کو شامل کرنا اب تک کی کل `50%` ہے۔
- پھر <code>roof</code> -> کو شامل کرنے سے کل `75%` بن جاتا ہے۔
- اگلا آتا ہے <code>wall</code>، اور اب ہماری رقم `90%` تک پہنچ گئی ہے۔

لہذا، آؤٹ پٹ پیدا کرنے کے لیے، AI تصادفی طور پر ان تین اختیارات (<code>tree</code>، <code>چھت</code>، اور <code>wall</code>) میں سے ایک کو تصادفی طور پر منتخب کرے گا جیسا کہ وہ ارد گرد بنتے ہیں۔ تمام امکانات کا ~ 90 فیصد۔ یہ طریقہ روایتی طریقوں کے مقابلے میں زیادہ ٹیکسٹوع نتائج پیدا کر سکتا ہے جو کہ پورے ذخیرہ الفاظ سے اندھا دھند نمونہ لیتے ہیں کیونکہ یہ انفرادی ٹوکن کے بجائے مجموعی امکانات کی بنیاد پر انتخاب کو کم کرتا ہے۔

## زیادہ سے زیادہ لمبائی

import Max from '@site/docs/assets/basics/openai_maximum_length.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
زیادہ سے زیادہ لمبائی کل # ٹوکنز ہے جو AI کو جنریٹ کرنے کی اجازت ہے۔ یہ ترتیب مفید ہے کیونکہ یہ صارفین کو ماڈل کے جواب کی لمبائی کا انتظام کرنے کی اجازت دیتی ہے، ضرورت سے زیادہ لمبے یا غیر متعلقہ ردعمل کو روکتی ہے۔ پلے گراؤنڈ باکس میں <code>USER</code> ان پٹ اور <code>ASSISTANT</code> کے تیار کردہ جواب کے درمیان لمبائی کا اشتراک کیا جاتا ہے۔ دھیان دیں کہ کس طرح 256 ٹوکن کی حد کے ساتھ، ہمارا PirateGPT پہلے سے اپنی کہانی کے مختصر وسط جملے کو کاٹنے پر مجبور ہے۔
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Max} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

import max_length_example from '@site/docs/assets/basics/openai_maximum_length_example.webp';

<br/>
<div style={{textAlign: 'center'}}>
    <img src={max_length_example} className="img-docs" style={{width: "80%"}}/>
</div>

:::note
اگر آپ پلے گراؤنڈ استعمال کرنے کے بجائے API کے ذریعے ماڈل کے استعمال کے لیے ادائیگی کر رہے ہیں تو اس سے لاگت کو کنٹرول کرنے میں بھی مدد ملتی ہے۔
:::

## دیگر LLM ترتیبات

بہت سی دوسری ترتیبات ہیں جو زبان کے ماڈل کی پیداوار کو متاثر کر سکتی ہیں، جیسے کہ سٹاپ سیکوینس، اور تعدد اور موجودگی کے جرمانے۔

### سلسلہ بند کرو

<!-- import Stop from '@site/docs/assets/basics/openai_stop_sequences.webp'; -->
import Stop from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/openai_stop_sequences.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
اسٹاپ سیکوئنس ماڈل کو بتاتے ہیں کہ آؤٹ پٹ جنریشن کب بند کرنی ہے، جو آپ کو مواد کی لمبائی اور ساخت کو کنٹرول کرنے کی اجازت دیتا ہے۔ اگر آپ AI کو ای میل لکھنے کے لیے کہہ رہے ہیں، "بہترین سلام" یا "مخلصانہ" ترتیب دے رہے ہیں، جیسا کہ اسٹاپ سیکوئنس اس بات کو یقینی بناتا ہے کہ اختتامی سلام سے پہلے ماڈل رک جائے، جو ای میل کو مختصر اور پوائنٹ تک رکھتا ہے۔ اسٹاپ سیکوینس آؤٹ پٹ کے لیے کارآمد ہیں جس کی آپ ایک ساختی شکل جیسے ای میل، نمبر والی فہرست، یا ڈائیلاگ میں آنے کی توقع کرتے ہیں۔
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Stop} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

<!-- import stop_sequences_example from '@site/docs/assets/basics/openai_stop_sequences_example.webp'; -->
import stop_sequences_example from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/openai_stop_sequences_example.webp';

<br/>
<div style={{textAlign: 'center'}}>
    <img src={stop_sequences_example} className="img-docs" style={{width: "80%"}}/>
</div>

### تعدد جرمانہ

import Freq from '@site/docs/assets/basics/openai_frequency_penalty.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
تعدد جرمانہ ایک ترتیب ہے جو ٹوکن کو ٹیکسٹاسب طور پر سزا دے کر کہ تخلیق کردہ ٹیکسٹ میں تکرار کی حوصلہ شکنی کرتی ہے کہ وہ کتنی بار ظاہر ہوتے ہیں۔ ٹیکسٹ میں جتنی بار ٹوکن کا استعمال ہوتا ہے، AI کے دوبارہ استعمال کرنے کا امکان اتنا ہی کم ہوتا ہے۔
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Freq} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### حاضری کی سزا

import Pres from '@site/docs/assets/basics/openai_presence_penalty.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
موجودگی کا جرمانہ تعدد جرمانے کی طرح ہے، لیکن ٹیکسٹاسب کی بجائے ٹوکنز کو اس بنیاد پر سزا دیتا ہے کہ آیا وہ واقع ہوئے ہیں یا نہیں۔
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Pres} className="img-docs w-20 sm:w-auto" />
  </div>
</div>




## ڈیٹرمنزم نوٹ

یہاں تک کہ جب درجہ حرارت اور ٹاپ-P مکمل طور پر صفر پر سیٹ ہو جائیں، ہو سکتا ہے کہ AI ہر بار ایک جیسا درست آؤٹ پٹ نہ دے سکے۔ یہ GPU (گرافکس پروسیسنگ یونٹ) کے حسابات میں بے ترتیب ہونے کی وجہ سے ہے جو AI کے "دماغ" میں کیا جا رہا ہے۔

## نتیجہ

آخر میں، لینگویج ماڈلز کے ساتھ کام کرتے وقت درجہ حرارت، ٹاپ پی، زیادہ سے زیادہ لمبائی اور دیگر جیسے سیٹنگز میں مہارت حاصل کرنا ضروری ہے۔ یہ پیرامیٹرز مخصوص کاموں یا ایپلی کیشنز کو پورا کرنے کے لیے ماڈل کے آؤٹ پٹ کے عین مطابق کنٹرول کی اجازت دیتے ہیں۔ وہ دیگر چیزوں کے ساتھ جوابات میں بے ترتیب پن، ردعمل کی لمبائی اور تکرار کی فریکوئنسی جیسے پہلوؤں کا نظم کرتے ہیں- یہ سب AI کے ساتھ آپ کے تعامل کو بہتر بنانے میں تعاون کرتے ہیں۔




جزوی طور پر jackdickens382 اور evintunador نے لکھا ہے۔

[^a]: ایک اور تکنیکی لفظ ہے "کنفیگریشن ہائپر پیرامیٹرس"
[^b]: نیوکلئس سیمپلنگ کے نام سے بھی جانا جاتا ہے۔