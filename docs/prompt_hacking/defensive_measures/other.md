---
sidebar_position: 2000
---

# 🟢 Další přístupy 

Přestože předchozí přístupy mohou být velmi robustní, několik dalších přístupů, jako je použití jiného modelu, včetně fine tuning, soft prompting a omezení délky, mohou být také účinné.

## Použití jiného modelu

Modernější modely, jako je GPT-4, jsou odolnější vůči prompt injectingu. Kromě toho může být obtížné prompt injektovat modely, které nejsou vyladěné na instrukce. 

## Fine Tuning

Jemné ladění (fine tuning) modelu je velmi účinnou obranou(@goodside2021gpt), protože v době inference se kromě uživatelského vstupu nejedná o žádný prompt. Je to pravděpodobně preferovaná obrana v každé situaci s vysokou hodnotou, protože je tak robustní. Vyžaduje však velké množství dat a může být nákladná, proto se tato obrana často neimplementuje.

## Soft Prompting

Měkký prompting může být taký účinný, protože nemá jasně definovaný diskrétní prompt (jiný než vstup uživatele). Soft prompting vyžaduje fine tuning, takže má mnoho stejných výhod, ale bude pravděpodobně levnější. Měkký prompting však není tak dobře prozkoumán jako fine tuning, takže není jasné, jak je účinný.

## Omezení délky

A konečně, zahrnutí omezení délky uživatelského vstupu(@selvi2022exploring) nebo omezení délky konverzací chatbotů, jak to dělá Bing, může zabránit některým útokům, jako jsou obrovské výzvy ve stylu DAN, respektive virtualizační útoky.