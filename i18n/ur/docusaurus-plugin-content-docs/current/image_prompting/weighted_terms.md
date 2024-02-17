---
sidebar_position: 60
---

# 🟢 وزنی شرائط

کچھ ماڈلز (مستحکم ڈفیوژن، مڈجرنی، وغیرہ) آپ کو فوری طور پر شرائط کا وزن کرنے کی اجازت دیتے ہیں۔ یہ تیار کردہ تصویر میں کچھ الفاظ یا فقروں پر زور دینے کے لیے استعمال کیا جا سکتا ہے۔ یہ ہو سکتا ہے
تیار کردہ تصویر میں بعض الفاظ یا فقروں پر زور دینے کے لیے بھی استعمال کیا جاتا ہے۔ آئیے ایک سادہ مثال پر غور کریں:

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';


# مثال

یہاں کچھ پہاڑ ہیں جو Stable Diffusion سے پیدا ہوتے ہیں، فوری طور پر `پہاڑ` کے ساتھ۔

<div style={{textAlign: 'center'}}>
   <img src={mountains} style={{width: "350px"}}/>
</div>

تاہم، اگر ہم درختوں کے بغیر پہاڑ چاہتے ہیں، تو ہم فوری طور پر `پہاڑ | درخت:-10`۔ چونکہ ہم نے درخت کو بہت منفی انداز میں وزن کیا ہے، اس لیے وہ تیار کردہ تصویر میں ظاہر نہیں ہوتے ہیں۔

<div style={{textAlign: 'center'}}>
   <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

وزنی اصطلاحات کو مزید پیچیدہ اشارے میں ملایا جا سکتا ہے، جیسے
خلا میں ایک سیارہ:10 | سرخ، نیلے اور جامنی رنگ کے ساتھ پھٹنا:4 | غیر ملکی:-10 | 4K، اعلی معیار''

<div style={{textAlign: 'center'}}>
   <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## نوٹس

اس باب کے آخر میں کچھ وسائل میں وزن کے بارے میں مزید پڑھیں۔