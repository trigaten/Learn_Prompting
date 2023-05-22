---
sidebar_position: 40
---

# 🟢 Chatbot + znalostní databáze

import ImageIntents from '@site/docs/assets/chatbot_from_kb_intents.png'
import ImageGPT3 from '@site/docs/assets/chatbot_from_kb_gpt3.png'
import ImageGPT3Organized from '@site/docs/assets/chatbot_from_kb_gpt3_organized.png'
import ImagePrompt from '@site/docs/assets/chatbot_from_kb_prompt.png'
import ImageLogin from '@site/docs/assets/chatbot_from_kb_login.png'

Nedávné pokroky v oblasti velkých jazykových modelů (LLM), jako jsou [GPT-3](https://arxiv.org/abs/2005.14165) a [ChatGPT](https://chat.openai.com/chat), vyvolaly v technologickém průmyslu velký rozruch. Tyto modely jsou neuvěřitelně výkonné pro generování obsahu, ale mají také některé nevýhody, jako je zkreslení(@nadeem-etal-2021-stereoset) a halucinace(@Ji_2022). Jednou z oblastí, ve které mohou být tyto LLM obzvláště užitečné, je vývoj chatbotů.

## Chatboty založené na záměrech

Tradiční chatboti jsou obvykle založeni na záměrech, což znamená, že jsou navrženi tak, aby reagovali na konkrétní záměry uživatelů. Každý záměr se skládá ze sady vzorových otázek a související odpovědi. Například záměr "Počasí" může obsahovat vzorové otázky typu "Jaké je dnes počasí?" nebo "Bude dnes pršet?" a odpověď typu "Dnes bude slunečno". Když uživatel položí otázku, chatbot ji přiřadí k záměru s nejpodobnějšími vzorovými otázkami a vrátí související odpověď.

<div style={{textAlign: 'left'}}>
  <img src={ImageIntents} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Jak funguje tradiční chatbot založený na záměrech. Obrázek od autora.</p>
</div>

Chatboty založené na záměru však mají vlastní řadu problémů. Jedním z problémů je, že vyžadují velké množství konkrétních záměrů, aby mohly poskytovat konkrétní odpovědi. Například uživatelské výroky jako "Nemohu se přihlásit", "Zapomněl jsem heslo" nebo "Chyba při přihlašování" mohou vyžadovat tři různé odpovědi, a tedy tři různé intence, přestože jsou si všechny docela podobné.

## Jak může GPT-3 pomoci

V tomto případě může být GPT-3 obzvláště užitečný. Namísto mnoha velmi specifických záměrů může být každý záměr širší a využívat dokument z vaší [znalostní báze](https://en.wikipedia.org/wiki/Knowledge_base). Databáze znalostí (KB) jsou informace uložené jako strukturovaná i nestrukturovaná data, připravená k použití pro analýzu nebo odvozování. Vaše KB se může skládat z řady dokumentů vysvětlujících, jak používat vaše produkty.

Každý záměr je tak spojen s dokumentem namísto seznamu otázek a konkrétní odpovědi, např. jeden záměr pro "problémy s přihlášením", jeden záměr pro "jak se přihlásit" atd. Když se uživatel zeptá na přihlášení, můžeme dokument "problémy s přihlášením" předat GPT-3 jako kontextovou informaci a vygenerovat konkrétní odpověď na uživatelovu otázku.


<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Jak by mohl chatbot využívající GPT-3 fungovat. Obrázek od autora.</p>
</div>

Tento přístup snižuje počet záměrů, které je třeba spravovat, a umožňuje lépe přizpůsobit odpovědi jednotlivým otázkám. Pokud navíc dokument spojený se záměrem popisuje různé procesy (např. proces pro "přihlášení na webové stránce" a jiný pro "přihlášení v mobilní aplikaci"), může GPT-3 před poskytnutím konečné odpovědi automaticky požádat uživatele o vysvětlení.

## Proč nemůžeme GPT-3 předat celý KB?

V současné době mají LLM jako GPT-3 maximální velikost dotazu asi 4k tokenů (pro model [`text-davinci-003`](https://beta.openai.com/docs/models/gpt-3)), což je sice hodně, ale nestačí to pro předání celé báze znalostí do jednoho dotazu. Modely LLM mají maximální velikost promptů z výpočetních důvodů, protože generování textu pomocí nich zahrnuje množství výpočtů, které se rychle zvyšuje s rostoucí velikostí promptů.

Budoucí LLM nemusí mít toto omezení a zároveň si zachovají schopnost generovat text. Prozatím je však třeba navrhnout řešení, které to obejde.

## Jak by mohl chatbot s GPT-3 fungovat

Potrubí chatbota by se tedy mohlo skládat ze dvou kroků:

1. Nejprve musíme vybrat vhodný záměr pro otázku uživatele, tj. musíme načíst správný dokument z naší znalostní báze.
2. Poté, jakmile máme správný dokument, můžeme využít GPT-3 k vygenerování vhodné odpovědi pro uživatele. Přitom budeme muset vytvořit dobrou výzvu.

První krok v podstatě řeší [sémantické vyhledávání](https://en.wikipedia.org/wiki/Semantic_search). Můžeme použít předtrénované modely z knihovny [`sentence-transformers`](https://www.sbert.net/examples/applications/semantic-search/README.html) a snadno přiřadit každému dokumentu skóre. Dokument s nejvyšším skóre bude použit pro vygenerování odpovědi chatbota.

<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3Organized} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Jak by mohl chatbot využívající GPT-3 fungovat. GPT-3 by mohl být použit k vygenerování vhodné odpovědi s využitím informací z dokumentů znalostní báze. Obrázek od autora.</p>
</div>

## Generování odpovědí pomocí GPT-3

Jakmile budeme mít k dispozici správný dokument, budeme muset vytvořit vhodnou výzvu, kterou použijeme s GPT-3 ke generování odpovědi. V následujících experimentech budeme vždy používat model `text-davinci-003` s teplotou `0,7`.

Pro vytvoření výzvy budeme experimentovat pomocí:

- [**Promptování na základě role**](https://learnprompting.org/docs/basics/roles): heuristická technika, která umělé inteligenci přiřazuje konkrétní roli.
- **Relevantní informace KB**, tj. dokument získaný v kroku sémantického vyhledávání.
- **Poslední zprávy vyměněné mezi uživatelem a chatbotem**. Ty jsou užitečné pro zprávy odeslané uživatelem, u nichž není specifikován celý kontext. Příklad si ukážeme později. Podívejte se na [tento příklad](https://learnprompting.org/docs/applied_prompting/build_chatgpt), jak spravovat konverzace pomocí GPT-3.
- A konečně **otázka uživatele**.

<div style={{textAlign: 'left'}}>
  <img src={ImagePrompt} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Informace použité k vytvoření našeho promptu/výzvy pro GPT-3. Obrázek od autora.</p>
</div>

Začněme naši výzvu pomocí techniky <span className="yellow-highlight">role-prompting</span>.

<pre>
    <span className="yellow-highlight">Jako pokročilý chatbot jménem Skippy máte za úkol především pomáhat uživatelům, jak nejlépe dovedete </span>.
</pre>

Pak předpokládejme, že krok sémantického vyhledávání extrahuje z naší znalostní báze následující dokument. Všechny dokumenty popisují, jak funguje produkt VideoGram, což je imaginární produkt podobný Instagramu, ale pouze pro videa.

<div style={{textAlign: 'left'}}>
  <img src={ImageLogin} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Dokument vysvětlující, jak funguje přihlašování do služby VideoGram. Obrázek od autora.</p>
</div>

Tímto způsobem můžeme přidat <span className="yellow-highlight">jeho obsah</span> uvnitř promptu.

<pre>
    Jako pokročilý chatbot jménem Skippy máte za úkol především pomáhat uživatelům, jak nejlépe dovedete.<br/><br/>

    <span className="yellow-highlight">
    START CONTEXT<br/>
    Přihlášení do služby VideoGram z webové stránky<br/>
    1. Otevřete webový prohlížeč a přejděte na webovou stránku VideoGram.<br/>
    2. Klikněte na tlačítko "Přihlásit se", které se nachází v pravém horním rohu stránky.<br/>
    3. Na přihlašovací stránce zadejte své uživatelské jméno a heslo VideoGram.<br/>
    4. Po zadání přihlašovacích údajů klikněte na tlačítko "Přihlásit se".<br/>
    5. Nyní byste měli být přihlášeni ke svému účtu VideoGram.<br/>
    <br/>
    Přihlášení do služby VideoGram z mobilní aplikace<br/>
    1. Otevřete aplikaci VideoGram na svém mobilním zařízení.<br/> 2. Přihlaste se do aplikace VideoGram.
    2. Na hlavní stránce klepněte na tlačítko "Přihlásit se", které se nachází v pravém dolním rohu.<br/>
    3. Na přihlašovací stránce zadejte své uživatelské jméno a heslo pro službu VideoGram.<br/>
    4. Po zadání přihlašovacích údajů klepněte na tlačítko "Přihlásit se".<br/>
    5. Nyní byste měli být přihlášeni ke svému účtu VideoGram.<br/>
    KONEC KONTEXTU<br/>
    </span>
</pre>

Nakonec musíme na konec výzvy přidat <span className="yellow-highlight">konverzaci a otázku uživatele</span>, jako v následujícím příkladu.

<pre>
    Jako pokročilý chatbot jménem Skippy máte za úkol především pomáhat uživatelům, jak nejlépe dovedete.<br/>
    <br/>
    ZAČÁTEK KONTEXTU<br/>
    Přihlášení do služby VideoGram z webové stránky<br/>
    1. Otevřete webový prohlížeč a přejděte na webovou stránku VideoGramu.<br/>
    2. Klikněte na tlačítko "Přihlásit se", které se nachází v pravém horním rohu stránky.<br/>
    3. Na přihlašovací stránce zadejte své uživatelské jméno a heslo VideoGram.<br/>
    4. Po zadání přihlašovacích údajů klikněte na tlačítko "Přihlásit se".<br/>
    5. Nyní byste měli být přihlášeni ke svému účtu VideoGram.<br/>
    <br/>
    Přihlášení do služby VideoGram z mobilní aplikace<br/>
    1. Otevřete aplikaci VideoGram na svém mobilním zařízení.<br/> 2. Přihlaste se do aplikace VideoGram.
    2. Na hlavní stránce klepněte na tlačítko "Přihlásit se", které se nachází v pravém dolním rohu.<br/>
    3. Na přihlašovací stránce zadejte své uživatelské jméno a heslo pro službu VideoGram.<br/>
    4. Po zadání přihlašovacích údajů klepněte na tlačítko "Přihlásit se".<br/>
    5. Nyní byste měli být přihlášeni ke svému účtu VideoGram.<br/>
    KONEC KONTEXTU<br/>
    <br/>
    <span className="yellow-highlight">SKIPPY: Dobrý den, já jsem Skippy! Jak vám mohu pomoci?<br/>
    UŽIVATEL: Nemohu najít tlačítko pro přihlášení.<br/>
    SKIPPY:</span><br/>
</pre>

Po předání této výzvy GPT-3 jsem dostal následující vygenerovanou odpověď.

<pre>
    <span className="bluegreen-highlight">Žádný problém! Na webové stránce se tlačítko pro přihlášení nachází v pravém horním rohu stránky. V mobilní aplikaci se tlačítko pro přihlášení nachází v pravém dolním rohu. Pokud budete potřebovat další pomoc, dejte mi vědět!</span>
</pre>

Všimněte si, že informace ve vygenerované odpovědi pocházejí z dokumentu znalostní báze.

## Rozklíčování otázek pomocí GPT-3

Zkusme to s vágnějším uživatelským výrokem, například <span className="yellow-highlight">"nemohu se přihlásit"</span>. Zde je kompletní dotaz.

<pre>
    Jako pokročilý chatbot jménem Skippy je vaším hlavním cílem pomáhat uživatelům, jak nejlépe dovedete.<br/>
    <br/>
    START KONTEXTU<br/>
    Přihlaste se do služby VideoGram z webové stránky<br/>
    1. Otevřete webový prohlížeč a přejděte na webovou stránku VideoGramu.<br/>
    2. Klikněte na tlačítko "Přihlásit se", které se nachází v pravém horním rohu stránky.<br/>
    3. Na přihlašovací stránce zadejte své uživatelské jméno a heslo VideoGram.<br/>
    4. Po zadání přihlašovacích údajů klikněte na tlačítko "Přihlásit se".<br/>
    5. Nyní byste měli být přihlášeni ke svému účtu VideoGram.<br/>
    <br/>
    Přihlášení do služby VideoGram z mobilní aplikace<br/>
    1. Otevřete aplikaci VideoGram na svém mobilním zařízení.<br/> 2. Přihlaste se do aplikace VideoGram.
    2. Na hlavní stránce klepněte na tlačítko "Přihlásit se", které se nachází v pravém dolním rohu.<br/>
    3. Na přihlašovací stránce zadejte své uživatelské jméno a heslo pro službu VideoGram.<br/>
    4. Po zadání přihlašovacích údajů klepněte na tlačítko "Přihlásit se".<br/>
    5. Nyní byste měli být přihlášeni ke svému účtu VideoGram.<br/>
    KONEC KONTEXTU<br/>
    <br/>
    SKIPPY: Dobrý den, já jsem Skippy! Jak vám mohu pomoci?<br/>
    UŽIVATEL: <span className="yellow-highlight">Nemůžu se přihlásit</span><br/>
    SKIPPY:<br/>
</pre>

GPT-3 odpovídá a snaží se lépe pochopit, v čem je problém uživatele.

<pre>
    <span className="bluegreen-highlight">To mě mrzí. Můžete mi říct, zda se snažíte přihlásit přes webové stránky VideoGramu nebo mobilní aplikaci?</span>
</pre>

Dále uvádíme, jak probíhá kompletní konverzace. Celá výzva je pro lepší přehlednost skrytá.

<pre>
    UŽIVATEL: Nelze se přihlásit<br/>
    SKIPPY: To mě mrzí. Můžete mi říct, zda se snažíte přihlásit prostřednictvím webové stránky VideoGramu nebo mobilní aplikace?<br/>
    UŽIVATEL: Mobilní aplikace<br/>
    <span className="bluegreen-highlight">SKIPPY: Dobře, žádný problém. Chcete-li se přihlásit prostřednictvím mobilní aplikace, otevřete na svém mobilním zařízení aplikaci VideoGram. Na hlavní stránce klepněte na tlačítko "Přihlásit", které se nachází v pravém dolním rohu. Na přihlašovací stránce zadejte své uživatelské jméno a heslo VideoGram. Po zadání přihlašovacích údajů klepněte na tlačítko "Přihlásit". Nyní byste měli být přihlášeni ke svému účtu VideoGram. Pokud budete potřebovat další pomoc, dejte mi prosím vědět.</span>
</pre>

GPT-3 dokáže spravovat disambiguaci za předpokladu, že má k dispozici správné kontextové informace.

## Problémy s generováním odpovědí pomocí GPT-3

Předchozí příklady fungovaly dobře. Existuje však několik způsobů, jak by tento chatbot mohl selhat.

Pokud bychom se GPT-3 zeptali "Je mobilní aplikace zdarma?" a jako kontext předali přihlašovací dokument, často bychom dostali odpověď typu "Ano, mobilní aplikace VideoGram je ke stažení a používání zdarma", i když taková informace není obsažena v kontextové informaci. Generování nepravdivých informací je pro chatboty zákaznického servisu velmi špatné!

GPT-3 zřídkakdy generuje falešné informace, pokud lze odpověď na otázku uživatele nalézt v kontextu. Vzhledem k tomu, že uživatelské dotazy jsou často krátké a nejednoznačné texty, nemůžeme se spolehnout na to, že krok sémantického vyhledávání vždy získá správný dokument, a tak jsme vždy zranitelní vůči generování falešných informací.

## Závěr

GPT-3 je velmi užitečný pro vytváření konverzačních chatbotů a dokáže odpovídat na řadu konkrétních otázek na základě kontextových informací vložených do výzvy. Je však obtížné přimět model, aby vytvářel odpovědi využívající pouze informace v kontextu, protože model má tendenci halucinovat (tj. generovat nové informace, potenciálně nepravdivé). Generování nepravdivých informací je problém různé závažnosti v závislosti na případu použití.

Napsal [Fabio Chiusano](https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/).
