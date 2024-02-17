---
sidebar_position: 50
---
# 🟢 تکرار

ایک پرامپٹ کے اندر ایک ہی لفظ کو دہرانا، یا اسی طرح کے جملے ماڈل کا سبب بن سکتے ہیں۔
تیار کردہ تصویر (@oppenlaender2022taxonomy) میں اس لفظ پر زور دینے کے لیے۔ مثال کے طور پر، [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) نے ان آبشاروں کو DALLE سے بنایا:

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


آبشار کے قریب پہاڑ کی خوبصورت پینٹنگ۔

<div style={{textAlign: 'center'}}>
   <img className="img-docs" src={bad_water} style={{width: "750px"}}/>
</div>

آبشار کے ساتھ والے پہاڑ کی ایک بہت ہی بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت بہت خوبصورت پینٹنگ۔

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={good_water} style={{width: "750px"}} />
</div>

لفظ `بہت` پر زور نسل کے معیار کو بہتر کرنے لگتا ہے! تکرار کر سکتے ہیں
مضمون کی اصطلاحات پر زور دینے کے لیے بھی استعمال کیا جاتا ہے۔ مثال کے طور پر، اگر آپ تصویر بنانا چاہتے ہیں۔
پرامپٹ کا استعمال کرتے ہوئے ایک سیارہ جس میں ایلین ہے
اس بات کا زیادہ امکان بنائے گا کہ غیر ملکی نتیجہ کی تصویر میں ہیں۔ مندرجہ ذیل تصاویر Stable Diffusion کے ساتھ بنائی گئی ہیں۔

'غیر ملکیوں کے ساتھ ایک سیارہ'
<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={planet} style={{width: "250px"}} />
</div>

'ایک سیارہ جس میں aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens'

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={planet_aliens} style={{width: "250px"}} />
</div>


## نوٹس

یہ طریقہ کامل نہیں ہے، اور وزن (اگلا مضمون) کا استعمال اکثر ایک بہتر آپشن ہوتا ہے۔