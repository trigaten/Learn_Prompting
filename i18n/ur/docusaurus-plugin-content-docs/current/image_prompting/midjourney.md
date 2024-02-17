---
sidebar_position: 99
---
# 🟢 Midjourney

import ReactPlayer from 'react-player'


[Midjourney](https://www.midjourney.com) ایک AI امیج جنریٹر ہے جو Discord bot انٹرفیس کے ساتھ ساتھ ایک ویب ایپ کے ذریعے کام کرتا ہے (Midjourney کے API ورژن کی منصوبہ بندی کی گئی ہے)۔ Midjourney کے ساتھ امیجز بنانے کا عمل دوسرے AI امیج جنریٹرز کی طرح بنیادی اصولوں کی پیروی کرتا ہے، بشمول جنریشن کے عمل کی رہنمائی کے لیے پرامپٹ کا استعمال۔

دوسرے AI امیج جنریٹرز کے مقابلے مڈجرنی کی ایک منفرد خصوصیت اس کی بصری طور پر حیرت انگیز اور فنکارانہ طور پر بنائی گئی تصاویر بنانے کی صلاحیت ہے۔ یہ ماڈل کی خصوصی تربیت سے منسوب ہے، جو اسے مخصوص فنکارانہ پیرامیٹرز کے ساتھ اعلیٰ معیار کی تصاویر بنانے کے قابل بناتا ہے (اس کے بارے میں مزید "ایڈوانسڈ پرامپٹ" > "پیرامیٹر" میں)۔

آپ Midjourney Bot کے ساتھ [Learn Prompting Discord](https://learnprompting.org/discord) یا [آفیشل مڈجرنی ڈسکارڈ سرور](https://discord.gg/midjourney) میں تجربہ کر سکتے ہیں۔

import midjourney_astronaut from '@site/docs/assets/images_chapter/midjourney_astronaut.webp';
import midjourney_astronaut_params from '@site/docs/assets/images_chapter/midjourney_astronaut_params.webp';
import midjourney_astronaut_multi1 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi1.webp';
import midjourney_astronaut_multi2 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi2.webp';
import midjourney_astronaut_ip2 from '@site/docs/assets/images_chapter/midjourney_astronaut_ip2.webp';

import midjourney_astronaut_params_a12 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a12.webp';
import midjourney_astronaut_params_a169 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a169.webp';

import midjourney_astronaut_params_c20 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c20.webp';
import midjourney_astronaut_params_c80 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c80.webp';

import midjourney_astronaut_params_q05 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q05.webp';
import midjourney_astronaut_params_q2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q2.webp';

import midjourney_astronaut_params_s50 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s50.webp';
import midjourney_astronaut_params_s900 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s900.webp';

import midjourney_astronaut_params_sameseed from '@site/docs/assets/images_chapter/midjourney_astronaut_params_sameseed.webp';
import midjourney_astronaut_params_seed123 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_seed123.webp';

import midjourney_astronaut_params_tile from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tile.webp';
import midjourney_astronaut_params_tilegrid from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilegrid.webp';
import midjourney_astronaut_params_tilecomplete from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilecomplete.webp';

import midjourney_astronaut_params_v1 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v1.webp';
import midjourney_astronaut_params_v2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v2.webp';
import midjourney_astronaut_params_v3 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v3.webp';



# بنیادی استعمال

مڈجرنی کے ساتھ بنیادی پرامپٹ اناٹومی ہے `/امیجن پرامپٹ: [تصویر پرامپٹ] [--اختیاری پیرامیٹرس]`۔

مثال کے طور پر: `/ imagine prompt: astronaut on a horse`


<div style={{textAlign: 'center'}}>
   <img className="img-docs" src={midjourney_astronaut} style={{width: "350px"}}/>
</div>


پیرامیٹرز کے ساتھ مثال: `/ imagine prompt: astronaut on a گھوڑے --ar 3:2 --c 70 --q 2 --seed 1000`

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params} style={{width: "350px"}} />
</div>

اس بنیادی مثال میں درج ذیل پیرامیٹرز استعمال کیے گئے ہیں۔


`--ar 3:2` تصویر کے پہلو تناسب کو 3:2 پر سیٹ کرتا ہے۔

`--c 70` 70 کی افراتفری کی قدر کا اضافہ کرتا ہے تاکہ Midjourney کو مزید آزادانہ طور پر پرامپٹ کی تشریح کرنے کی اجازت دی جا سکے (افراتفری کی قدر کی حد: 0 - 100)

`--seed 100` ایک صوابدیدی بیج کی قیمت مقرر کرتا ہے جسے بعد میں تصویر کو دوبارہ پیش کرنے یا دوبارہ کام کرنے کے لیے استعمال کیا جا سکتا ہے۔


("ایڈوانسڈ پرامپٹس" > "پیرامیٹرز" میں مڈجرنی پیرامیٹرز کے بارے میں مزید جانیں)


# اعلی درجے کے اشارے
مڈجرنی میں ایڈوانسڈ پرامپٹس پیرامیٹرز اور خصوصی پرامپٹنگ تکنیکوں کا استعمال کرتے ہیں جو مڈجرنی الگورتھم سے تعاون یافتہ ہیں۔

## ملٹی پرامپٹس
Midjourney پہلے سے طے شدہ طور پر آپ کے پرامپٹ کی مکمل تشریح کرتا ہے۔ ڈبل بڑی آنت کا استعمال `::` مڈجرنی کو کہتا ہے کہ پرامپٹ کے ہر حصے کی الگ الگ تشریح کرے۔

مثال:

متن
/امیجن پرامپٹ: خلاباز اور گھوڑا
``
<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_multi1} style={{width: "350px"}} />
</div>

متن
/امیجن پرامپٹ: خلاباز:: اور گھوڑا
``
<div style={{textAlign: 'center'}}>
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_multi2} style={{width: "350px"}} />
</div>


## تصویری اشارے
Discord پر ایک تصویر اپ لوڈ کرکے اور اس کا URL ایک پرامپٹ میں استعمال کرکے، آپ Midjourney کو ہدایت دے سکتے ہیں کہ وہ اپنے نتائج کے مواد، انداز اور ساخت کو متاثر کرنے کے لیے اس تصویر کو استعمال کرے۔
مثال:
[خلائی مسافر (ماخذ: ویکیپیڈیا)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).webp)

متن
/امیجن پرامپٹ: [تصویری یو آر ایل]، تاثر پرست پینٹنگ
``
<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_ip2} style={{width: "350px"}} />
</div>

## پیرامیٹرز (v4)

مندرجہ ذیل پیرامیٹرز مڈجرنی کے تازہ ترین ماڈل (v4) سے تعاون یافتہ ہیں۔

### پہلو کا تناسب:

`--ar [ratio]` پہلے سے طے شدہ تناسب (1:1) کو ایک نئے تناسب میں تبدیل کرتا ہے (فی الحال زیادہ سے زیادہ تعاون یافتہ تناسب 2:1 ہے)

مثال: گھوڑے پر خلاباز --ar 16:9` اور `Astronaut on a گھوڑے --ar 1:2`

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_a169} style={{width: "350px"}} />
   &nbsp;
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_a12} style={{width: "175px"}} />
</div>


### افراتفری:

`--c [value]` ایک افراتفری کی قدر سیٹ کرتا ہے جو اس بات کا تعین کرتا ہے کہ مڈجرنی پرامپٹ میں کتنا فرق ہوتا ہے۔ افراتفری کی قدر جتنی زیادہ ہوگی نتائج اور مرکبات اتنے ہی غیر معمولی اور غیر متوقع ہوں گے (حد: 0 - 100)

مثال: 'ایک گھوڑے پر خلاباز --c20' اور 'خلائی مسافر گھوڑے پر --c 80'

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_c20} style={{width: "350px"}} />
   &nbsp;
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_c80} style={{width: "350px"}} />
</div>


### معیار:

`--q [value]` اس بات کی وضاحت کرتا ہے کہ تصویر بنانے میں کتنا وقت لگے گا، اس طرح معیار میں اضافہ ہوگا۔ پہلے سے طے شدہ ترتیب "1" ہے۔ اعلی اقدار آپ کے سبسکرپشن کے GPU منٹوں کا زیادہ استعمال کرتی ہیں (".25"، ".5"، "1" اور "2" کی قدروں کو قبول کرتی ہے)

مثال: 'خلائی مسافر گھوڑے پر --q .5' اور 'خلائی مسافر گھوڑے پر --q 2'

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_q05} style={{width: "350px"}} />
   &nbsp;
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_q2} style={{width: "350px"}} />
</div>


### بیج:

`--seed [value]` ایک سیڈ نمبر سیٹ کرتا ہے جو تصویر بنانے کے لیے نقطہ آغاز (شور فیلڈ) کی وضاحت کرتا ہے۔ ہر تصویر کے بیج تصادفی طور پر تیار کیے جاتے ہیں جب بیج پیرامیٹر کے ساتھ مخصوص نہیں کیا جاتا ہے۔ ایک ہی بیج نمبر اور پرامپٹ کا استعمال ایک جیسی تصاویر تیار کرے گا۔

مثال: گھوڑے پر خلاباز --seed 123`

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
   &nbsp;
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
</div>


### اسٹائلائز:

`--انداز [قدر]` یا `--s [قدر]` اثر انداز ہوتا ہے کہ مڈجرنی اپنے فنکارانہ الگورتھم کو کتنی مضبوطی سے لاگو کرتا ہے۔ کم قدریں ایسی تصاویر تیار کرتی ہیں جو پرامپٹ سے قریب سے ملتی ہیں، اعلیٰ قدریں بہت فنکارانہ تصاویر تخلیق کرتی ہیں جو پرامپٹ سے کم جڑی ہوتی ہیں۔ ڈیفالٹ 100 ہے، قدر کی حد 0 - 1000 ہے۔
(نوٹ: آپ `/settings` کمانڈ استعمال کر کے ڈیفالٹ اسٹائلائز ویلیو کو "🖌️ Style Med" (=`--s 100`) سے "🖌️ Style Low" (=`--s 50`) میں تبدیل کر سکتے ہیں، " 🖌️ اسٹائل ہائی"(=`--s 250`) یا "🖌️ اسٹائل ویری ہائی" (=`--s 750`))

مثال: 'ایک گھوڑے پر خلاباز --s 50' اور 'خلائی مسافر گھوڑے پر --s 900'

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_s50} style={{width: "350px"}} />
   &nbsp;
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_s900} style={{width: "350px"}} />
</div>


### ورژن:
`--v [ورژن نمبر]` یا `--ورژن [ورژن نمبر]` آپ کو پہلے کے مڈجرنی ماڈلز تک رسائی حاصل کرنے دیتے ہیں (1-3)

مثال: `--v 1`، `--v 2`، اور `--v 3`

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_v1} style={{width: "220px"}} />
   &nbsp;
    <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_v2} style={{width: "220px"}} />
    &nbsp;
       <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_v3} style={{width: "220px"}} />
</div>


## پیرامیٹرز (پچھلے ماڈلز)

### ایک ہی بیج

`--seed`: جب کہ `--seed` پیرامیٹر ابتدائی گرڈ میں تمام امیجز پر لاگو ایک ہی شور والی فیلڈ تیار کرتا ہے، وہی سیڈ پیرامیٹر ابتدائی گرڈ میں تمام امیجز پر ایک ہی شور کو لاگو کرتا ہے لہذا یہ بہت ملتی جلتی تصاویر تیار کرے گا۔ .

مثال: گھوڑے پر خلاباز --sameseed --v 3`

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_sameseed} style={{width: "350px"}} />
</div>


### ٹائل

`--ٹائل` ایسی تصاویر تیار کرتا ہے جنہیں کپڑوں، وال پیپرز اور ساخت کے لیے ہموار پیٹرن بنانے کے لیے دوبارہ ٹائل کے طور پر استعمال کیا جا سکتا ہے (صرف ماڈل 1 - 3 کے ساتھ کام کرتا ہے)

مثال: گھوڑے پر خلاباز --tile --v 3`

<div style={{textAlign: 'center'}}>
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_tilegrid} style={{width: "220px"}} />
   &nbsp;
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_tile} style={{width: "220px"}} />
   &nbsp;
   <LazyLoadImage className="img-docs" src={midjourney_astronaut_params_tilecomplete} style={{width: "220px"}} />
</div>


### ویڈیو

`--video` تصویری گرڈ کی ایک مختصر فلم تخلیق کرتا ہے۔ ✉️ ایموجی کے ساتھ ردعمل ظاہر کرنے سے Midjourney Bot آپ کو ویڈیو کے لنک کے ساتھ DM بھیج سکتا ہے۔

مثال: گھوڑے پر خلاباز --video --v 3`
<div style={{textAlign: 'center'}}>
 <video className="img-docs"  height="240" autoPlay muted controls>
  <source className="img-docs" src="/midjourney.mp4" type="video/mp4" />
 </video> 
</div>




## لنکس

[آفیشل مڈجرنی ڈاکومینٹیشن](https://docs.midjourney.com/)