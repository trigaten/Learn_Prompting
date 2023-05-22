---
sidebar_position: 2000
---

# 🟢 Další přístupy 

Přestože předchozí přístupy mohou být velmi robustní, několik dalších přístupů, jako je použití jiného modelu, včetně jemného ladění, měkkých výzev a omezení délky, může být také účinných.

## Použití jiného modelu

Modernější modely, jako je GPT-4, jsou odolnější vůči promptnímu vstřikování. Kromě toho může být obtížné promptně injektovat modely, které nejsou vyladěné na instrukce. 

## Jemné ladění

Jemné ladění modelu je velmi účinnou obranou(@goodside2021gpt), protože v době inference se kromě uživatelského vstupu nejedná o žádný prompt. Je to pravděpodobně preferovaná obrana v každé situaci s vysokou hodnotou, protože je tak robustní. Vyžaduje však velké množství dat a může být nákladná, proto se tato obrana často neimplementuje.


## Soft Prompting

Měkká výzva může být také účinná, protože nemá jasně definovanou diskrétní výzvu (jinou než vstup uživatele). Soft prompting efektivně vyžaduje jemné doladění, takže má mnoho stejných výhod, ale bude pravděpodobně levnější. Měkký prompting však není tak dobře prozkoumán jako jemné ladění, takže není jasné, jak je účinný.

## Omezení délky

A konečně, zahrnutí omezení délky uživatelského vstupu(@selvi2022exploring) nebo omezení délky krytí chatbotů, jak to dělá Bing, může zabránit některým útokům, jako jsou obrovské výzvy ve stylu DAN, respektive virtualizační útoky.