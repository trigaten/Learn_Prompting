---
sidebar_position: 70
---

# 🟢 مثالیں دکھا رہا ہے

<!-- import FewShot from '@site/docs/assets/basics/few_shot.svg'; -->
import FewShot from '@site/i18n/ur/docusaurus-plugin-content-docs/current/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"100%",height:"200px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- صفر، ایک، اور چند شاٹ پرامپٹنگ سیکھیں۔
- اپنے آؤٹ پٹس کو ڈھانچے کے لیے چند شاٹ پرامپٹنگ کا استعمال کریں۔
:::


اس کے باوجود ایک اور حوصلہ افزا حکمت عملی *few-shot prompting*(@logan-iv-etal-2022-cutting)(@lake2015human)[^a] ہے، جو بنیادی طور پر صرف ماڈل کو کچھ مثالیں دکھا رہی ہے[^b] (جسے "" بھی کہا جاتا ہے شاٹس") جو آپ اسے کرنا چاہتے ہیں۔ چند شاٹ پرامپٹس AI کو ان چند مثالوں (@zhao2021calibrate) سے سیکھنے کی اجازت دیتے ہیں۔

مندرجہ بالا مثال پر غور کریں، جس میں ہم کسٹمر کے تاثرات کو مثبت یا منفی کے طور پر درجہ بندی کرنے کی کوشش کر رہے ہیں۔ ہم ماڈل کو مثبت/منفی تاثرات کی تین مثالیں دکھاتے ہیں، پھر ہم اسے فیڈ بیک کا ایک نیا حصہ دکھاتے ہیں جس کی ابھی تک درجہ بندی نہیں کی گئی ہے (`یہ کام نہیں کرتا!:`)۔ ماڈل دیکھتا ہے کہ پہلی تین مثالوں کو یا تو 'مثبت' یا 'منفی' کے طور پر درجہ بندی کیا گیا تھا، اور اس معلومات کا استعمال نئی مثال کو 'منفی' کے طور پر درجہ بندی کرنے کے لیے کرتا ہے۔

## ساخت

جس طرح سے ہم مثالوں کی تشکیل کرتے ہیں وہ بہت اہم ہے۔ یہ دیکھتے ہوئے کہ ہم نے ان تینوں مثالوں کو ایک `ان پٹ: درجہ بندی` فارمیٹ میں ترتیب دیا ہے، ماڈل حتمی لائن کے بعد ایک لفظ تیار کرتا ہے، بجائے اس کے کہ ایک مکمل جملہ نکالے جیسے کہ `یہ جائزہ مثبت ہے`۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Im5lZ2F0aXZlIiwicHJvbXB0IjoiR3JlYXQgcHJvZHVjdCwgMTAvMTA6IHBvc2l0aXZlXG5EaWRuJ3Qgd29yayB2ZXJ5IHdlbGw6IG5lZ2F0aXZlXG5TdXBlciBoZWxwZnVsLCB3b3J0aCBpdDogcG9zaXRpdmVcbkl0IGRvZXNudCB3b3JrIToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

### ساخت کے بارے میں مزید

چند شاٹ پرامپٹنگ کے لیے استعمال کا ایک کلیدی معاملہ یہ ہے کہ جب آپ کو آؤٹ پٹ کو **ایک مخصوص طریقے سے تشکیل دینے کی ضرورت ہوتی ہے** جسے ماڈل میں بیان کرنا مشکل ہوتا ہے۔ اس کو سمجھنے کے لیے، آئیے ایک متعلقہ مثال پر غور کریں: کہتے ہیں کہ آپ ایک معاشی تجزیہ کر رہے ہیں اور آپ کو مقامی اخبارات کے مضامین کا تجزیہ کر کے قریبی قصبوں کے معروف شہریوں کے نام اور پیشے مرتب کرنے کی ضرورت ہے۔ آپ چاہیں گے کہ ماڈل ہر مضمون کو پڑھے اور ناموں اور پیشوں کی فہرست `First Last [OCCUPATION]` فارمیٹ میں نکالے۔ ایسا کرنے کے لیے ماڈل حاصل کرنے کے لیے، آپ اسے چند مثالیں دکھا سکتے ہیں۔ انہیں دیکھنے کے لیے سرایت کے ذریعے دیکھیں۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IjEuIExhdXJhIFNpbW1vbnMgW0ZBUk1FUl1cbjIuIEtldmluIEFsdmFyZXogW0RBTkNFIElOU1RSVUNUT1JdXG4zLiBSYWNoZWwgTydDb25ub3IgW1ZPTFVOVEVFUl0iLCJwcm9tcHQiOiJJbiB0aGUgYnVzdGxpbmcgdG93biBvZiBFbWVyYWxkIEhpbGxzLCBhIGRpdmVyc2UgZ3JvdXAgb2YgaW5kaXZpZHVhbHMgbWFkZSB0aGVpciBtYXJrLiBTYXJhaCBNYXJ0aW5leiwgYSBkZWRpY2F0ZWQgbnVyc2UsIHdhcyBrbm93biBmb3IgaGVyIGNvbXBhc3Npb25hdGUgY2FyZSBhdCB0aGUgbG9jYWwgaG9zcGl0YWwuIERhdmlkIFRob21wc29uLCBhbiBpbm5vdmF0aXZlIHNvZnR3YXJlIGVuZ2luZWVyLCB3b3JrZWQgdGlyZWxlc3NseSBvbiBncm91bmRicmVha2luZyBwcm9qZWN0cyB0aGF0IHdvdWxkIHJldm9sdXRpb25pemUgdGhlIHRlY2ggaW5kdXN0cnkuIE1lYW53aGlsZSwgRW1pbHkgTmFrYW11cmEsIGEgdGFsZW50ZWQgYXJ0aXN0IGFuZCBtdXJhbGlzdCwgcGFpbnRlZCB2aWJyYW50IGFuZCB0aG91Z2h0LXByb3Zva2luZyBwaWVjZXMgdGhhdCBhZG9ybmVkIHRoZSB3YWxscyBvZiBidWlsZGluZ3MgYW5kIGdhbGxlcmllcyBhbGlrZS4gTGFzdGx5LCBNaWNoYWVsIE8nQ29ubmVsbCwgYW4gYW1iaXRpb3VzIGVudHJlcHJlbmV1ciwgb3BlbmVkIGEgdW5pcXVlLCBlY28tZnJpZW5kbHkgY2FmZSB0aGF0IHF1aWNrbHkgYmVjYW1lIHRoZSB0b3duJ3MgZmF2b3JpdGUgbWVldGluZyBzcG90LiBFYWNoIG9mIHRoZXNlIGluZGl2aWR1YWxzIGNvbnRyaWJ1dGVkIHRvIHRoZSByaWNoIHRhcGVzdHJ5IG9mIHRoZSBFbWVyYWxkIEhpbGxzIGNvbW11bml0eS5cbjEuIFNhcmFoIE1hcnRpbmV6IFtOVVJTRV1cbjIuIERhdmlkIFRob21wc29uIFtTT0ZUV0FSRSBFTkdJTkVFUl1cbjMuIEVtaWx5IE5ha2FtdXJhIFtBUlRJU1RdXG40LiBNaWNoYWVsIE8nQ29ubmVsbCBbRU5UUkVQUkVORVVSXVxuXG5BdCB0aGUgaGVhcnQgb2YgdGhlIHRvd24sIENoZWYgT2xpdmVyIEhhbWlsdG9uIGhhcyB0cmFuc2Zvcm1lZCB0aGUgY3VsaW5hcnkgc2NlbmUgd2l0aCBoaXMgZmFybS10by10YWJsZSByZXN0YXVyYW50LCBHcmVlbiBQbGF0ZS4gT2xpdmVyJ3MgZGVkaWNhdGlvbiB0byBzb3VyY2luZyBsb2NhbCwgb3JnYW5pYyBpbmdyZWRpZW50cyBoYXMgZWFybmVkIHRoZSBlc3RhYmxpc2htZW50IHJhdmUgcmV2aWV3cyBmcm9tIGZvb2QgY3JpdGljcyBhbmQgbG9jYWxzIGFsaWtlLlxuXG5KdXN0IGRvd24gdGhlIHN0cmVldCwgeW91J2xsIGZpbmQgdGhlIFJpdmVyc2lkZSBHcm92ZSBMaWJyYXJ5LCB3aGVyZSBoZWFkIGxpYnJhcmlhbiBFbGl6YWJldGggQ2hlbiBoYXMgd29ya2VkIGRpbGlnZW50bHkgdG8gY3JlYXRlIGEgd2VsY29taW5nIGFuZCBpbmNsdXNpdmUgc3BhY2UgZm9yIGFsbC4gSGVyIGVmZm9ydHMgdG8gZXhwYW5kIHRoZSBsaWJyYXJ5J3Mgb2ZmZXJpbmdzIGFuZCBlc3RhYmxpc2ggcmVhZGluZyBwcm9ncmFtcyBmb3IgY2hpbGRyZW4gaGF2ZSBoYWQgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHRvd24ncyBsaXRlcmFjeSByYXRlcy5cblxuQXMgeW91IHN0cm9sbCB0aHJvdWdoIHRoZSBjaGFybWluZyB0b3duIHNxdWFyZSwgeW91J2xsIGJlIGNhcHRpdmF0ZWQgYnkgdGhlIGJlYXV0aWZ1bCBtdXJhbHMgYWRvcm5pbmcgdGhlIHdhbGxzLiBUaGVzZSBtYXN0ZXJwaWVjZXMgYXJlIHRoZSB3b3JrIG9mIHJlbm93bmVkIGFydGlzdCwgSXNhYmVsbGEgVG9ycmVzLCB3aG9zZSB0YWxlbnQgZm9yIGNhcHR1cmluZyB0aGUgZXNzZW5jZSBvZiBSaXZlcnNpZGUgR3JvdmUgaGFzIGJyb3VnaHQgdGhlIHRvd24gdG8gbGlmZS5cblxuUml2ZXJzaWRlIEdyb3ZlJ3MgYXRobGV0aWMgYWNoaWV2ZW1lbnRzIGFyZSBhbHNvIHdvcnRoIG5vdGluZywgdGhhbmtzIHRvIGZvcm1lciBPbHltcGljIHN3aW1tZXItdHVybmVkLWNvYWNoLCBNYXJjdXMgSmVua2lucy4gTWFyY3VzIGhhcyB1c2VkIGhpcyBleHBlcmllbmNlIGFuZCBwYXNzaW9uIHRvIHRyYWluIHRoZSB0b3duJ3MgeW91dGgsIGxlYWRpbmcgdGhlIFJpdmVyc2lkZSBHcm92ZSBTd2ltIFRlYW0gdG8gc2V2ZXJhbCByZWdpb25hbCBjaGFtcGlvbnNoaXBzLlxuMS4gT2xpdmVyIEhhbWlsdG9uIFtDSEVGXVxuMi4gRWxpemFiZXRoIENoZW4gW0xJQlJBUklBTl1cbjMuIElzYWJlbGxhIFRvcnJlcyBbQVJUSVNUXVxuNC4gTWFyY3VzIEplbmtpbnMgW0NPQUNIXVxuXG5PYWsgVmFsbGV5LCBhIGNoYXJtaW5nIHNtYWxsIHRvd24sIGlzIGhvbWUgdG8gYSByZW1hcmthYmxlIHRyaW8gb2YgaW5kaXZpZHVhbHMgd2hvc2Ugc2tpbGxzIGFuZCBkZWRpY2F0aW9uIGhhdmUgbGVmdCBhIGxhc3RpbmcgaW1wYWN0IG9uIHRoZSBjb21tdW5pdHkuXG5cbkF0IHRoZSB0b3duJ3MgYnVzdGxpbmcgZmFybWVyJ3MgbWFya2V0LCB5b3UnbGwgZmluZCBMYXVyYSBTaW1tb25zLCBhIHBhc3Npb25hdGUgb3JnYW5pYyBmYXJtZXIga25vd24gZm9yIGhlciBkZWxpY2lvdXMgYW5kIHN1c3RhaW5hYmx5IGdyb3duIHByb2R1Y2UuIEhlciBkZWRpY2F0aW9uIHRvIHByb21vdGluZyBoZWFsdGh5IGVhdGluZyBoYXMgaW5zcGlyZWQgdGhlIHRvd24gdG8gZW1icmFjZSBhIG1vcmUgZWNvLWNvbnNjaW91cyBsaWZlc3R5bGUuXG5cbkluIE9hayBWYWxsZXkncyBjb21tdW5pdHkgY2VudGVyLCBLZXZpbiBBbHZhcmV6LCBhIHNraWxsZWQgZGFuY2UgaW5zdHJ1Y3RvciwgaGFzIGJyb3VnaHQgdGhlIGpveSBvZiBtb3ZlbWVudCB0byBwZW9wbGUgb2YgYWxsIGFnZXMuIEhpcyBpbmNsdXNpdmUgZGFuY2UgY2xhc3NlcyBoYXZlIGZvc3RlcmVkIGEgc2Vuc2Ugb2YgdW5pdHkgYW5kIHNlbGYtZXhwcmVzc2lvbiBhbW9uZyByZXNpZGVudHMsIGVucmljaGluZyB0aGUgbG9jYWwgYXJ0cyBzY2VuZS5cblxuTGFzdGx5LCBSYWNoZWwgTydDb25ub3IsIGEgdGlyZWxlc3Mgdm9sdW50ZWVyLCBkZWRpY2F0ZXMgaGVyIHRpbWUgdG8gdmFyaW91cyBjaGFyaXRhYmxlIGluaXRpYXRpdmVzLiBIZXIgY29tbWl0bWVudCB0byBpbXByb3ZpbmcgdGhlIGxpdmVzIG9mIG90aGVycyBoYXMgYmVlbiBpbnN0cnVtZW50YWwgaW4gY3JlYXRpbmcgYSBzdHJvbmcgc2Vuc2Ugb2YgY29tbXVuaXR5IHdpdGhpbiBPYWsgVmFsbGV5LlxuXG5UaHJvdWdoIHRoZWlyIHVuaXF1ZSB0YWxlbnRzIGFuZCB1bndhdmVyaW5nIGRlZGljYXRpb24sIExhdXJhLCBLZXZpbiwgYW5kIFJhY2hlbCBoYXZlIHdvdmVuIHRoZW1zZWx2ZXMgaW50byB0aGUgZmFicmljIG9mIE9hayBWYWxsZXksIGhlbHBpbmcgdG8gY3JlYXRlIGEgdmlicmFudCBhbmQgdGhyaXZpbmcgc21hbGwgdG93bi4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

صحیح آؤٹ پٹ فارمیٹ کی ماڈل مثالیں دکھا کر، یہ نئے مضامین کے لیے صحیح آؤٹ پٹ پیدا کرنے کے قابل ہے۔ ہم اس کے بجائے ایک انسٹرکشن پرامپٹ کا استعمال کرکے یہی آؤٹ پٹ تیار کرسکتے ہیں، لیکن چند شاٹ پرامپٹ بہت زیادہ مستقل طور پر کام کرتا ہے۔

## شاٹ پرامٹنگ کی مختلف حالتیں

لفظ "شاٹ" "مثال" کا مترادف ہے۔ چند شاٹ پرامپٹنگ کے علاوہ، شاٹ پرامپٹنگ کی دو دوسری قسمیں موجود ہیں۔ ان متغیرات میں فرق صرف یہ ہے کہ آپ ماڈل کو کتنی مثالیں دکھاتے ہیں۔

### زیرو شاٹ پرامپٹنگ

زیرو شاٹ پرامپٹنگ پرامپٹنگ پرامپٹنگ کی سب سے بنیادی شکل ہے۔ یہ ماڈل کو بغیر مثال کے ایک پرامپٹ دکھاتا ہے اور اس سے جواب پیدا کرنے کو کہتا ہے۔ اس طرح، تمام ہدایات اور رول پرامپٹس جو آپ نے اب تک دیکھے ہیں صفر شاٹ پرامپٹس ہیں۔ زیرو شاٹ پرامپٹ کی ایک اضافی مثال یہ ہے:

<AIInput>
2+2 شامل کریں:
</AIInput>

یہ زیرو شاٹ ہے کیونکہ ہم نے ماڈل کو کوئی مکمل مثال نہیں دکھائی ہے۔

### ون شاٹ پرامپٹنگ

ون شاٹ پرمپٹنگ اس وقت ہوتی ہے جب آپ ماڈل کو ایک ہی مثال دکھاتے ہیں۔ مثال کے طور پر، زیرو شاٹ پرامپٹ کا ون شاٹ اینالاگ `2+2 شامل کریں:` ہے:
  
<AIInput>
{`3+3: 6 شامل کریں۔
2+2 شامل کریں:`}
</AIInput>

ہم نے ماڈل کو صرف ایک مکمل مثال دکھایا ہے (`3+3: 6` شامل کریں)، تو یہ ایک شاٹ پرامپٹ ہے۔

### چند شاٹ پرامپٹنگ

جب آپ ماڈل 2 یا اس سے زیادہ مثالیں دکھاتے ہیں تو چند شاٹ پرامپٹنگ ہوتی ہے۔ مندرجہ بالا دو پرامپٹ کا چند شاٹ اینالاگ یہ ہے:

<AIInput>
{`3+3: 6 شامل کریں۔
5+5: 10 شامل کریں۔
2+2 شامل کریں:
`}
</AIInput>

یہ چند شاٹ پرامپٹ ہے کیونکہ ہم نے ماڈل کو کم از کم 2 مکمل مثالیں دکھائی ہیں (`Add 3+3:6` اور `Add 5+5:10`)۔ عام طور پر، آپ جتنی زیادہ مثالیں ماڈل کو دکھائیں گے، آؤٹ پٹ اتنا ہی بہتر ہو گا، اس لیے زیادہ تر معاملات میں صفر شاٹ اور ون شاٹ پرامپٹنگ کو ترجیح دی جاتی ہے۔

## نتیجہ

آخر میں، چند شاٹ پرامپٹنگ ایک مؤثر حکمت عملی ہے جو ماڈل کو درست اور مناسب طریقے سے تشکیل شدہ ردعمل پیدا کرنے میں رہنمائی کر سکتی ہے۔ متعدد مثالیں فراہم کرنے سے، چند شاٹ پرامپٹنگ ماڈل کو مطلوبہ آؤٹ پٹ فارمیٹ کو سمجھنے اور اس کے مطابق جواب دینے کی اجازت دیتی ہے، یہ زیادہ تر منظرناموں میں زیرو شاٹ اور ون شاٹ پرامپٹنگ پر ترجیحی طریقہ بناتی ہے[^c]۔


[^a]: چند شاٹ پرامپٹنگ کو سیاق و سباق میں سیکھنا بھی کہا جاتا ہے۔
[^b]: ان مثالوں کے لیے تکنیکی لفظ *exemplars* ہے۔
[^c]: یہ تکنیکیں اس وقت کارآمد ہوتی ہیں جب آپ کے پاس مثالیں نہ ہوں۔