---
sidebar_position: 60
---

# 🟢 Different Writing Styles

AIs like [ChatGPT](https://chat.openai.com/chat) are known for crafting essays and blog articles in a heartbeat. But often, the articles they produce are generic and dry. You need to do something extra to give the words some spirit or pizzazz. 
One of the fastest ways to do that is to specify a writing style or naming a famous author in the prompt.     
Say you want a paragraph on the importance of friendship. 
A generic prompt like, “Write me a paragraph on the importance of friendship,” will yield a generic response from ChatGPT.  

import friendship from '../assets/basic_applications/Generic_Friendship.png';
import friendship_informal from '../assets/basic_applications/Friendship_Informal.png';
import friendship_mark from '../assets/basic_applications/Friendship_Mark_Twain.png';
import friendship_chris from '../assets/basic_applications/Friendship_Chris_Rock.png';
import friendship_millennial from '../assets/basic_applications/Friendship_Millennial.png';


<div style={{textAlign: 'center'}}>
  <img src={friendship} style={{width: "750px"}} />
</div>

Blah. It’s so bland. 
Results change when you add specifications, like “**Please write in an informal, conversational style.**” ChatGPT comes up with something like this:

<div style={{textAlign: 'center'}}>
  <img src={friendship_informal} style={{width: "750px"}} />
</div>

That’s a little better. 

And if you feel a little fancy, you can ask ChatGPT to write in the style of one of the literary greats, like Mark Twain:

<div style={{textAlign: 'center'}}>
  <img src={friendship_mark} style={{width: "750px"}} />
</div>

The text now is starting to sing.
But it doesn’t have to be a famous author. You can use well-known individuals as well—like Chris Rock. 

<div style={{textAlign: 'center'}}>
  <img src={friendship_chris} style={{width: "750px"}} />
</div>

Or how about those “millennials”?

<div style={{textAlign: 'center'}}>
  <img src={friendship_millennial} style={{width: "750px"}} />
</div>

## Copy Your Writing Style


What if you want GPT-3 to write an email or blog in **your** style?

Simply showing it some previous content that you have written is enough. Here is an example, where we show GPT-3 some emails 'Dr. Rodriguez' has written in the past, and ask it to write a new email in the same style to a new patient, Mr. Inuez.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Email #1: Subject - Appointment Confirmation\n\nDear John,\n\nI wanted to confirm your appointment with me, Dr. Smith, on May 1st, 2023 at 2:30 pm at HealthFirst Clinic. I look forward to meeting with you and discussing your health concerns.\n\nPlease arrive 15 minutes early to complete any necessary paperwork and bring a list of any medications you are currently taking. If you need to reschedule or cancel your appointment, please let us know at least 24 hours in advance.\n\nIf you have any questions or concerns before your appointment, please don't hesitate to reach out to us.\n\nBest regards,\nDr. Rodriguez\n\nEmail #2: Subject - Test Results\n\nDear Jane,\n\nI am writing to let you know that your recent blood test results have come in. Your cholesterol levels are within normal range, but your vitamin D levels are low. I would recommend that you start taking vitamin D supplements to improve your levels.\n\nBased on these results, I would also recommend that you schedule a follow-up appointment in 3 months to retest your vitamin D levels. If you have any questions or concerns, please don't hesitate to contact us.\n\nThank you,\nDr. Rodriguez\n\nEmail #3: Subject - Follow-Up Appointment\n\nDear Mark,\n\nI wanted to follow up with you after our last appointment and see how you are feeling. If you are still experiencing any back pain or have any new concerns, please let me know so we can discuss them during your upcoming appointment.\n\nYour next appointment is scheduled for June 15th, 2023 at 10:00 am at City Health Clinic. Please let us know if you need to reschedule or cancel.\n\nTake care,\nDr. Rodriguez\n\nWrite an email in the style of the above emails to a Mr. Inuez, asking if October 5th, 2023 works for a checkup appointment:" initial-response="Subject - Checkup Appointment\n\nDear Mr. Inuez,\n\nI hope this message finds you well. I am writing to inquire if October 5th, 2023 works for a checkup appointment with me, Dr. Rodriguez.\n\nDuring the appointment, we will discuss your health concerns and any changes in your medical history. Please arrive 15 minutes early to complete any necessary paperwork and bring a list of any medications you are currently taking.\n\nIf October 5th does not work for you, please let me know and we can find a different date that works better for you.\n\nThank you,\nDr. Rodriguez" max-tokens="256" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
 

<br/>You can input any text you have written in the past (emails, reports, blogs, etc.), and GPT-3/ChatGPT will usually be able to copy your style. The more text you put, the better it can copy your style.