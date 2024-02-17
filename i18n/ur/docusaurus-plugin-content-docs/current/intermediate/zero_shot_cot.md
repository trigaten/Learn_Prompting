---
sidebar_position: 4
---

# 🟢 زیرو شاٹ چین آف تھاٹ


زیرو شاٹ چین آف تھاٹ (زیرو شاٹ-کوٹ) پرامپٹنگ (@kojima2022large) ایک ہے
%%CoT prompting|CoT prompting%% (@wei2022chain) تک کی پیروی کریں، جو ایک ناقابل یقین حد تک متعارف کراتی ہے۔
سادہ صفر شاٹ پرامپٹ۔ انہوں نے الفاظ کو جوڑ کر پایا کہ "** آئیے سوچتے ہیں قدم
مرحلہ وار۔**" سوال کے اختتام تک، LLMs کا ایک سلسلہ تیار کرنے کے قابل ہیں۔
سوچا کہ سوال کا جواب دیتا ہے. اس زنجیر فکر سے وہ اس قابل ہیں۔
مزید درست جوابات نکالیں۔

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
زیرو شاٹ کوٹ (کوجیما وغیرہ)
</div>

تکنیکی طور پر، مکمل Zero-shot-CoT عمل میں دو الگ الگ پرامپٹ/ تکمیلات شامل ہیں۔
نیچے کی تصویر میں، بائیں طرف اوپر والا بلبلہ سوچ کا ایک سلسلہ پیدا کرتا ہے، جبکہ اوپر والا بلبلہ
دائیں پہلے پرامپٹ سے آؤٹ پٹ لیتا ہے (بشمول پہلا پرامپٹ خود)
اور سوچ کی زنجیر سے جواب نکالتا ہے۔ یہ دوسرا پرامپٹ ایک _self augmented_ prompt ہے۔

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
مکمل زیرو شاٹ CoT عمل (Kojima et al.)
</div>

## مثال

یہاں کچھ ڈیمو ہیں (جو صرف استدلال نکالتے ہیں)۔ یہ پہلے
ڈیمو GPT-3 (davinci-003) کو ریاضی کے ایک سادہ سوال میں ناکام ہونے کو دکھاتا ہے، جبکہ دوسرا ڈیمو ایک استعمال کرتا ہے
Zero-shot-CoT پرامپٹ اور کامیابی سے مسئلہ حل کرتا ہے۔ بلا جھجھک اپنا درج کریں۔
OpenAI API کلید (جنریٹ پر کلک کریں) اور مثالوں کے ساتھ چلائیں۔ نوٹ کریں کہ کتنا آسان ہے۔
زیرو شاٹ-CoT پرامپٹ کا موازنہ CoT پرامپٹ سے کیا جاتا ہے۔

#### Incorrect

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### درست

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## نتائج
Zero-shot-CoT ریاضی، کامن سینس، پر نتائج کو بہتر بنانے میں بھی موثر تھا۔
اور علامتی استدلال کے کام۔ تاہم، حیرت انگیز طور پر، یہ عام طور پر نہیں تھا
CoT پرامپٹنگ کے طور پر موثر۔ Zero-shot-CoT کے لیے استعمال کا ایک اہم کیس حاصل کرتے وقت ہے۔
CoT پرامپٹنگ کے لیے چند شاٹ مثالیں مشکل ہیں۔ 

## سود کا خاتمہ

کوجیما وغیرہ۔ متعدد مختلف Zero-shot-CoT پرامپٹس کے ساتھ تجربہ کریں۔
(مثال کے طور پر "آئیے اس مسئلے کو قدموں میں تقسیم کرکے حل کریں۔" یا "آئیے اس کے بارے میں منطقی طور پر سوچیں۔")، لیکن انہیں معلوم ہوا کہ "آئیے قدم بہ قدم سوچیں" ان کے لیے سب سے زیادہ مؤثر ہے۔
منتخب کام.


## نوٹس

نکالنے کا مرحلہ اکثر کام کے لیے مخصوص ہونا چاہیے، جس سے زیرو-Shot-CoT کم ہو جاتا ہے۔
عام طور پر اس سے کہیں زیادہ جو پہلے نظر آتا ہے۔

مختصراً، میں نے محسوس کیا ہے کہ زیرو شاٹ-CoT طرز کے پرامپٹ بعض اوقات کارآمد ہوتے ہیں۔
تخلیقی کاموں کی تکمیل کی لمبائی کو بہتر بنانے میں۔ مثال کے طور پر غور کریں۔
معیاری پرامپٹ 'ایک مینڈک اور ایک مشروم کے بارے میں ایک کہانی لکھیں جو دوست بن جاتے ہیں۔'
اس پرامپٹ کے آخر میں 'آئیے قدم بہ قدم سوچتے ہیں' کے الفاظ کو شامل کرنے سے
ایک بہت طویل تکمیل.

