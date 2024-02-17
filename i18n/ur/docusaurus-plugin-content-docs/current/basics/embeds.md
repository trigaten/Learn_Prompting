---
sidebar_position: 40
---

# 🟢 ایمبیڈز کا پرامپٹ کرنا سیکھیں۔

:::takeaways
- سیکھیں پرامپٹ ایمبیڈ سیٹ اپ کریں۔
- کورس کی ویب سائٹ میں چیٹ جی پی ٹی پرامپٹس چلائیں۔
:::

چیٹ جی پی ٹی ویب سائٹ کارآمد ہے، لیکن کیا یہ اچھا نہیں ہوگا کہ اگر آپ اس ویب سائٹ پر پرامپٹس لکھ کر جانچ سکتے ہیں؟ [Learn Prompting Embeds](https://embed.learnprompting.org/) کے ساتھ، آپ کر سکتے ہیں! اسے ترتیب دینے کا طریقہ دیکھنے کے لیے پڑھیں۔ ہم ان انٹرایکٹو ایمبیڈس کو زیادہ تر مضامین میں شامل کریں گے۔

## سیٹ اپ ہو جاؤ

ویڈیو ٹیوٹوریل یہاں دیکھیں:

<iframe width="560" height="315" src="https://www.youtube.com/embed/sNUKiwd2DWU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

یہاں ایک **تصویر** ہے کہ ایمبیڈ کیسا لگتا ہے:

<!-- import lp_embed from '@site/docs/assets/basics/lp_embed.webp';
import key from '@site/docs/assets/basics/API_key.webp'; -->

import lp_embed from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/lp_embed.webp';
import key from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/API_key.webp';

<img src={lp_embed} class="img-docs" style={{width: "100%"}}/>


آپ کو ایک ایمبیڈ دیکھنے کے قابل ہونا چاہئے جو بالکل اس پیراگراف کے نیچے تصویر کی طرح نظر آتا ہے۔ اگر یہ نظر نہیں آ رہا ہے، تو آپ کو JavaScript کو فعال کرنے یا مختلف براؤزر استعمال کرنے کی ضرورت پڑ سکتی ہے۔ اگر آپ اب بھی اسے نہیں دیکھ سکتے ہیں، تو [Discord](https://discord.com/invite/learn-prompting) میں شامل ہوں اور ہمیں اپنے مسئلے کے بارے میں بتائیں۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6ImdwdC0zLjUtdHVyYm8ifQ%3D%3D"
    style={{width:"100%", height:"320px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


یہ فرض کرتے ہوئے کہ آپ ایمبیڈ دیکھ سکتے ہیں، **جنریٹ** بٹن پر کلک کریں۔ اگر آپ پہلی بار اسے استعمال کر رہے ہیں، تو آپ کو ایک OpenAI API کلید داخل کرنے کے لیے کہا جائے گا۔ ایک OpenAI API کلید ٹیکسٹ کی صرف ایک تار ہے جسے ایمبیڈ آپ کے OpenAI اکاؤنٹ سے لنک کرنے کے لیے استعمال کرتا ہے۔

### اوپن اے آئی API کلید حاصل کریں۔

- پہلے، [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) پر جائیں
- پھر، اپنے OpenAI اکاؤنٹ کے لیے سائن اپ کریں یا سائن ان کریں۔
- **نئی خفیہ کلید بنائیں** بٹن پر کلک کریں۔ یہ ایک موڈل کو پاپ اپ کرے گا جس میں ٹیکسٹ کی ایک تار اس طرح ہے:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={key} class="img-docs" style={{width: "80%"}} />
</div>

- اس کلید کو اس ویب سائٹ پر ایمبیڈ میں کاپی اور پیسٹ کریں اور **جمع کرائیں** پر کلک کریں۔

اب آپ کو اس سائٹ پر سرایت کرنے کے قابل ہونا چاہئے۔ نوٹ کریں کہ OpenAI آپ سے ان ایمبیڈز کے ذریعے جمع کرائے جانے والے ہر پرامپٹ کے لیے آپ سے چارج لیتا ہے۔ اگر آپ نے حال ہی میں نیا اکاؤنٹ بنایا ہے، تو آپ کے پاس 3 ماہ کے مفت کریڈٹ ہونے چاہئیں۔ اگر آپ کے پاس کریڈٹ ختم ہو گئے ہیں، تو پریشان نہ ہوں، کیونکہ ان ماڈلز کا استعمال بہت سستا ہے۔ آپ کے تخلیق کردہ ہر سات ہزار الفاظ کے لیے ChatGPT کی قیمت صرف $0.02 ہے۔[^a]۔

### ایمبیڈ کا استعمال کرنا

آئیے ایمبیڈ کو استعمال کرنے کا طریقہ سیکھتے ہیں۔ "اپنا پرامپٹ یہاں ٹائپ کریں" فیلڈ میں ترمیم کریں۔ یہ سرایت مؤثر طریقے سے ChatGPT استعمال کرنے کے مترادف ہے، سوائے اس کے کہ آپ مکمل گفتگو نہیں کر سکتے۔ اس کورس میں، ایمبیڈز کو صرف پرامپٹ انجینئرنگ تکنیک کی مثالیں دکھانے کے لیے استعمال کیا جاتا ہے۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik91dHB1dCBhcHBlYXJzIGhlcmUiLCJwcm9tcHQiOiJUeXBlIHlvdXIgcHJvbXB0IGhlcmUiLCJtb2RlbCI6ImdwdC0zLjUtdHVyYm8ifQ%3D%3D"
    style={{width:"100%", height:"300px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

آپ جنریٹ بٹن کے نیچے معلومات کے چار ٹکڑے دیکھ سکتے ہیں۔ بائیں طرف والا، 'gpt-3.5-turbo' ماڈل ہے (gpt-3.5-turbo ChatGPT کا تکنیکی نام ہے)۔ تین نمبر [LLM ترتیبات](https://learnprompting.org/docs/basics/configuration_hyperparameters) ہیں، جن کے بارے میں ہم چند مضامین میں جانیں گے۔ اگر آپ خود اپنا ایمبیڈ بنانا چاہتے ہیں تو کلک کریں۔
اس ایمبیڈ بٹن میں ترمیم کریں۔

## نتیجہ

یہ ایمبیڈز آپ کے لیے پورے کورس میں سیکھنا آسان بنا دیں گے، کیونکہ آپ کسی مختلف ٹیب پر کلک کیے بغیر اپنے پرامپٹ کو تیزی سے جانچ سکتے ہیں۔ تاہم، اگر آپ ChatGPT انٹرفیس کو ترجیح دیتے ہیں تو آپ کو ایمبیڈز استعمال کرنے کی ضرورت نہیں ہے۔ بس پرامپٹس کو ChatGPT میں کاپی اور پیسٹ کرنا جاری رکھیں۔ اگر آپ ایمبیڈز استعمال کرنے کا ارادہ رکھتے ہیں، تو اپنی API کلید کہیں لکھ لیں، کیونکہ OpenAI ویب سائٹ آپ کو اسے صرف ایک بار دیکھنے کی اجازت دیتی ہے۔

:::caution
کبھی بھی کسی کو اپنی API کلید مت بتائیں، کیونکہ وہ آپ کے اکاؤنٹ کو پرامپٹ سے چارج کر سکتے ہیں۔
:::

[^a]: قیمتوں کی مکمل معلومات [یہاں] دیکھیں (https://openai.com/pricing)