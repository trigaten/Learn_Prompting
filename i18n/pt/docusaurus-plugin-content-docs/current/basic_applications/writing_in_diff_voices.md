---
sidebar_position: 60
---

# 🟢 Escrevendo em estilos diferentes 

AIs como o [ChatGPT](https://chat.openai.com/chat) são conhecidas por criar textos e artigos de blog em questão de segundos. Mas muitas vezes, os artigos que elas produzem são genéricos e sem graça. Você precisa fazer algo extra para dar às palavras algum espírito ou animação. Uma das maneiras mais rápidas de fazer isso é especificar um estilo de escrita ou nomear um autor famoso na solicitação. Digamos que você queira um parágrafo sobre a importância da amizade. Uma solicitação genérica como `Escreva um parágrafo sobre a importância da amizade` produzirá uma resposta genérica do ChatGPT.
 
import friendship from '../assets/basic_applications/PT_Generic_Friendship.png';
import friendship_informal from '../assets/basic_applications/PT_Friendship_Informal.png';
import friendship_mark from '../assets/basic_applications/PT_Friendship_Carlos_Drummond_Andrade.png';
import friendship_chris from '../assets/basic_applications/PT_Friendship_Whindersson.png';
import friendship_millennial from '../assets/basic_applications/PT_Friendship_Mineiro.png';


<div style={{textAlign: 'center'}}>
  <img src={friendship} style={{width: "750px"}} />
</div>

Blah. É tão sem graça.
Os resultados mudam quando você adiciona especificações, como `**Por favor, escreva em um estilo informal e conversacional.**` O ChatGPT retorna algo assim:

<div style={{textAlign: 'center'}}>
  <img src={friendship_informal} style={{width: "750px"}} />
</div>

Bom, já melhorou.

Se você quiser uma coisa mais aprimorada, você pode pedir ao ChatGPT para escrever no estilo de um escritor famoso, como o Carlos Drummond de Andrade.


<div style={{textAlign: 'center'}}>
  <img src={friendship_mark} style={{width: "750px"}} />
</div>

Agora o texto está tomando vida!
Mas não precisa ser como um escritor famoso. Você pode utilizar qualquer pessoa conhecida, como o Whindersson Nunes.

<div style={{textAlign: 'center'}}>
  <img src={friendship_chris} style={{width: "750px"}} />
</div>

Quer um jeitinho mais "mineirinho"? 

<div style={{textAlign: 'center'}}>
  <img src={friendship_millennial} style={{width: "750px"}} />
</div>

## Copiando o seu Estilo de Escrever


E se você quiser que o GPT-3 escreva um e-mail ou blog no **seu estilo**?

Simplesmente mostrando a ele algum conteúdo anterior que você tenha escrito é suficiente! Aqui está um exemplo, onde mostramos ao GPT-3 alguns e-mails que o 'Dr. Donizete' escreveu no passado e pedimos que ele escreva um novo e-mail no mesmo estilo para um novo paciente, o Sr. João.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt=" Email #1: Assunto - Confirmação de consulta\n\nPrezado(a) John,\n\nGostaria de confirmar sua consulta comigo, Dr. Smith, no dia 1º de maio de 2023, às 14h30, na Clínica HealthFirst. Estou ansioso(a) para encontrá-lo e discutir suas preocupações com a saúde.\n\nPor favor, chegue com 15 minutos de antecedência para preencher qualquer formulário necessário e traga uma lista de quaisquer medicamentos que esteja tomando atualmente. Se precisar remarcar ou cancelar sua consulta, avise-nos com pelo menos 24 horas de antecedência.\n\nSe tiver alguma dúvida ou preocupação antes da sua consulta, não hesite em entrar em contato conosco.\n\nAtenciosamente,\nDr. Donizete\n\nEmail #2: Assunto - Resultados de exames\n\nPrezado(a) Jane,\n\nEscrevo para informá-lo(a) que seus resultados recentes de exame de sangue chegaram. Seus níveis de colesterol estão dentro da faixa normal, mas seus níveis de vitamina D estão baixos. Eu recomendaria que você comece a tomar suplementos de vitamina D para melhorar seus níveis.\n\nCom base nesses resultados, também recomendo que você agende uma consulta de acompanhamento em 3 meses para retestar seus níveis de vitamina D. Se tiver alguma dúvida ou preocupação, não hesite em nos contatar.\n\nObrigado,\nDr. Donizete\n\nEmail #3: Assunto - Consulta de acompanhamento\n\nPrezado(a) Mark,\n\nGostaria de fazer um acompanhamento após a nossa última consulta e ver como você está se sentindo. Se ainda estiver sentindo dor nas costas ou tiver alguma nova preocupação, informe-me para que possamos discutir durante sua próxima consulta.\n\nSua próxima consulta está agendada para 15 de junho de 2023 às 10h00 na Clínica City Health. Informe-nos se precisar remarcar ou cancelar.\n\nAtenciosamente,\nDr. Donizete\n\nEscreva um email no estilo dos e-mails acima para o Sr. João, perguntando se ele está disponível para um check-up no dia 5 de Outubro às 14:00." initial-response="Assunto: Agendamento de check-up\n\nPrezado Sr. João,\n\nGostaria de agendar um check-up médico com o senhor para o dia 5 de Outubro de 2023 às 14:00 na Clínica HealthFirst. Nesta consulta, discutiremos suas preocupações com a saúde e faremos um exame físico completo para garantir que esteja em boa condição.\n\nPor favor, confirme sua disponibilidade para esta data e hora. Caso precise remarcar ou cancelar, avise-nos com pelo menos 24 horas de antecedência.\n\nLembre-se de chegar com 15 minutos de antecedência para preencher qualquer formulário necessário e traga uma lista de quaisquer medicamentos que esteja tomando atualmente.\n\nSe tiver alguma dúvida ou preocupação antes da consulta, não hesite em entrar em contato conosco.\n\nAtenciosamente,\n\nDr. Donizete" max-tokens="256" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
 

<br/>Você pode inserir qualquer texto que tenha escrito no passado (e-mails, relatórios, blogs, etc.), e o GPT-3/ChatGPT geralmente será capaz de copiar seu estilo. Quanto mais texto você inserir, melhor ele pode copiar seu estilo.