---
sidebar_position: 60
---

# 🟢 Různé styly psaní

Umělé inteligence jako [ChatGPT](https://chat.openai.com/chat) jsou známé tím, že eseje a články na blogy píší v mžiku. Často jsou však články, které vytvářejí, obecné a suché. Je třeba udělat něco navíc, abyste slovům dodali ducha nebo šmrnc. 
Jedním z nejrychlejších způsobů, jak toho docílit, je uvést v zadání styl psaní nebo jmenovat slavného autora.     
Řekněme, že chcete odstavec o důležitosti přátelství. 
generický prompt typu "Napište mi odstavec o důležitosti přátelství" přinese generickoucnou odpověď od ChatGPT.  

import friendship from '../assets/basic_applications/Generic_Friendship.png';
import friendship_informal from '../assets/basic_applications/Friendship_Informal.png';
import friendship_mark from '../assets/basic_applications/Friendship_Mark_Twain.png';
import friendship_chris from '../assets/basic_applications/Friendship_Chris_Rock.png';
import friendship_millennial from '../assets/basic_applications/Friendship_Millennial.png';


<div style={{textAlign: 'center'}}>
  <img src={friendship} style={{width: "750px"}} />
</div>

No. Je to takové nijaké. 
Výsledky se změní, když přidáte specifikace, například "**Pište prosím neformálním, konverzačním stylem**.". ChatGPT přijde s něčím takovým:

<div style={{textAlign: 'center'}}>
  <img src={friendship_informal} style={{width: "750px"}} />
</div>

To už je o něco lepší. 

A pokud se cítíte trochu fantazie, můžete požádat ChatGPT, aby psal ve stylu některého z literárních velikánů, například Marka Twaina:

<div style={{textAlign: 'center'}}>
  <img src={friendship_mark} style={{width: "750px"}} />
</div>

Text nyní začíná zpívat.
Nemusí to však být zrovna slavný autor. Můžete použít i známé osobnosti - třeba Chrise Rocka. 

<div style={{textAlign: 'center'}}>
  <img src={friendship_chris} style={{width: "750px"}} />
</div>

Nebo jak je to s těmi "mileniály"?

<div style={{textAlign: 'center'}}>
  <img src={friendship_millennial} style={{width: "750px"}} />
</div>

## Imitujte svůj styl psaní


Co když chcete, aby GPT-3 napsal e-mail nebo blog ve **vašem** stylu?

Stačí mu ukázat nějaký předchozí obsah, který jste napsali. Zde je příklad, kdy GPT-3 ukážeme několik e-mailů, které "Dr. Rodriguez" napsal v minulosti, a požádáme ho, aby napsal nový e-mail ve stejném stylu novému pacientovi, panu Inuezovi.
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiU3ViamVjdCAtIENoZWNrdXAgQXBwb2ludG1lbnRcblxuRGVhciBNci4gSW51ZXosXG5cbkkgaG9wZSB0aGlzIG1lc3NhZ2UgZmluZHMgeW91IHdlbGwuIEkgYW0gd3JpdGluZyB0byBpbnF1aXJlIGlmIE9jdG9iZXIgNXRoLCAyMDIzIHdvcmtzIGZvciBhIGNoZWNrdXAgYXBwb2ludG1lbnQgd2l0aCBtZSwgRHIuIFJvZHJpZ3Vlei5cblxuRHVyaW5nIHRoZSBhcHBvaW50bWVudCwgd2Ugd2lsbCBkaXNjdXNzIHlvdXIgaGVhbHRoIGNvbmNlcm5zIGFuZCBhbnkgY2hhbmdlcyBpbiB5b3VyIG1lZGljYWwgaGlzdG9yeS4gUGxlYXNlIGFycml2ZSAxNSBtaW51dGVzIGVhcmx5IHRvIGNvbXBsZXRlIGFueSBuZWNlc3NhcnkgcGFwZXJ3b3JrIGFuZCBicmluZyBhIGxpc3Qgb2YgYW55IG1lZGljYXRpb25zIHlvdSBhcmUgY3VycmVudGx5IHRha2luZy5cblxuSWYgT2N0b2JlciA1dGggZG9lcyBub3Qgd29yayBmb3IgeW91LCBwbGVhc2UgbGV0IG1lIGtub3cgYW5kIHdlIGNhbiBmaW5kIGEgZGlmZmVyZW50IGRhdGUgdGhhdCB3b3JrcyBiZXR0ZXIgZm9yIHlvdS5cblxuVGhhbmsgeW91LFxuRHIuIFJvZHJpZ3VleiIsInByb21wdCI6IkVtYWlsICMxOiBTdWJqZWN0IC0gQXBwb2ludG1lbnQgQ29uZmlybWF0aW9uXG5cbkRlYXIgSm9obixcblxuSSB3YW50ZWQgdG8gY29uZmlybSB5b3VyIGFwcG9pbnRtZW50IHdpdGggbWUsIERyLiBTbWl0aCwgb24gTWF5IDFzdCwgMjAyMyBhdCAyOjMwIHBtIGF0IEhlYWx0aEZpcnN0IENsaW5pYy4gSSBsb29rIGZvcndhcmQgdG8gbWVldGluZyB3aXRoIHlvdSBhbmQgZGlzY3Vzc2luZyB5b3VyIGhlYWx0aCBjb25jZXJucy5cblxuUGxlYXNlIGFycml2ZSAxNSBtaW51dGVzIGVhcmx5IHRvIGNvbXBsZXRlIGFueSBuZWNlc3NhcnkgcGFwZXJ3b3JrIGFuZCBicmluZyBhIGxpc3Qgb2YgYW55IG1lZGljYXRpb25zIHlvdSBhcmUgY3VycmVudGx5IHRha2luZy4gSWYgeW91IG5lZWQgdG8gcmVzY2hlZHVsZSBvciBjYW5jZWwgeW91ciBhcHBvaW50bWVudCwgcGxlYXNlIGxldCB1cyBrbm93IGF0IGxlYXN0IDI0IGhvdXJzIGluIGFkdmFuY2UuXG5cbklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMgYmVmb3JlIHlvdXIgYXBwb2ludG1lbnQsIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byByZWFjaCBvdXQgdG8gdXMuXG5cbkJlc3QgcmVnYXJkcyxcbkRyLiBSb2RyaWd1ZXpcblxuRW1haWwgIzI6IFN1YmplY3QgLSBUZXN0IFJlc3VsdHNcblxuRGVhciBKYW5lLFxuXG5JIGFtIHdyaXRpbmcgdG8gbGV0IHlvdSBrbm93IHRoYXQgeW91ciByZWNlbnQgYmxvb2QgdGVzdCByZXN1bHRzIGhhdmUgY29tZSBpbi4gWW91ciBjaG9sZXN0ZXJvbCBsZXZlbHMgYXJlIHdpdGhpbiBub3JtYWwgcmFuZ2UsIGJ1dCB5b3VyIHZpdGFtaW4gRCBsZXZlbHMgYXJlIGxvdy4gSSB3b3VsZCByZWNvbW1lbmQgdGhhdCB5b3Ugc3RhcnQgdGFraW5nIHZpdGFtaW4gRCBzdXBwbGVtZW50cyB0byBpbXByb3ZlIHlvdXIgbGV2ZWxzLlxuXG5CYXNlZCBvbiB0aGVzZSByZXN1bHRzLCBJIHdvdWxkIGFsc28gcmVjb21tZW5kIHRoYXQgeW91IHNjaGVkdWxlIGEgZm9sbG93LXVwIGFwcG9pbnRtZW50IGluIDMgbW9udGhzIHRvIHJldGVzdCB5b3VyIHZpdGFtaW4gRCBsZXZlbHMuIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzLlxuXG5UaGFuayB5b3UsXG5Eci4gUm9kcmlndWV6XG5cbkVtYWlsICMzOiBTdWJqZWN0IC0gRm9sbG93LVVwIEFwcG9pbnRtZW50XG5cbkRlYXIgTWFyayxcblxuSSB3YW50ZWQgdG8gZm9sbG93IHVwIHdpdGggeW91IGFmdGVyIG91ciBsYXN0IGFwcG9pbnRtZW50IGFuZCBzZWUgaG93IHlvdSBhcmUgZmVlbGluZy4gSWYgeW91IGFyZSBzdGlsbCBleHBlcmllbmNpbmcgYW55IGJhY2sgcGFpbiBvciBoYXZlIGFueSBuZXcgY29uY2VybnMsIHBsZWFzZSBsZXQgbWUga25vdyBzbyB3ZSBjYW4gZGlzY3VzcyB0aGVtIGR1cmluZyB5b3VyIHVwY29taW5nIGFwcG9pbnRtZW50LlxuXG5Zb3VyIG5leHQgYXBwb2ludG1lbnQgaXMgc2NoZWR1bGVkIGZvciBKdW5lIDE1dGgsIDIwMjMgYXQgMTA6MDAgYW0gYXQgQ2l0eSBIZWFsdGggQ2xpbmljLiBQbGVhc2UgbGV0IHVzIGtub3cgaWYgeW91IG5lZWQgdG8gcmVzY2hlZHVsZSBvciBjYW5jZWwuXG5cblRha2UgY2FyZSxcbkRyLiBSb2RyaWd1ZXpcblxuV3JpdGUgYW4gZW1haWwgaW4gdGhlIHN0eWxlIG9mIHRoZSBhYm92ZSBlbWFpbHMgdG8gYSBNci4gSW51ZXosIGFza2luZyBpZiBPY3RvYmVyIDV0aCwgMjAyMyB3b3JrcyBmb3IgYSBjaGVja3VwIGFwcG9pbnRtZW50OiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>Můžete zadat jakýkoli text, který jste v minulosti napsali (e-maily, zprávy, blogy atd.), a GPT-3/ChatGPT obvykle dokáže zkopírovat váš styl. Čím více textu vložíte, tím lépe dokáže váš styl zkopírovat.