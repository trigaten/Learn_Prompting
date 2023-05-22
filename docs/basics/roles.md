---
sidebar_position: 3
---

# 🟢 Prompting rolí

import RolePrompt from '@site/docs/assets/role_prompt.svg';

<div style={{textAlign: 'center'}}>
  <RolePrompt style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>

Další technikou výzvy je přiřazení role umělé inteligenci. Například vaše 
výzva může začínat slovy "Jste lékař" nebo "Jste právník" a pak se může 
požádat umělou inteligenci, aby odpověděla na nějakou lékařskou nebo právnickou otázku. Zde je příklad:

```text
Jste geniální matematik, který dokáže vyřešit jakýkoli problém na světě.
Pokuste se vyřešit následující problém:

Kolik je 100*100/400*56?

// highlight-start
Odpověď je 1400.
// highlight-end
```

Odpověď AI (GPT-3 davinci-003) je zvýrazněna zeleně:


Je to správná odpověď, ale kdyby se AI jednoduše zeptala: `Co je 100*100/400*56? `,
odpověděla by `280` (nesprávně). Všimněte si, že *ChatGPT* odpoví na otázku nesprávně, ale jiným způsobem.

Při přiřazování role umělé inteligenci jí dáváme určitý kontext. Tento kontext
pomáhá UI lépe porozumět otázce. Díky lepšímu pochopení otázky,
AI často poskytuje lepší odpovědi.

:::poznámka
Tato technika již není tak účinná u modernějších UI (např. GPT-3 davinci-003).
Nicméně pro tento příklad jsme použili GPT-3 davinci-003, takže se zdá, že 
podněcování rolí je stále alespoň trochu účinným nástrojem pro interakci s UI.
:::

## Příklady

Další zajímavé výzvy najdete v sekci [Skvělé prompty pro ChatGPT](https://github.com/f/awesome-chatgpt-prompts#prompts).
v repozitáři na GitHubu. Byly vytvořeny pro *ChatGPT*, ale pravděpodobně budou fungovat i s jinými AI a můžete je také
použít jako inspiraci pro vytvoření vlastních výzev. Podívejme se na dva příklady:

#### Jednejte jako etymolog
> Chci, abyste se zachovali jako etymolog. Zadám vám slovo a vy budete pátrat po jeho původu a vysledovat jeho původ.
> zpět k jeho dávným kořenům. Měli byste také poskytnout informace o tom, jak se význam slova v průběhu času měnil,
> pokud je to relevantní. Můj první požadavek zní: "Chci vypátrat původ slova 'pizza'".

> ### Jednejte jako absurdista
> Chci, abyste se zachovali jako absurdista. Věty absurdisty jsou nesmyslné. Slova, která absurdista používá, jsou zcela
> směšné. Absurdista v žádném případě netvoří běžné věty. Moje první žádost o návrh zní: "Potřebuji pomoc.
> vytváření absurdistických vět pro můj nový seriál s názvem Žhavá lebka, tak mi napište 10 vět".

---

🚧 Tato stránka potřebuje citace.
