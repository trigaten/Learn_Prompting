# Learn Prompting

Website currently down!

[![Twitter](https://img.shields.io/twitter/url?label=Follow%20%40learnprompting&style=social&url=https%3A%2F%2Ftwitter.com%2Flearnprompting)](https://twitter.com/learnprompting)
[![](https://dcbadge.vercel.app/api/server/7enStJXQzD?compact=true&style=flat)](https://discord.gg/7enStJXQzD)
![Website](https://img.shields.io/website?down_message=offline%20%3A%28&up_message=learnprompting.org&url=https%3A%2F%2Flearnprompting.org)


[https://learnprompting.org](https://learnprompting.org)

Prompt Engineering, Generative AI, and LLM Guide by Learn Prompting | Join our discord for the largest Prompt Engineering learning community

## Contribution Guidelines

We welcome contributions in any form.

We are actively looking for:

- content suggestions
- translation
- content/art contributions
- typos :)



## Local Development

First, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [node](https://nodejs.org/en/download/).

Make sure you are using Node 18.0.0 or higher (`node -v`). Then, run the following commands in a terminal:
```
# download the website code with git
git clone https://github.com/trigaten/Learn_Prompting.git
# enter the project directory
cd Learn_Prompting
# install node modules
npm i
# run the website locally
npm start
```

If you get an error related to the node version, you probably are using an older version of node.

Make sure the newer version appears higher in your path than any older versions. 

Alternatively, you can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install the latest version of node. Install nvm, then do the following:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install-latest-npm
```


`npm start` starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Thanks to all contributors ❤

 <a href = "https://github.com/trigaten/Learn_Prompting/graphs/contributors">
   <LazyLoadImage src = "https://contrib.rocks/image?repo=trigaten/Learn_Prompting"/>
 </a>

## Cite

Use the provided GitHub citation in this repository:

```
@software{Schulhoff_Learn_Prompting_2022,
 author = {Schulhoff, Sander and Community Contributors},
 month = dec,
 title = {{Learn Prompting}},
 url = {https://github.com/trigaten/Learn_Prompting},
 year = {2022}
}
```
