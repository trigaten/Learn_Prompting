---
sidebar_position: 600
---

# 🟢 ای میلز کے لیے Zapier

## تعارف


ہم پہلے ہی دیکھ چکے ہیں کہ جب ای میلز کی بات آتی ہے تو GPT-3 کتنا مفید ہو سکتا ہے۔ جب آپ اسے **nocode** ٹولز جیسے [Zapier](https://zapier.com) یا [Bubble.io](https://bubble.io) کے ساتھ جوڑتے ہیں تو یہ اور بھی زیادہ ہوسکتا ہے۔

یہ مضمون ایک مثال پر مشتمل ہوگا کہ Zapier+GPT-3 سیٹ اپ وقت کی ایک چھوٹی سی رقم کے ساتھ کیا کرسکتا ہے۔ یہ مضمون ایک خاص مثال پر مرکوز ہے، لیکن امکانات بہت زیادہ ہیں۔ ہم راستے میں کچھ اور مثالیں دیں گے۔ ذہن میں رکھیں کہ آپ یہ Bubble.io میں بھی کر سکتے ہیں۔ بہت سے دوسرے نوکوڈ ٹولز ہیں، لیکن لکھنے کے وقت صرف بہت کم آپ کو GPT-3 استعمال کرنے کی اجازت دیتے ہیں۔


اس مضمون میں ہم آپ کو دکھائیں گے کہ Zapier میں ایک سادہ سسٹم کیسے ترتیب دیا جائے جس میں **ای میلز کا خلاصہ اور ذخیرہ کیا جاتا ہے**۔ کسی سے ملاقات ہو؟ ان ای میلز کے خلاصے کو جلدی سے چیک کریں جن کا آپ نے اس شخص کے ساتھ تبادلہ کیا ہے۔ اسے ترتیب دینے میں تقریباً 20 منٹ لگتے ہیں۔

:::caution
اس مضمون کے لیے Zapier کو پہلے سے جاننا مفید ہے۔ اگر آپ ایسا نہیں کرتے ہیں تو آپ اس [آرٹیکل](https://zapier.com/learn/) کو دیکھ سکتے ہیں۔
:::


## عام خیال


ذیل میں ایک خاکہ ہے کہ ہم یہاں Zapier میں کیا کریں گے۔ جب بھی کوئی ای میل آپ کے ان باکس میں آتا ہے، یہ Zapier کو متحرک کرے گا۔ چار مراحل ہیں (ابھی کے لیے):

1. ای میل آتا ہے اور Zapier کو متحرک کرتا ہے۔
1. ای میل کے مواد کو فارمیٹ کریں (مثال کے طور پر HTML مارک ڈاؤن کو ہٹانے کے لیے)۔
2. خلاصہ کرنے کے لیے اسے GPT-3 پر بھیجیں۔
3. آؤٹ پٹ کو ڈیٹا بیس میں اسٹور کریں۔



## زپیئر میں سیٹ اپ


یقینی بنائیں کہ ایک [Zapier اکاؤنٹ](https://zapier.com/sign-up) ہے (آپ مفت حاصل کر سکتے ہیں)۔ اسے ترتیب دینا کافی سیدھا ہونا چاہیے۔ اپنا اکاؤنٹ بنانے کے بعد، ہر Zapier ایکشن کی مکمل تفصیل دیکھنے کے لیے نیچے والے باکس کو پھیلائیں جس کی ہمیں ضرورت ہے۔


یہاں zapier میں ایک سیٹ اپ ہے جو آپ کو ایک بہت ہی بنیادی خلاصہ کرنے کی اجازت دیتا ہے جیسا کہ خاکہ میں دکھایا گیا ہے۔ اس کی حد ہے، لیکن یہ کام کرتا ہے اور ایک مفید ڈیٹا بیس بنا سکتا ہے۔


## بہتر نتائج کے لیے پرامپٹ کو بہتر بنانا

اپنے نتائج کو بہتر بنانے کے چند آسان طریقے ہیں۔ سیاق و سباق کو شامل کرنے اور رول پرمپٹنگ آؤٹ پٹ کو بہتر بنا سکتی ہے۔ تاہم، آپ کی ای میلز کے عنوان اور مواد میں موضوعات کی ایک وسیع رینج کا احاطہ کیا جا سکتا ہے۔ اس کا مطلب یہ ہے کہ عام ہدایات بہت مخصوص لوگوں سے بہتر کام کریں گی، جو ماڈل کو ختم کر سکتی ہیں۔

عملی وجوہات کی بناء پر، ایک ہدایات دینا مفید ہے، اس کے بعد GPT-3 بتانا جب ای میل پرامپٹ میں شروع ہوتا ہے تو صرف "Email:" شامل کرکے اور پرامپٹ کو ""Summary": " کے ساتھ ختم کرنا۔ یہ GPT-3 کے ساتھ جواب دینے سے گریز کرتا ہے "ضرور! میں آپ کے لیے اس کا خلاصہ کر سکتا ہوں..."۔

رول پرمپٹنگ یہاں بھی کارآمد ہو سکتی ہے۔ GPT-3 سے پرسنل اسسٹنٹ کے طور پر کام کرنے سے سمری کے معیار کو بڑھانے میں مدد ملتی ہے۔
اگر آپ کام کی ای میلز کا خلاصہ کرنا چاہتے ہیں، تو صرف اپنے کردار کو شامل کرنے سے کام کرنے کے لیے GPT-3 سیاق و سباق مل جاتا ہے۔ یہ اس طرح کام کرتا ہے جیسے یہ قارئین سے علم کی کسی سطح کو فرض کرتا ہے، جو ای میل کے غیر متعلقہ حصوں کو فلٹر کرنے میں مدد کرتا ہے۔
ذیل میں ہم دفتر کے منتظم کو موصول ہونے والی ای میلز کے ساتھ کچھ مثالیں دکھاتے ہیں۔

آپ اس سے بلٹ پوائنٹس میں ایک سادہ ای میل کا خلاصہ کرنے کے لیے کہہ سکتے ہیں، تاہم، یہ سب کچھ اس لحاظ سے مفید نہیں ہو سکتا ہے کہ آپ خلاصہ کس طرح استعمال کرنا چاہیں گے۔ ای میل کے تبادلے کی فوری سکمنگ کے لیے آپ شاید اسے مختصر اور جامع ہونا چاہیں گے۔ بس پرامپٹ میں اس کے لیے پوچھنا اچھا کام کرتا ہے۔ ذیل میں اس پرامپٹ کی ایک مثال ہے۔ اسے ایڈجسٹ کریں اور اس کے ساتھ کھیلیں یہ دیکھنے کے لیے کہ یہ کیسے بدلتا ہے۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

یہاں جواب قابل قبول ہے، اور مفید ہوگا۔ تاہم، کچھ مزید فائن ٹیوننگ کے ساتھ آپ بہتر نتیجہ حاصل کر سکتے ہیں۔ خلاصے کے قاری کے طور پر آپ کو اس بات کی پرواہ نہیں ہے کہ یہ ایک ای میل ہے، آپ کو خلاصہ کے لیے کم درجے کی تفصیل چاہیے ہو سکتی ہے۔ غیر متعلقہ کیوں ہے کے بارے میں معلومات، سوالات اور خدشات کے بارے میں آخری جملے کے لیے بھی یہی ہے۔ صرف یہ شامل کرنے سے کہ خلاصہ کا مقصد آپ کے لیے مواد کو کم کرنا ہے اور یہ کہ آپ خوشگوار چیزیں ہٹانا چاہتے ہیں، نتیجہ کو بہتر بنایا جا سکتا ہے۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlcXVlc3QgZm9yIGFkZGl0aW9uYWwgb2ZmaWNlIHN1cHBsaWVzIC0gcHJpbnRlciBwYXBlciwgaW5rIGNhcnRyaWRnZXMgZm9yIEhQIHByaW50ZXIsIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzIGFuZCBoaWdobGlnaHRlcnMuIiwicHJvbXB0IjoiQWN0IGFzIG15IHBlcnNvbmFsIGFzc2lzdGFudC4gSSBhbSBhbiBvZmZpY2UgYWRtaW5pc3RyYXRvci4gU3VtbWFyaXplIHRoZSBmb2xsb3dpbmcgZW1haWwgYXMgY29uY2lzZWx5IGFzIHlvdSBjYW4sIGlnbm9yZSB0aGUgZm9vdGVyIGFuZCBoZWFkZXIgYW5kIGFueSBwcmV2aW91cyBlbWFpbHMuIEkgd2FudCB0byB1c2UgdGhlIHN1bW1hcnkgdG8gc2tpbSBlbWFpbHMuIFJlbW92ZSBhbnkgcGxlYXNhbnRyaWVzLiBcXG5cXG5FbWFpbDogUmVxdWVzdCBmb3IgQWRkaXRpb25hbCBPZmZpY2UgU3VwcGxpZXMgRGVhciBPZmZpY2UgQWRtaW5pc3RyYXRvciwgSSBob3BlIHRoaXMgZW1haWwgZmluZHMgeW91IHdlbGwuIEkgYW0gd3JpdGluZyB0byByZXF1ZXN0IGFkZGl0aW9uYWwgb2ZmaWNlIHN1cHBsaWVzIGZvciBvdXIgdGVhbS4gQXMgeW91IGtub3csIHdlIGhhdmUgYmVlbiBleHBlcmllbmNpbmcgYSBoaWdoIHZvbHVtZSBvZiB3b3JrIGxhdGVseSBhbmQgaGF2ZSBiZWVuIHVzaW5nIG91ciBzdXBwbGllcyBhdCBhIGZhc3RlciByYXRlIHRoYW4gdXN1YWwuIFdlIHdvdWxkIGdyZWF0bHkgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQgcHJvdmlkZSB1cyB3aXRoIHRoZSBmb2xsb3dpbmcgaXRlbXM6IFByaW50ZXIgcGFwZXIgSW5rIGNhcnRyaWRnZXMgZm9yIHRoZSBIUCBwcmludGVyIGluIHRoZSBjb25mZXJlbmNlIHJvb20gU3RpY2t5IG5vdGVzIEJpbmRlciBjbGlwcyBIaWdobGlnaHRlcnMgUGxlYXNlIGxldCBtZSBrbm93IGlmIHRoZXJlIGFyZSBhbnkgcXVlc3Rpb25zIG9yIGNvbmNlcm5zLCBhbmQgd2hlbiB3ZSBjYW4gZXhwZWN0IHRoZSBzdXBwbGllcyB0byBiZSBkZWxpdmVyZWQuIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLiBcblxuQmVzdCByZWdhcmRzLCBZb3VyIE5hbWUgU3VtbWFyeTpcbiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>اب آپ کے پاس خلاصہ کے سب سے اہم حصے رہ گئے ہیں!


## دیگر استعمال کے معاملات

اب جب کہ آپ نے خلاصوں کی مثال دیکھ لی ہے، ہم Zapier+GPT-3 کے استعمال کے چند دیگر معاملات کا ذکر کریں گے۔ ایک عمدہ مثال GPT-3 کو آپ کی ای میلز کی درجہ بندی کرنے دینا ہے۔ یہ صرف درج ذیل ای میل کو آپ کی پسند کے زمرے کے طور پر درجہ بندی کرنے کے لیے فوری طور پر بتانے کے لیے آتا ہے۔

مزید گہرائی میں مثال کے طور پر متعدد پرامپٹ ہوں گے۔ آپ جواب پیدا کرنے کے لیے ایک پرامپٹ استعمال کر سکتے ہیں جو ای میل کے مطالبات سے متفق ہو اور جو متفق ہو یا انکار کرے۔ دونوں کو آپ کے ڈرافٹ میں محفوظ کیا جا سکتا ہے اور جب بھی آپ اسے بھیجنا چاہیں جانے کے لیے تیار رہیں۔

اگر آپ کو باقاعدگی سے بہت ملتی جلتی ای میلز موصول ہوتی ہیں، تو آپ Zapier میں فلٹر کا استعمال صرف اس ای میل پر پرامپٹ لگانے کے لیے کر سکتے ہیں۔ فارمیٹر کے ساتھ مل کر یہ ایک طاقتور ٹول ہو سکتا ہے۔ آپ ان سے معلومات نکال سکتے ہیں اور CSV برآمد کر سکتے ہیں یا انہیں براہ راست کسی ڈیٹا بیس کی شکل میں محفوظ کر سکتے ہیں۔


## خدشات

براہ کرم GPT-3 کے ذریعے ای میلز چلاتے اور انہیں اسٹور کرتے وقت رازداری کے خدشات کو ذہن میں رکھیں۔ GPT-3 بعض اوقات غلطیاں کرتا ہے۔ ہم بھیجنے سے پہلے ای میل کا مواد چیک کرنے کی انتہائی سفارش کرتے ہیں۔