---
sidebar_position: 60
---

# 🟢 Different Writing Styles

AIs like [ChatGPT](https://chat.openai.com/chat) are known for crafting essays and blog articles in a heartbeat. But often, the articles they produce are generic and dry. You need to do something extra to give the words some spirit or pizzazz. 
One of the fastest ways to do that is to specify a writing style or naming a famous author in the prompt.     
Say you want a paragraph on the importance of friendship. 
A generic prompt like, “Write me a paragraph on the importance of friendship,” will yield a generic response from ChatGPT.  

import friendship from '../assets/basic_applications/Generic_Friendship.webp';
import friendship_informal from '../assets/basic_applications/Friendship_Informal.webp';
import friendship_mark from '../assets/basic_applications/Friendship_Mark_Twain.webp';
import friendship_chris from '../assets/basic_applications/Friendship_Chris_Rock.webp';
import friendship_millennial from '../assets/basic_applications/Friendship_Millennial.webp';


<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship} style={{width: "750px"}} />
</div>

Blah. It’s so bland. 
Results change when you add specifications, like “**Please write in an informal, conversational style.**” ChatGPT comes up with something like this:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_informal} style={{width: "750px"}} />
</div>

That’s a little better. 

And if you feel a little fancy, you can ask ChatGPT to write in the style of one of the literary greats, like Mark Twain:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_mark} style={{width: "750px"}} />
</div>

The text now is starting to sing.
But it doesn’t have to be a famous author. You can use well-known individuals as well—like Chris Rock. 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_chris} style={{width: "750px"}} />
</div>

Or how about those “millennials”?

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_millennial} style={{width: "750px"}} />
</div>

## Copy Your Writing Style


What if you want GPT-3 to write an email or blog in **your** style?

Simply showing it some previous content that you have written is enough. Here is an example, where we show GPT-3 some emails 'Dr. Rodriguez' has written in the past, and ask it to write a new email in the same style to a new patient, Mr. Inuez.
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiU3ViamVjdCAtIENoZWNrdXAgQXBwb2ludG1lbnRcblxuRGVhciBNci4gSW51ZXosXG5cbkkgaG9wZSB0aGlzIG1lc3NhZ2UgZmluZHMgeW91IHdlbGwuIEkgYW0gd3JpdGluZyB0byBpbnF1aXJlIGlmIE9jdG9iZXIgNXRoLCAyMDIzIHdvcmtzIGZvciBhIGNoZWNrdXAgYXBwb2ludG1lbnQgd2l0aCBtZSwgRHIuIFJvZHJpZ3Vlei5cblxuRHVyaW5nIHRoZSBhcHBvaW50bWVudCwgd2Ugd2lsbCBkaXNjdXNzIHlvdXIgaGVhbHRoIGNvbmNlcm5zIGFuZCBhbnkgY2hhbmdlcyBpbiB5b3VyIG1lZGljYWwgaGlzdG9yeS4gUGxlYXNlIGFycml2ZSAxNSBtaW51dGVzIGVhcmx5IHRvIGNvbXBsZXRlIGFueSBuZWNlc3NhcnkgcGFwZXJ3b3JrIGFuZCBicmluZyBhIGxpc3Qgb2YgYW55IG1lZGljYXRpb25zIHlvdSBhcmUgY3VycmVudGx5IHRha2luZy5cblxuSWYgT2N0b2JlciA1dGggZG9lcyBub3Qgd29yayBmb3IgeW91LCBwbGVhc2UgbGV0IG1lIGtub3cgYW5kIHdlIGNhbiBmaW5kIGEgZGlmZmVyZW50IGRhdGUgdGhhdCB3b3JrcyBiZXR0ZXIgZm9yIHlvdS5cblxuVGhhbmsgeW91LFxuRHIuIFJvZHJpZ3VleiIsInByb21wdCI6IkVtYWlsICMxOiBTdWJqZWN0IC0gQXBwb2ludG1lbnQgQ29uZmlybWF0aW9uXG5cbkRlYXIgSm9obixcblxuSSB3YW50ZWQgdG8gY29uZmlybSB5b3VyIGFwcG9pbnRtZW50IHdpdGggbWUsIERyLiBTbWl0aCwgb24gTWF5IDFzdCwgMjAyMyBhdCAyOjMwIHBtIGF0IEhlYWx0aEZpcnN0IENsaW5pYy4gSSBsb29rIGZvcndhcmQgdG8gbWVldGluZyB3aXRoIHlvdSBhbmQgZGlzY3Vzc2luZyB5b3VyIGhlYWx0aCBjb25jZXJucy5cblxuUGxlYXNlIGFycml2ZSAxNSBtaW51dGVzIGVhcmx5IHRvIGNvbXBsZXRlIGFueSBuZWNlc3NhcnkgcGFwZXJ3b3JrIGFuZCBicmluZyBhIGxpc3Qgb2YgYW55IG1lZGljYXRpb25zIHlvdSBhcmUgY3VycmVudGx5IHRha2luZy4gSWYgeW91IG5lZWQgdG8gcmVzY2hlZHVsZSBvciBjYW5jZWwgeW91ciBhcHBvaW50bWVudCwgcGxlYXNlIGxldCB1cyBrbm93IGF0IGxlYXN0IDI0IGhvdXJzIGluIGFkdmFuY2UuXG5cbklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMgYmVmb3JlIHlvdXIgYXBwb2ludG1lbnQsIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byByZWFjaCBvdXQgdG8gdXMuXG5cbkJlc3QgcmVnYXJkcyxcbkRyLiBSb2RyaWd1ZXpcblxuRW1haWwgIzI6IFN1YmplY3QgLSBUZXN0IFJlc3VsdHNcblxuRGVhciBKYW5lLFxuXG5JIGFtIHdyaXRpbmcgdG8gbGV0IHlvdSBrbm93IHRoYXQgeW91ciByZWNlbnQgYmxvb2QgdGVzdCByZXN1bHRzIGhhdmUgY29tZSBpbi4gWW91ciBjaG9sZXN0ZXJvbCBsZXZlbHMgYXJlIHdpdGhpbiBub3JtYWwgcmFuZ2UsIGJ1dCB5b3VyIHZpdGFtaW4gRCBsZXZlbHMgYXJlIGxvdy4gSSB3b3VsZCByZWNvbW1lbmQgdGhhdCB5b3Ugc3RhcnQgdGFraW5nIHZpdGFtaW4gRCBzdXBwbGVtZW50cyB0byBpbXByb3ZlIHlvdXIgbGV2ZWxzLlxuXG5CYXNlZCBvbiB0aGVzZSByZXN1bHRzLCBJIHdvdWxkIGFsc28gcmVjb21tZW5kIHRoYXQgeW91IHNjaGVkdWxlIGEgZm9sbG93LXVwIGFwcG9pbnRtZW50IGluIDMgbW9udGhzIHRvIHJldGVzdCB5b3VyIHZpdGFtaW4gRCBsZXZlbHMuIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzLlxuXG5UaGFuayB5b3UsXG5Eci4gUm9kcmlndWV6XG5cbkVtYWlsICMzOiBTdWJqZWN0IC0gRm9sbG93LVVwIEFwcG9pbnRtZW50XG5cbkRlYXIgTWFyayxcblxuSSB3YW50ZWQgdG8gZm9sbG93IHVwIHdpdGggeW91IGFmdGVyIG91ciBsYXN0IGFwcG9pbnRtZW50IGFuZCBzZWUgaG93IHlvdSBhcmUgZmVlbGluZy4gSWYgeW91IGFyZSBzdGlsbCBleHBlcmllbmNpbmcgYW55IGJhY2sgcGFpbiBvciBoYXZlIGFueSBuZXcgY29uY2VybnMsIHBsZWFzZSBsZXQgbWUga25vdyBzbyB3ZSBjYW4gZGlzY3VzcyB0aGVtIGR1cmluZyB5b3VyIHVwY29taW5nIGFwcG9pbnRtZW50LlxuXG5Zb3VyIG5leHQgYXBwb2ludG1lbnQgaXMgc2NoZWR1bGVkIGZvciBKdW5lIDE1dGgsIDIwMjMgYXQgMTA6MDAgYW0gYXQgQ2l0eSBIZWFsdGggQ2xpbmljLiBQbGVhc2UgbGV0IHVzIGtub3cgaWYgeW91IG5lZWQgdG8gcmVzY2hlZHVsZSBvciBjYW5jZWwuXG5cblRha2UgY2FyZSxcbkRyLiBSb2RyaWd1ZXpcblxuV3JpdGUgYW4gZW1haWwgaW4gdGhlIHN0eWxlIG9mIHRoZSBhYm92ZSBlbWFpbHMgdG8gYSBNci4gSW51ZXosIGFza2luZyBpZiBPY3RvYmVyIDV0aCwgMjAyMyB3b3JrcyBmb3IgYSBjaGVja3VwIGFwcG9pbnRtZW50OiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>You can input any text you have written in the past (emails, reports, blogs, etc.), and GPT-3/ChatGPT will usually be able to copy your style. The more text you put, the better it can copy your style.