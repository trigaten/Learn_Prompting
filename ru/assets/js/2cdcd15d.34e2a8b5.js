"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7,locale:"en-us"},a="\ud83d\udfe1 Dealing With Long Form Content",s={unversionedId:"intermediate/long_form_content",id:"intermediate/long_form_content",title:"\ud83d\udfe1 Dealing With Long Form Content",description:"Dealing with long form content can be difficult, as models have limited context length. Let's learn some strategies for effectively handling long form content.",source:"@site/docs/intermediate/long_form_content.md",sourceDirName:"intermediate",slug:"/intermediate/long_form_content",permalink:"/ru/docs/intermediate/long_form_content",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/long_form_content.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,locale:"en-us"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Least to Most Prompting",permalink:"/ru/docs/intermediate/least_to_most"},next:{title:"\ud83d\udfe2 What's in a Prompt?",permalink:"/ru/docs/intermediate/whats_in_a_prompt"}},l={},c=[{value:"1. Preprocessing the Text",id:"1-preprocessing-the-text",level:2},{value:"2. Chunking and Iterative Approach",id:"2-chunking-and-iterative-approach",level:2},{value:"4. Post-processing and Refining Responses",id:"4-post-processing-and-refining-responses",level:2},{value:"5. Utilizing AI assistants with longer context support",id:"5-utilizing-ai-assistants-with-longer-context-support",level:2},{value:"6. Code libraries",id:"6-code-libraries",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-dealing-with-long-form-content"},"\ud83d\udfe1 Dealing With Long Form Content"),(0,o.kt)("p",null,"Dealing with long form content can be difficult, as models have limited context length. Let's learn some strategies for effectively handling long form content."),(0,o.kt)("h2",{id:"1-preprocessing-the-text"},"1. Preprocessing the Text"),(0,o.kt)("p",null,"Before passing the long form content to a language model, it is helpful to preprocess the text to reduce its length and complexity. Some strategies for preprocessing include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removing unnecessary sections or paragraphs that are not relevant or contribute to the main message. This can help to prioritize the most important content."),(0,o.kt)("li",{parentName:"ul"},"Summarizing the text by extracting key points or using automatic summarization techniques. This can provide a concise overview of the main ideas.")),(0,o.kt)("p",null,"These preprocessing steps can help to reduce the length of the content and improve the model's ability to understand and generate responses."),(0,o.kt)("h2",{id:"2-chunking-and-iterative-approach"},"2. Chunking and Iterative Approach"),(0,o.kt)("p",null,"Instead of providing the entire long form content to the model at once, it can be divided into smaller chunks or sections. These chunks can be processed individually, allowing the model to focus on a specific section at a time."),(0,o.kt)("p",null,"An iterative approach can be adopted to handle long form content. The model can generate responses for each chunk of text, and the generated output can serve as part of the input with the next chunk. This way, the conversation with the language model can progress in a step-by-step manner, effectively managing the length of the conversation."),(0,o.kt)("h2",{id:"4-post-processing-and-refining-responses"},"4. Post-processing and Refining Responses"),(0,o.kt)("p",null,"The initial responses generated by the model might be lengthy or contain unnecessary information. It is important to perform post-processing on these responses to refine and condense them."),(0,o.kt)("p",null,"Some post-processing techniques include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removing redundant or repetitive information."),(0,o.kt)("li",{parentName:"ul"},"Extracting the most relevant parts of the response."),(0,o.kt)("li",{parentName:"ul"},"Reorganizing the response to improve clarity and coherence.")),(0,o.kt)("p",null,"By refining the responses, the generated content can be made more concise and easier to understand."),(0,o.kt)("h2",{id:"5-utilizing-ai-assistants-with-longer-context-support"},"5. Utilizing AI assistants with longer context support"),(0,o.kt)("p",null,"While some language models have limited context length, there are AI assistants, like OpenAI's GPT-4 and Anthropic's ",(0,o.kt)("a",{parentName:"p",href:"https://www.anthropic.com/index/100k-context-windows"},"Claude"),", that support longer conversations. These assistants can handle longer form content more effectively and provide more accurate responses without the need for extensive workarounds."),(0,o.kt)("h2",{id:"6-code-libraries"},"6. Code libraries"),(0,o.kt)("p",null,"Python libraries like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jerryjliu/llama_index"},"Llama Index")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/langchain-ai/langchain"},"Langchain"),' can be used to deal with long form content. In particular, GPT Index can "index" the content into smaller parts then perform a vector search to find which part of the content is most relevent, and solely use that. Langchain can perform recursive summaries over chunks of text in which in summarizes one chunk and includes that in the prompt with the next chunk to be summarized.'),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Dealing with long form content can be challenging, but by employing these strategies, you can effectively manage and navigate through the content with the assistance of language models. Remember to experiment, iterate, and refine your approach to determine the most effective strategy for your specific needs."))}u.isMDXComponent=!0}}]);