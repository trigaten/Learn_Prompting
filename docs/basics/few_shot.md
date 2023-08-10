---
sidebar_position: 70
---

# 🟢 Few-Shot Prompting

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"100%",height:"200px",verticalAlign:"top"}}/>
</div>

:::takeaways
- Learn zero, one, and few-shot prompting
- Use few-shot prompting to structure your outputs
:::


Yet another prompting strategy is *few-shot prompting*(@logan-iv-etal-2022-cutting)(@lake2015human)[^a], which is basically just showing the model a few examples[^b] (also called "shots") of what you want it to do. Few shot prompts allows the AI to learn from these few examples(@zhao2021calibrate).

Consider the above example, in which we are attempting to classify customer feedback as positive or negative. We show the model three examples of positive/negative feedback, then we show it a new piece of feedback that has not been classified yet (`It doesnt work!:`). The model sees that the first three examples were classified as either `positive` or `negative`, and uses this information to classify the new example as `negative`.

## Structure

The way that we structure the examples is very important. Given that we have organized these three instances in an `input: classification` format, the model generates a single word following the final line, rather than outputting a complete sentence such as `this review is positive`.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Im5lZ2F0aXZlIiwicHJvbXB0IjoiR3JlYXQgcHJvZHVjdCwgMTAvMTA6IHBvc2l0aXZlXG5EaWRuJ3Qgd29yayB2ZXJ5IHdlbGw6IG5lZ2F0aXZlXG5TdXBlciBoZWxwZnVsLCB3b3J0aCBpdDogcG9zaXRpdmVcbkl0IGRvZXNudCB3b3JrIToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

### More on structure

A key use case for few-shot prompting is when you need the output to be **structured in a specific way** that is difficult to describe to the model. To understand this, let's consider a relevant example: say you are conducting an economic analysis and need to compile the names and occupations of well known citizens in towns nearby by analyzing local newspaper articles. You would like the model to read each article and output a list of names and occupations in `First Last [OCCUPATION]` format. In order to get the model to do this, you can show it a few examples. Look through the embed to see them.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IjEuIExhdXJhIFNpbW1vbnMgW0ZBUk1FUl1cbjIuIEtldmluIEFsdmFyZXogW0RBTkNFIElOU1RSVUNUT1JdXG4zLiBSYWNoZWwgTydDb25ub3IgW1ZPTFVOVEVFUl0iLCJwcm9tcHQiOiJJbiB0aGUgYnVzdGxpbmcgdG93biBvZiBFbWVyYWxkIEhpbGxzLCBhIGRpdmVyc2UgZ3JvdXAgb2YgaW5kaXZpZHVhbHMgbWFkZSB0aGVpciBtYXJrLiBTYXJhaCBNYXJ0aW5leiwgYSBkZWRpY2F0ZWQgbnVyc2UsIHdhcyBrbm93biBmb3IgaGVyIGNvbXBhc3Npb25hdGUgY2FyZSBhdCB0aGUgbG9jYWwgaG9zcGl0YWwuIERhdmlkIFRob21wc29uLCBhbiBpbm5vdmF0aXZlIHNvZnR3YXJlIGVuZ2luZWVyLCB3b3JrZWQgdGlyZWxlc3NseSBvbiBncm91bmRicmVha2luZyBwcm9qZWN0cyB0aGF0IHdvdWxkIHJldm9sdXRpb25pemUgdGhlIHRlY2ggaW5kdXN0cnkuIE1lYW53aGlsZSwgRW1pbHkgTmFrYW11cmEsIGEgdGFsZW50ZWQgYXJ0aXN0IGFuZCBtdXJhbGlzdCwgcGFpbnRlZCB2aWJyYW50IGFuZCB0aG91Z2h0LXByb3Zva2luZyBwaWVjZXMgdGhhdCBhZG9ybmVkIHRoZSB3YWxscyBvZiBidWlsZGluZ3MgYW5kIGdhbGxlcmllcyBhbGlrZS4gTGFzdGx5LCBNaWNoYWVsIE8nQ29ubmVsbCwgYW4gYW1iaXRpb3VzIGVudHJlcHJlbmV1ciwgb3BlbmVkIGEgdW5pcXVlLCBlY28tZnJpZW5kbHkgY2FmZSB0aGF0IHF1aWNrbHkgYmVjYW1lIHRoZSB0b3duJ3MgZmF2b3JpdGUgbWVldGluZyBzcG90LiBFYWNoIG9mIHRoZXNlIGluZGl2aWR1YWxzIGNvbnRyaWJ1dGVkIHRvIHRoZSByaWNoIHRhcGVzdHJ5IG9mIHRoZSBFbWVyYWxkIEhpbGxzIGNvbW11bml0eS5cbjEuIFNhcmFoIE1hcnRpbmV6IFtOVVJTRV1cbjIuIERhdmlkIFRob21wc29uIFtTT0ZUV0FSRSBFTkdJTkVFUl1cbjMuIEVtaWx5IE5ha2FtdXJhIFtBUlRJU1RdXG40LiBNaWNoYWVsIE8nQ29ubmVsbCBbRU5UUkVQUkVORVVSXVxuXG5BdCB0aGUgaGVhcnQgb2YgdGhlIHRvd24sIENoZWYgT2xpdmVyIEhhbWlsdG9uIGhhcyB0cmFuc2Zvcm1lZCB0aGUgY3VsaW5hcnkgc2NlbmUgd2l0aCBoaXMgZmFybS10by10YWJsZSByZXN0YXVyYW50LCBHcmVlbiBQbGF0ZS4gT2xpdmVyJ3MgZGVkaWNhdGlvbiB0byBzb3VyY2luZyBsb2NhbCwgb3JnYW5pYyBpbmdyZWRpZW50cyBoYXMgZWFybmVkIHRoZSBlc3RhYmxpc2htZW50IHJhdmUgcmV2aWV3cyBmcm9tIGZvb2QgY3JpdGljcyBhbmQgbG9jYWxzIGFsaWtlLlxuXG5KdXN0IGRvd24gdGhlIHN0cmVldCwgeW91J2xsIGZpbmQgdGhlIFJpdmVyc2lkZSBHcm92ZSBMaWJyYXJ5LCB3aGVyZSBoZWFkIGxpYnJhcmlhbiBFbGl6YWJldGggQ2hlbiBoYXMgd29ya2VkIGRpbGlnZW50bHkgdG8gY3JlYXRlIGEgd2VsY29taW5nIGFuZCBpbmNsdXNpdmUgc3BhY2UgZm9yIGFsbC4gSGVyIGVmZm9ydHMgdG8gZXhwYW5kIHRoZSBsaWJyYXJ5J3Mgb2ZmZXJpbmdzIGFuZCBlc3RhYmxpc2ggcmVhZGluZyBwcm9ncmFtcyBmb3IgY2hpbGRyZW4gaGF2ZSBoYWQgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHRvd24ncyBsaXRlcmFjeSByYXRlcy5cblxuQXMgeW91IHN0cm9sbCB0aHJvdWdoIHRoZSBjaGFybWluZyB0b3duIHNxdWFyZSwgeW91J2xsIGJlIGNhcHRpdmF0ZWQgYnkgdGhlIGJlYXV0aWZ1bCBtdXJhbHMgYWRvcm5pbmcgdGhlIHdhbGxzLiBUaGVzZSBtYXN0ZXJwaWVjZXMgYXJlIHRoZSB3b3JrIG9mIHJlbm93bmVkIGFydGlzdCwgSXNhYmVsbGEgVG9ycmVzLCB3aG9zZSB0YWxlbnQgZm9yIGNhcHR1cmluZyB0aGUgZXNzZW5jZSBvZiBSaXZlcnNpZGUgR3JvdmUgaGFzIGJyb3VnaHQgdGhlIHRvd24gdG8gbGlmZS5cblxuUml2ZXJzaWRlIEdyb3ZlJ3MgYXRobGV0aWMgYWNoaWV2ZW1lbnRzIGFyZSBhbHNvIHdvcnRoIG5vdGluZywgdGhhbmtzIHRvIGZvcm1lciBPbHltcGljIHN3aW1tZXItdHVybmVkLWNvYWNoLCBNYXJjdXMgSmVua2lucy4gTWFyY3VzIGhhcyB1c2VkIGhpcyBleHBlcmllbmNlIGFuZCBwYXNzaW9uIHRvIHRyYWluIHRoZSB0b3duJ3MgeW91dGgsIGxlYWRpbmcgdGhlIFJpdmVyc2lkZSBHcm92ZSBTd2ltIFRlYW0gdG8gc2V2ZXJhbCByZWdpb25hbCBjaGFtcGlvbnNoaXBzLlxuMS4gT2xpdmVyIEhhbWlsdG9uIFtDSEVGXVxuMi4gRWxpemFiZXRoIENoZW4gW0xJQlJBUklBTl1cbjMuIElzYWJlbGxhIFRvcnJlcyBbQVJUSVNUXVxuNC4gTWFyY3VzIEplbmtpbnMgW0NPQUNIXVxuXG5PYWsgVmFsbGV5LCBhIGNoYXJtaW5nIHNtYWxsIHRvd24sIGlzIGhvbWUgdG8gYSByZW1hcmthYmxlIHRyaW8gb2YgaW5kaXZpZHVhbHMgd2hvc2Ugc2tpbGxzIGFuZCBkZWRpY2F0aW9uIGhhdmUgbGVmdCBhIGxhc3RpbmcgaW1wYWN0IG9uIHRoZSBjb21tdW5pdHkuXG5cbkF0IHRoZSB0b3duJ3MgYnVzdGxpbmcgZmFybWVyJ3MgbWFya2V0LCB5b3UnbGwgZmluZCBMYXVyYSBTaW1tb25zLCBhIHBhc3Npb25hdGUgb3JnYW5pYyBmYXJtZXIga25vd24gZm9yIGhlciBkZWxpY2lvdXMgYW5kIHN1c3RhaW5hYmx5IGdyb3duIHByb2R1Y2UuIEhlciBkZWRpY2F0aW9uIHRvIHByb21vdGluZyBoZWFsdGh5IGVhdGluZyBoYXMgaW5zcGlyZWQgdGhlIHRvd24gdG8gZW1icmFjZSBhIG1vcmUgZWNvLWNvbnNjaW91cyBsaWZlc3R5bGUuXG5cbkluIE9hayBWYWxsZXkncyBjb21tdW5pdHkgY2VudGVyLCBLZXZpbiBBbHZhcmV6LCBhIHNraWxsZWQgZGFuY2UgaW5zdHJ1Y3RvciwgaGFzIGJyb3VnaHQgdGhlIGpveSBvZiBtb3ZlbWVudCB0byBwZW9wbGUgb2YgYWxsIGFnZXMuIEhpcyBpbmNsdXNpdmUgZGFuY2UgY2xhc3NlcyBoYXZlIGZvc3RlcmVkIGEgc2Vuc2Ugb2YgdW5pdHkgYW5kIHNlbGYtZXhwcmVzc2lvbiBhbW9uZyByZXNpZGVudHMsIGVucmljaGluZyB0aGUgbG9jYWwgYXJ0cyBzY2VuZS5cblxuTGFzdGx5LCBSYWNoZWwgTydDb25ub3IsIGEgdGlyZWxlc3Mgdm9sdW50ZWVyLCBkZWRpY2F0ZXMgaGVyIHRpbWUgdG8gdmFyaW91cyBjaGFyaXRhYmxlIGluaXRpYXRpdmVzLiBIZXIgY29tbWl0bWVudCB0byBpbXByb3ZpbmcgdGhlIGxpdmVzIG9mIG90aGVycyBoYXMgYmVlbiBpbnN0cnVtZW50YWwgaW4gY3JlYXRpbmcgYSBzdHJvbmcgc2Vuc2Ugb2YgY29tbXVuaXR5IHdpdGhpbiBPYWsgVmFsbGV5LlxuXG5UaHJvdWdoIHRoZWlyIHVuaXF1ZSB0YWxlbnRzIGFuZCB1bndhdmVyaW5nIGRlZGljYXRpb24sIExhdXJhLCBLZXZpbiwgYW5kIFJhY2hlbCBoYXZlIHdvdmVuIHRoZW1zZWx2ZXMgaW50byB0aGUgZmFicmljIG9mIE9hayBWYWxsZXksIGhlbHBpbmcgdG8gY3JlYXRlIGEgdmlicmFudCBhbmQgdGhyaXZpbmcgc21hbGwgdG93bi4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

By showing the model examples of the correct output format, it is able to produce the correct output for new articles. We could produce this same output by using an instruction prompt instead, but the few-shot prompt works much more consistently.

## Variants of Shot Prompting

The word "shot" is synonymous with "example". Aside from few-shot prompting, there are two other types of shot prompting that exist. The only difference between these variants is how many examples you show the model.

### Zero-Shot Prompting

Zero-shot prompting prompting is the most basic form of prompting. It simply shows the model a prompt without examples and asks it to generate a response. As such, all of the instruction and role prompts that you have seen so far are zero-shot prompts. An additional example of a zero-shot prompt is:

<AIInput>
Add 2+2:
</AIInput>

It is zero-shot since we have not shown the model any complete examples.

### One-Shot Prompting

One-shot prompting is when you show the model a single example. For example, the one-shot analogue of the zero-shot prompt `Add 2+2:` is:
  
<AIInput>
{`Add 3+3: 6
Add 2+2:`}
</AIInput>

We have shown the model only one complete example (`Add 3+3: 6`), so this is a one-shot prompt.

### Few-shot prompting

Few-shot prompting is when you show the model 2 or more examples. The few-shot analogue of the above two prompts is:

<AIInput>
{`Add 3+3: 6
Add 5+5: 10
Add 2+2:
`}
</AIInput>

This is a few-shot prompt since we have shown the model at least 2 complete examples (`Add 3+3: 6` and `Add 5+5: 10`). Usually, the more examples you show the model, the better the output will be, so few-shot prompting is preferred over zero-shot and one-shot prompting in most cases.

## Conclusion

In conclusion, few-shot prompting is an effective strategy that can guide the model to generate accurate and appropriately structured responses. By providing multiple examples, few-shot prompting allows the model to understand the desired output format and respond accordingly, making it a preferred method over zero-shot and one-shot prompting in most scenarios[^c].


[^a]: Few-shot prompting is also called in-context learning.
[^b]: The technical word for these examples is *exemplars*.
[^c]: These techniques are useful when you don't have examples.