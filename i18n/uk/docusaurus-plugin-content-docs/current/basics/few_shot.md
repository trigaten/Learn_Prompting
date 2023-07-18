---
sidebar_position: 4
---

# 🟢 Запит з кількома ілюстраціями

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"100%",height:"200px",verticalAlign:"top"}}/>
</div>

Ще одна стратегія введення запитів: *запит з кількома ілюстраціями*(@logan-iv-etal-2022-cutting)(@lake2015human), який, по суті, просто показує моделі кілька прикладів (так званих ілюстрацій) того, що Ви хочете, щоб вона робила.

Розглянемо наведений вище приклад, у якому ми намагаємося класифікувати відгуки клієнтів як позитивні чи негативні. Ми показуємо моделі 3 приклади позитивних чи негативних відгуків, а потім показуємо новий відгук, який ще не класифіковано (`Це не працює!:`). Модель бачить, що перші 3 приклади були класифіковані як `позитивні` або `негативні`, і використовує цю інформацію, щоб класифікувати новий приклад як `негативний`.

Те, як ми структуруємо приклади, дуже важливо. Оскільки ми структурували ці 3 приклади як `input: classification`, модель виводить одне слово після останнього рядка, вимовляти повне речення, наприклад `, цей відгук є позитивним`. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ItC90LXQs9Cw0YLQuNCy0L3QuNC5IiwicHJvbXB0Ijoi0KfRg9C00L7QstC40Lkg0L%2FRgNC%2B0LTRg9C60YIsIDEwLzEwOiDQv9C%2B0LfQuNGC0LjQstC90LjQuVxu0J3QtSDQtNGD0LbQtSDQtNC%2B0LHRgNC1INC%2F0YDQsNGG0Y7RlDog0L3QtdCz0LDRgtC40LLQvdC40LlcbtCU0YPQttC1INC60L7RgNC40YHQvdC%2BLCDQstC%2B0L3QviDRgtC%2B0LPQviDQstCw0YDRgtC1OiDQv9C%2B0LfQuNGC0LjQstC90LjQuVxu0KbQtSDQvdC1INC%2F0YDQsNGG0Y7RlCE6ICIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
Кожна пара введення-виведення називається *прикладом*.
:::

## Детальніше про структуру

Ключовий випадок використання запитів з кількома ілюстраціями – це коли вам потрібно, щоб результат був **структурований певним способом**, який складно описати моделі. Щоб зрозуміти це, розгляньмо відповідний приклад: скажімо, вам потрібно зібрати імена та професії відомих жителів сусідніх міст, проаналізувавши статті місцевих газет. Ви хочете, щоб модель читала кожну статтю та виводила список імен і професій у форматі `Перший Останній [OCCUPATION]`. Щоб змусити модель зробити це, ви можете показати їй кілька прикладів:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IjEuINCb0L7RgNCwINCh0ZbQvNC80L7QvdGBIFvQpNCV0KDQnNCV0KBdXG4yLiDQmtC10LLRltC9INCQ0LvRjNCy0LDRgNC10LcgW9CS0JjQmtCb0JDQlNCQ0Kcg0KLQkNCd0KbQhtCSXVxuMy4g0KDQtdC50YfQtdC7INCeJ9Ca0L7QvdC90L7RgCBb0JLQntCb0J7QndCi0JXQoF0iLCJwcm9tcHQiOiLQoyDQs9Cw0LvQsNGB0LvQuNCy0L7QvNGDINC80ZbRgdGC0LXRh9C60YMg0KHQvNCw0YDQsNCz0LTQvtCy0ZYg0J%2FQsNCz0L7RgNCx0LgsINCz0YDRg9C%2F0LAg0YDRltC30L3QvtC80LDQvdGW0YLQvdC40YUg0LvRjtC00LXQuSDQt9GA0L7QsdC40LvQsCDRgdCy0ZbQuSDQstC90LXRgdC%2B0Log0YMg0YDQvtC30LLQuNGC0L7QuiDQvNGW0YHRgtCwLiDQodCw0YDQsCDQnNCw0YDRgtGW0L3QtdGBLCDQstGW0LTQtNCw0L3QsCDRgdCy0L7Rl9C5INGB0L%2FRgNCw0LLRliDQvNC10LTRgdC10YHRgtGA0LAsINCx0YPQu9CwINCy0ZbQtNC%2B0LzQsCDRgdCy0L7RlNGOINC80LjQu9C%2B0YHQtdGA0LTQvdC%2B0Y4g0YLRg9GA0LHQvtGC0L7RjiDQsiDQvNGW0YHRhtC10LLRltC5INC70ZbQutCw0YDQvdGWLiDQlNC10LLRltC0INCi0L7QvNC%2F0YHQvtC9LCDRltC90L3QvtCy0LDRhtGW0LnQvdC40Lkg0ZbQvdC20LXQvdC10YAt0L%2FRgNC%2B0LPRgNCw0LzRltGB0YIsINC90LXQstGC0L7QvNC90L4g0L%2FRgNCw0YbRjtCy0LDQsiDQvdCw0LQg0L3QvtCy0LDRgtC%2B0YDRgdGM0LrQuNC80Lgg0L%2FRgNC%2B0ZTQutGC0LDQvNC4LCDRj9C60ZYg0LzQsNC70Lgg0LEg0LfQtNGW0LnRgdC90LjRgtC4INGA0LXQstC%2B0LvRjtGG0ZbRjiDQsiDRgtC10YXQvdC%2B0LvQvtCz0ZbRh9C90ZbQuSDQs9Cw0LvRg9C30ZYuINCi0LjQvCDRh9Cw0YHQvtC8INCV0LzRltC70ZYg0J3QsNC60LDQvNGD0YDQsCwg0YLQsNC70LDQvdC%2B0LLQuNGC0LAg0YXRg9C00L7QttC90LjRhtGPINGWINC80YPRgNCw0LvRltGB0YLQutCwLCDQvNCw0LvRjtCy0LDQu9CwINGP0YHQutGA0LDQstGWINGC0LAg0LfQsNGF0L7Qv9C70LjQstGWINGA0L7QsdC%2B0YLQuCwg0Y%2FQutGWINC%2F0YDQuNC60YDQsNGI0LDQu9C4INGB0YLRltC90Lgg0LHRg9C00ZbQstC10LvRjCDRliDQs9Cw0LvQtdGA0LXQuS4g0J3QsNGA0LXRiNGC0ZYsINCc0LDQudC60Lsg0J4n0JrQvtC90L3QtdC7LCDQsNC80LHRltGC0L3QuNC5INC%2F0ZbQtNC%2F0YDQuNGU0LzQtdGG0YwsINCy0ZbQtNC60YDQuNCyINGD0L3RltC60LDQu9GM0L3QtSwg0LXQutC%2B0LvQvtCz0ZbRh9C90L4g0YfQuNGB0YLQtSDQutCw0YTQtSwg0Y%2FQutC1INGI0LLQuNC00LrQviDRgdGC0LDQu9C%2BINGD0LvRjtCx0LvQtdC90LjQvCDQvNGW0YHRhtC10Lwg0LfRg9GB0YLRgNGW0YfQtdC5INGDINC80ZbRgdGC0ZYuINCa0L7QttC10L0g0Lcg0YbQuNGFINC70Y7QtNC10Lkg0LfRgNC%2B0LHQuNCyINGB0LLRltC5INCy0L3QtdGB0L7QuiDRgyDQsdCw0LPQsNGC0LUg0L%2FQvtC70L7RgtC90L4g0YHQv9GW0LvRjNC90L7RgtC4INCh0LzQsNGA0LDQs9C00L7QstC40YUg0J%2FQsNCz0L7RgNCx0ZbQsi5cbjEuINCh0LDRgNCwINCc0LDRgNGC0ZbQvdC10YEgW9Cc0JXQlNCh0JXQodCi0KDQkF1cbjIuINCU0LXQstGW0LQg0KLQvtC80L%2FRgdC%2B0L0gW9CG0J3QltCV0J3QldCgINCf0KDQntCT0KDQkNCc0J3QntCT0J4g0JfQkNCR0JXQl9Cf0JXQp9CV0J3QndCvXVxuMy4g0JXQvNGW0LvRliDQndCw0LrQsNC80YPRgNCwIFvQpdCj0JTQntCW0J3QmNCaXVxuNC4g0JzQsNC50LrQuyDQnifQmtC%2B0L3QvdC10LsgW9Cf0IbQlNCf0KDQmNCE0JzQldCm0KxdXG5cbtCo0LXRhC3QutGD0YXQsNGAINCe0LvRltCy0LXRgCDQk9Cw0LzRltC70YzRgtC%2B0L0g0LfQvNGW0L3QuNCyINC60YPQu9GW0L3QsNGA0L3RgyDRgdGG0LXQvdGDINC30LDQstC00Y%2FQutC4INGB0LLQvtGU0LzRgyDRgNC10YHRgtC%2B0YDQsNC90YMgR3JlZW4gUGxhdGUsINGJ0L4g0L%2FRgNCw0YbRjtGUINC30LAg0L%2FRgNC40L3RhtC40L%2FQvtC8IFwi0LLRltC0INGE0LXRgNC80Lgg0LTQviDRgdGC0L7Qu9GDXCIuINCS0ZbQtNC00LDQvdGW0YHRgtGMINCe0LvRltCy0LXRgNCwINC%2F0L7RiNGD0LrRgyDQvNGW0YHRhtC10LLQuNGFLCDQvtGA0LPQsNC90ZbRh9C90LjRhSDRltC90LPRgNC10LTRltGU0L3RgtGW0LIg0L%2FRgNC40L3QtdGB0LvQsCDQt9Cw0LrQu9Cw0LTRgyDQt9Cw0YXQvtC%2F0LvQtdC90ZYg0LLRltC00LPRg9C60Lgg0LLRltC0INC60YPQu9GW0L3QsNGA0L3QuNGFINC60YDQuNGC0LjQutGW0LIg0YLQsCDQvNGW0YHRhtC10LLQuNGFINC20LjRgtC10LvRltCyLlxuXG7QotGA0L7RhdC4INC90LjQttGH0LUg0L%2FQviDQstGD0LvQuNGG0ZYg0LLQuCDQt9C90LDQudC00LXRgtC1INCx0ZbQsdC70ZbQvtGC0LXQutGDINCg0ZbQstC10YDRgdCw0LnQtC3SkNGA0L7Rg9CyLCDQtNC1INCz0L7Qu9C%2B0LLQvdC40Lkg0LHRltCx0LvRltC%2B0YLQtdC60LDRgCDQldC70ZbQt9Cw0LHQtdGCINCn0LXQvSDRgdGC0LDRgNCw0L3QvdC%2BINC%2F0YDQsNGG0Y7RlCDQvdCw0LQg0YHRgtCy0L7RgNC10L3QvdGP0Lwg0LPQvtGB0YLQuNC90L3QvtCz0L4g0YLQsCDRltC90LrQu9GO0LfQuNCy0L3QvtCz0L4g0L%2FRgNC%2B0YHRgtC%2B0YDRgyDQtNC70Y8g0LLRgdGW0YUuINCH0Zcg0LfRg9GB0LjQu9C70Y8sINGB0L%2FRgNGP0LzQvtCy0LDQvdGWINC90LAg0YDQvtC30YjQuNGA0LXQvdC90Y8g0LHRltCx0LvRltC%2B0YLQtdGH0L3QuNGFINC%2F0YDQvtC%2F0L7Qt9C40YbRltC5INGC0LAg0YHRgtCy0L7RgNC10L3QvdGPINC%2F0YDQvtCz0YDQsNC8INGH0LjRgtCw0L3QvdGPINC00LvRjyDQtNGW0YLQtdC5LCDQvNCw0LvQuCDQt9C90LDRh9C90LjQuSDQstC%2F0LvQuNCyINC90LAg0YDRltCy0LXQvdGMINCz0YDQsNC80L7RgtC90L7RgdGC0ZYg0LIg0LzRltGB0YLRli5cblxu0J%2FRgNC%2B0LPRg9C70Y7RjtGH0LjRgdGMINGH0LDRgNGW0LLQvdC%2B0Y4g0LzRltGB0YzQutC%2B0Y4g0L%2FQu9C%2B0YnQtdGOLCDQstC4INCx0YPQtNC10YLQtSDQt9Cw0YfQsNGA0L7QstCw0L3RliDQv9GA0LXQutGA0LDRgdC90LjQvNC4INGE0YDQtdGB0LrQsNC80LgsINGJ0L4g0L%2FRgNC40LrRgNCw0YjQsNGO0YLRjCDRgdGC0ZbQvdC4LiDQptGWINGI0LXQtNC10LLRgNC4IC0g0YDQvtCx0L7RgtCwINCy0ZbQtNC%2B0LzQvtGXINGF0YPQtNC%2B0LbQvdC40YbRliDQhtC30LDQsdC10LvQu9C4INCi0L7RgNGA0LXRgSwg0YfQuNC5INGC0LDQu9Cw0L3RgiDQv9C10YDQtdC00LDRgtC4INGB0YPRgtGMINCg0ZbQstC10YDRgdCw0LnQtC3SkNGA0L7Rg9CyINC%2B0LbQuNCy0LjQsiDQvNGW0YHRgtC10YfQutC%2BLlxuXG7QktCw0YDRgtC%2BINGC0LDQutC%2B0LYg0LLRltC00LfQvdCw0YfQuNGC0Lgg0YHQv9C%2B0YDRgtC40LLQvdGWINC00L7RgdGP0LPQvdC10L3QvdGPINCg0ZbQstC10YDRgdCw0LnQtC3SkNGA0L7Rg9CyLCDQt9Cw0LLQtNGP0LrQuCDQutC%2B0LvQuNGI0L3RjNC%2B0LzRgyDQvtC70ZbQvNC%2F0ZbQudGB0YzQutC%2B0LzRgyDQv9C70LDQstGG0Y4sINGP0LrQuNC5INGB0YLQsNCyINGC0YDQtdC90LXRgNC%2B0LwgLSDQnNCw0YDQutGD0YHRgyDQlNC20LXQvdC60ZbQvdGB0YMuINCc0LDRgNC60YPRgSDQstC40LrQvtGA0LjRgdGC0LDQsiDRgdCy0ZbQuSDQtNC%2B0YHQstGW0LQg0ZYg0L%2FRgNC40YHRgtGA0LDRgdGC0Ywg0LTQu9GPINGC0YDQtdC90YPQstCw0L3QvdGPINC80L7Qu9C%2B0LTRliDQvNGW0YHRgtCwLCDQv9GA0LjQstGW0LLRiNC4INC60L7QvNCw0L3QtNGDINC%2F0LvQsNCy0YbRltCyINCg0ZbQstC10YDRgdCw0LnQtC3SkNGA0L7Rg9CyINC00L4g0LrRltC70YzQutC%2B0YUg0YDQtdCz0ZbQvtC90LDQu9GM0L3QuNGFINGH0LXQvNC%2F0ZbQvtC90LDRgtGW0LIuXG4xLiDQntC70ZbQstC10YAg0JPQsNC80ZbQu9GM0YLQvtC9IFvQqNCV0KQt0JrQo9Cl0JDQoF1cbjIuINCV0LvRltC30LDQsdC10YIg0KfQtdC9IFvQkdCG0JHQm9CG0J7QotCV0JrQkNCgXVxuMy4g0IbQt9Cw0LHQtdC70LvQsCDQotC%2B0YDRgNC10YEgW9Cl0KPQlNCe0JbQndCY0JpdXG40LiDQnNCw0YDQutGD0YEg0JTQttC10L3QutGW0L3RgSBb0KLQoNCV0J3QldCgXVxuXG7QntGD0Lot0JLQtdC70LvRliwg0YfQsNGA0ZbQstC90LUg0LzQsNC70LXQvdGM0LrQtSDQvNGW0YHRgtC10YfQutC%2BLCDRlCDQtNC%2B0LzRltCy0LrQvtGOINC00LvRjyDRh9GD0LTQvtCy0L7RlyDRgtGA0ZbQudGG0ZYg0LvRjtC00LXQuSwg0YfQuNGXINC90LDQstC40YfQutC4INGC0LAg0LLRltC00LTQsNC90ZbRgdGC0Ywg0YHQv9GA0LDQstGWINC30LDQu9C40YjQuNC70Lgg0YLRgNC40LLQsNC70LjQuSDQstC%2F0LvQuNCyINC90LAg0LPRgNC%2B0LzQsNC00YMuXG5cbtCd0LAg0LbQstCw0LLQvtC80YMg0LzRltGB0YzQutC%2B0LzRgyDRhNC10YDQvNC10YDRgdGM0LrQvtC80YMg0YDQuNC90LrRgyDQstC4INC30L3QsNC50LTQtdGC0LUg0JvQvtGA0YMg0KHRltC80LzQvtC90YEsINC%2F0YDQuNGB0YLRgNCw0YHQvdGDINC%2B0YDQs9Cw0L3RltGH0L3RgyDRhNC10YDQvNC10YDQutGDLCDQstGW0LTQvtC80YMg0YHQstC%2B0ZfQvNC4INGB0LzQsNGH0L3QuNC80Lgg0YLQsCDQtdC60L7Qu9C%2B0LPRltGH0L3QviDRh9C40YHRgtC40LzQuCDQv9GA0L7QtNGD0LrRgtCw0LzQuC4g0IfRlyDQstGW0LTQtNCw0L3RltGB0YLRjCDQv9C%2B0L%2FRg9C70Y%2FRgNC40LfQsNGG0ZbRlyDQt9C00L7RgNC%2B0LLQvtCz0L4g0YXQsNGA0YfRg9Cy0LDQvdC90Y8g0L3QsNC00LjRhdC90YPQu9CwINC80ZbRgdGC0L4g0L3QsCDQsdGW0LvRjNGIINC10LrQvtC70L7Qs9GW0YfQvdC40Lkg0YHQv9C%2B0YHRltCxINC20LjRgtGC0Y8uXG5cbtCjINCz0YDQvtC80LDQtNGB0YzQutC%2B0LzRgyDRhtC10L3RgtGA0ZYg0J7Rg9C6LdCS0LXQu9C70ZYg0JrQtdCy0ZbQvSDQkNC70YzQstCw0YDQtdC3LCDQtNC%2B0YHQstGW0LTRh9C10L3QuNC5INCy0LjQutC70LDQtNCw0Ycg0YLQsNC90YbRltCyLCDQtNCw0YDRg9GUINGA0LDQtNGW0YHRgtGMINGA0YPRhdGDINC70Y7QtNGP0Lwg0YDRltC30L3QvtCz0L4g0LLRltC60YMuINCZ0L7Qs9C%2BINGW0L3QutC70Y7Qt9C40LLQvdGWINGC0LDQvdGG0Y7QstCw0LvRjNC90ZYg0LfQsNC90Y%2FRgtGC0Y8g0YHQv9GA0LjRj9C70Lgg0LfQvNGW0YbQvdC10L3QvdGOINC%2F0L7Rh9GD0YLRgtGPINGU0LTQvdC%2B0YHRgtGWINGC0LAg0YHQsNC80L7QstC40YDQsNC20LXQvdC90Y8g0YHQtdGA0LXQtCDQvNC10YjQutCw0L3RhtGW0LIsINC30LHQsNCz0LDRh9GD0Y7Rh9C4INC80ZbRgdGG0LXQstGDINC80LjRgdGC0LXRhtGM0LrRgyDRgdGG0LXQvdGDLlxuXG7QndCw0YDQtdGI0YLRliwg0KDQtdC50YfQtdC7INCeJ9Ca0L7QvdC90L7RgCwg0L3QtdCy0YLQvtC80L3QsCDQstC%2B0LvQvtC90YLQtdGA0LrQsCwg0L%2FRgNC40YHQstGP0YfRg9GUINGB0LLRltC5INGH0LDRgSDRgNGW0LfQvdC%2B0LzQsNC90ZbRgtC90LjQvCDQsdC70LDQs9C%2B0LTRltC50L3QuNC8INGW0L3RltGG0ZbQsNGC0LjQstCw0LwuINCH0Zcg0L%2FRgNCw0LPQvdC10L3QvdGPINC%2F0L7QutGA0LDRidC40YLQuCDQttC40YLRgtGPINGW0L3RiNC40YUg0LvRjtC00LXQuSDQstGW0LTRltCz0YDQsNC70L4g0LLQsNC20LvQuNCy0YMg0YDQvtC70Ywg0YMg0YHRgtCy0L7RgNC10L3QvdGWINGB0LjQu9GM0L3QvtCz0L4g0L%2FQvtGH0YPRgtGC0Y8g0YHQv9GW0LvRjNC90L7RgtC4INCyINCe0YPQui3QktC10LvQu9GWLlxuXG7Ql9Cw0LLQtNGP0LrQuCDRgdCy0L7Rl9C8INGD0L3RltC60LDQu9GM0L3QuNC8INGC0LDQu9Cw0L3RgtCw0Lwg0ZYg0L3QtdC%2F0L7RhdC40YLQvdGW0Lkg0LLRltC00LTQsNC90L7RgdGC0ZYg0YHQv9GA0LDQstGWINCb0L7RgNCwLCDQmtC10LLRltC9INGWINCg0LXQudGH0LXQuyDQstC%2F0LvQtdC70LjRgdGPINCyINGC0LrQsNC90LjQvdGDINC20LjRgtGC0Y8g0J7Rg9C6LdCS0LXQu9C70ZYsINC00L7Qv9C%2B0LzQsNCz0LDRjtGH0Lgg0YHRgtCy0L7RgNC40YLQuCDRj9GB0LrRgNCw0LLQtSDRliDQv9GA0L7RhtCy0ZbRgtCw0Y7Rh9C1INC80LDQu9C10L3RjNC60LUg0LzRltGB0YLQtdGH0LrQvi4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Показуючи моделі приклади правильного формату виводу, вона може створити правильний вивід даних для нових статей.

:::note
Навіть попри те, що ви можете отримати той самий результат, використовуючи натомість запит з інструкціями, запит на основі кількох ілюстрацій зробить результат більш *узгодженим*.
:::

## Варіанти запитів з ілюстраціями

Слово «ілюстрація» є синонімом «прикладу». Окрім запитів з ілюстраціями, існують ще два типи запитів. Не надто цим переймайтеся! Єдина різниця між цими варіантами полягає в тому, скільки прикладів ви показуєте моделі.

Варіанти:
- запит без ілюстрацій: моделі не показано приклади;
- запит з однією ілюстрацією: моделі показано 1 приклад;
- запит із кількома ілюстраціями: більш як два приклади показано моделі.

### Запит без ілюстрацій

Запит без ілюстрацій є найпростішою формою запиту. Він просто показує моделі запит без прикладів і просить її згенерувати відповідь. Таким чином, усі інструкції та запити ролей, які ви бачили до цього часу, є запитами без ілюстрацій. Додатковий приклад запиту без ілюстрацій:

```text
Додай 2+2:
```

Це запит без ілюстрацій, оскільки ми не показали моделі повних прикладів.

### Запит з однією ілюстрацією

Запит з однією ілюстрацією — коли ви показуєте моделі один приклад. Наприклад, аналог запиту без ілюстрацій в вигляді запиту з однією ілюстрацією `Додайте 2+2:`:

```text
Додай 3+3: 6
Додай 2+2:
```

Ми показали моделі лише 1 повний приклад (`Додай 3+3: 6`), тож це запит з однією ілюстрацією.

### Запит з кількома ілюстраціями

Запит з кількома ілюстраціями — коли ви показуєте моделі 2 або більше прикладів. Усі запити вище цього розділу з переліком варіантів були запитами з кількома ілюстраціями. Аналог запиту з двома ілюстраціями наведених вище запитів з кількома ілюстраціями такий:

```text
Додай 3+3: 6
Додай 5+5: 10
Додай 2+2:
```

Це так, оскільки ми показали моделі принаймні 2 повних приклади (`Додай 3+3: 6` і `Додай 5+5: 10`). Як правило, що більше прикладів ви показуєте моделі, то кращим буде результат, тому в більшості випадків запит з кількома ілюстраціями є кращим, ніж запит без ілюстрацій або запит з однією ілюстрацією.

## Висновок

Запити з кількома ілюстраціями є потужною технікою, яка дозволяє змусити модель генерувати точні та правильно відформатовані результати!

 