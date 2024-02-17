---
sidebar_position: 70
---

# 🟡 ریاضی

اس پورے کورس کے دوران، ہم نے اشارہ کرنے کے بہت سے مختلف طریقے دیکھے ہیں جن کا استعمال %%LLM|LLM%% ریاضی کی صلاحیت کو بہتر بنانے کے لیے کیا جا سکتا ہے۔ ایک حالیہ نقطہ نظر، MathPrompter(@imani2023mathprompter)، ان میں سے کچھ طریقوں (%%CoT|CoT prompting%%, %%PAL|PAL%%، وغیرہ) کو ایک تکنیک میں یکجا کرتا ہے۔ سب سے بڑا خیال یہ ہے کہ ریاضی کے سوال کو الجبری اصطلاحات میں توڑا جائے پھر اسے مختلف طریقوں سے حل کرنے کے لیے Python کوڈ کا استعمال کریں۔

import math from '@site/docs/assets/reliability/math.webp';

<div style={{textAlign: 'center'}}>
   <img src={math} style={{width: "500px"}}/>
</div>

MathPrompter کے **چار** مراحل ہیں۔ ہم مندرجہ ذیل مثال کے مسئلے کا استعمال کرتے ہوئے ان کی وضاحت کریں گے۔ مثال براہ راست کاغذ سے لی گئی ہے۔

```text
سوال: ایک ریستوراں میں، ہر بالغ کے کھانے کی قیمت $5 ہے اور بچے مفت کھاتے ہیں۔ اگر 15 کا گروپ
لوگ آئے اور 8 بچے تھے، گروپ کے کھانے پر کتنا خرچ آئے گا؟
```

## مرحلہ 1: الجبری ٹیمپلیٹ تیار کریں۔

پہلا قدم یہ ہے کہ سوال میں ہر نمبر کو متغیر تفویض کیا جائے۔ اس سے مدد ملتی ہے کیونکہ یہ سوال کے خلاصہ ریاضی کے سوال کے ساتھ ساتھ پروگرامنگ کوڈ میں آسان ترجمے کی اجازت دیتا ہے۔

یہ چند شاٹ پرامپٹنگ کے ذریعے کیا جا سکتا ہے:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH0iLCJwcm9tcHQiOiJROiBBIHpvbyBjaGFyZ2VzICQxMiBwZXIgYWR1bHQgdGlja2V0IGFuZCBhbGxvd3MgY2hpbGRyZW4gdW5kZXIgNSB0byBlbnRlciBmb3IgZnJlZS4gQSBmYW1pbHkgb2YgNCBhZHVsdHMgYW5kIDIgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLiBXaGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuUXQ6IEF0IGEgem9vLCBlYWNoIGFkdWx0IHRpY2tldCBjb3N0cyAkQSBhbmQgY2hpbGRyZW4gdW5kZXIgNSBjYW4gZW50ZXIgZm9yIGZyZWUuIElmIGEgZmFtaWx5IG9mIEIgYWR1bHRzIGFuZCBDIGNoaWxkcmVuIHVuZGVyIDUgdmlzaXQgdGhlIHpvbywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBmb3IgdGhlIGZhbWlseSB0byBlbnRlcj9cbk1hcHBpbmc6IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUTogQSBzdG9yZSBzZWxscyBzaG9lcyBhdCAkNjAgcGVyIHBhaXIgYW5kIHNvY2tzIGF0ICQ4IHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgMiBwYWlycyBvZiBzaG9lcyBhbmQgMyBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5ROiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkNSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiAxNVxucGVvcGxlIGNhbWUgaW4gYW5kIDggd2VyZSBraWRzLCBob3cgbXVjaCB3b3VsZCBpdCBjb3N0IGZvciB0aGUgZ3JvdXAgdG8gZWF0PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## مرحلہ 2: ریاضی کے پرامپٹ

اس مرحلے کا نقطہ مسئلہ کو الجبری بیان اور ازگر کوڈ دونوں کے طور پر تشکیل دینا ہے۔ اس قدم میں بیک وقت دو پرامپٹ ہوتے ہیں، جو مسئلے کی ٹیکسٹوع نمائندگی کرنے میں مدد کرتے ہیں۔

### 2a: الجبری بیان

ہم ریاضی کے مسئلے کو الجبری بیان کے طور پر پیش کرنے کے لیے ایل ایل ایم کو چند شاٹ پرامپٹ کر سکتے ہیں۔ یہ LLM سے جواب کا فارمیٹ بنانے کے لیے کہہ کر کیا جاتا ہے، "جواب =" سے شروع ہوتا ہے۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkFuc3dlciA9IEEgKiBCIC0gQSAqIEMiLCJwcm9tcHQiOiJRdDogQXQgYSB6b28sIGVhY2ggYWR1bHQgdGlja2V0IGNvc3RzICRBIGFuZCBjaGlsZHJlbiB1bmRlciA1IGNhbiBlbnRlciBmb3IgZnJlZS4gSWYgYSBmYW1pbHkgb2YgQiBhZHVsdHMgYW5kIEMgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLCB3aGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuTWFwcGluZzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQlxuXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQyArIEIgKiBEXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuV3JpdGUgYSBtYXRoZW1hdGljYWwgZXF1YXRpb24gYW5kIGdlbmVyYXRlIHRoZSBhbnN3ZXIgZm9ybWF0XG5zdGFydGluZyB3aXRoICdBbnN3ZXIgPSciLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 2b: ازگر کوڈ

ہم %%LLM|LLM%% سے Python کوڈ بنانے کے لیے بھی کہہ سکتے ہیں جو مسئلہ کو حل کرتا ہے۔ یہ LLM سے Python فنکشن بنانے کے لیے کہہ کر کیا جاتا ہے۔

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiByZXN0YXVyYW50X2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogKEIgLSBDKSIsInByb21wdCI6IlF0OiBBdCBhIHpvbywgZWFjaCBhZHVsdCB0aWNrZXQgY29zdHMgJEEgYW5kIGNoaWxkcmVuIHVuZGVyIDUgY2FuIGVudGVyIGZvciBmcmVlLiBJZiBhIGZhbWlseSBvZiBCIGFkdWx0cyBhbmQgQyBjaGlsZHJlbiB1bmRlciA1IHZpc2l0IHRoZSB6b28sIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3QgZm9yIHRoZSBmYW1pbHkgdG8gZW50ZXI%2FXG5NYXBwaW5nOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgem9vX2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBBdCBhIHN0b3JlLCBzaG9lcyBjb3N0ICRBIHBlciBwYWlyIGFuZCBzb2NrcyBjb3N0ICRCIHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgQyBwYWlycyBvZiBzaG9lcyBhbmQgRCBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgc3RvcmVfY29zdChBLCBCLCBDLCBEKTpcbiAgcmV0dXJuIChBICogQykgKyAoQiAqIEQpXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cblxuV3JpdGUgYSBQeXRob24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhbnN3ZXIuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### جواب کی تخلیق

اب، ہم اس میپنگ کا استعمال کر سکتے ہیں جو ہم نے پہلے تیار کیا تھا تاکہ متغیرات کو خود بخود بھر سکیں.

```text
نقشہ سازی: {A: 5، B: 15، C: 8}
```

الجبری:
```text
جواب = 5 * 15 - 5 * 8
```

Python function:
```python
def restaurant_cost(A=5, B=15, C=8):
  return A * (B - C)
```

ہم Python کا استعمال کرتے ہوئے دونوں کا اندازہ کر سکتے ہیں۔

Algebraic:
```python
>>> eval("5 * 15 - 5 * 8")
35
```

Python function:
```python
>>> restaurant_cost()
35
```

## مرحلہ 4: خود مستقل مزاجی

آخر میں، ہم %%Self-Consistency|self_consistency%% کا فائدہ اٹھائیں گے تاکہ مندرجہ بالا عمل کو متعدد بار دوبارہ چلایا جا سکے (~5)، پھر اکثریتی جواب لیں گے۔

## نتیجہ

MathPrompter MultiArith(@roy-roth-2015-solving) ڈیٹاسیٹ پر 92.5% درستگی کی اطلاع دیتا ہے۔ اس تکنیک کی کامیابی اس بات کی ایک بہترین مثال ہے کہ کس طرح **آپ** ایک پرامپٹ انجینئر کے طور پر ان طریقوں کو اپنا سکتے ہیں جو آپ نے اس کورس کے دوران سیکھے ہیں اور انہیں بڑے مسائل سے نمٹنے کے لیے یکجا کر سکتے ہیں۔