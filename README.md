<div align="center">
<img width="220px" src="https://raw.githubusercontent.com/Rocketseat/awesome/master/assets/logo_rocketseat.png" alt="">&nbsp;&nbsp;&nbsp;
<img width="150px" src="https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Flogos%2Fexplorer.svg&w=256&q=75"  alt="">
<br>
<p align="center">
<img src="https://img.shields.io/github/last-commit/Clara-Pacheco/FocusTimer2.0-DarkMode"/>&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/repo-size/Clara-Pacheco/FocusTimer2.0-DarkMode"/>&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/languages/count/Clara-Pacheco/FocusTimer2.0-DarkMode"/>


[![Netlify Status](https://api.netlify.com/api/v1/badges/c9b00a2c-cffe-4874-ad6d-4df58c5adf11/deploy-status)](https://app.netlify.com/sites/pomodorodarkmode/deploys)


</div>

<br>

## 💻 Sobre o desafio

Principais pontos abordados nesse desafio:

- Posicionamento utilizando grid;
- Implantar lógica javascript na web;
- Manipulação de svg pelo js;
- Trabalhar com a DOM,
- Criação de Dark-Mode;
- Trabalhar com o volume dos sons de cada card;
- Trabalhar com eventos,
- Acesso a métodos e atributos de objetos de eventos,
- Object Destructuring
- Injeção de Dependências,
- Factory pattern,
- Modularização,
- Refatoração

<br>

## 📕 Layout da aplicação  

Aqui neste **[link](https://www.figma.com/file/i0NrFLRzyE9nitftcCaC9N/Stage-05---Dark-Mode-FocusTimer-(Copy)?node-id=0%3A1&t=YPJcCCJ1uFxPEmKm-0)**  você tem acesso ao Figma do projeto**.** 

⚠️ **Alerta**: Caso ao clicar no link você se depare com o erro que `WebGL` não está ativado no seu navegador, [siga esses passos](https://help.figma.com/hc/en-us/articles/360039828614#Enable_WebGL).  

<br>

## 💻 Projeto

O resultado final desse desafio deve ser algo em torno de:

![Project´s preview](https://github.com/Clara-Pacheco/FocusTimer2.0-DarkMode/blob/main/assets/project-preview/Light%20Mode.png)  

![Project´s preview](https://github.com/Clara-Pacheco/FocusTimer2.0-DarkMode/blob/main/assets/project-preview/Dark%20Mode.png)  

<br>

## 🧪 Tecnologias | HTML , CSS e Javascript
---
Nesse desafio, criamos uma aplicação do tipo Pomodoro (timer de foco), onde, usando os botões + e -, aumentamos ou diminuímos o tempo do temporizador em 5 minutos. Adicionamos também cards do lado direito, que, ao serem selecionados, mudam de cor e emitem sons diferentes. O som e a cor dos cards funcionam em sincronia com o temporizador. Por fim, incluímos na aplicação o 'Dark Mode', onde o ícone muda de acordo com o Modo e é possível alternar entre 'light mode' e 'dark mode'. Há também uma barra de volume para cada card.

<br>

## 📜 Descrição

Este temporizador tem por finalidade a aplicação da técnica Pomodoro, uma técnica excelente para ser aplicada durante seus estudos. Nesta aplicação, também estão inseridas quatro áudios para ouvir junto, enquanto o cronômetro roda. Esses áudios são de sons ambientes para ajudar na eliminação de ruídos externos e manter o seu foco apenas na sua atividade.

O Pomodoro consiste em um ciclo de duas horas. A cada 25 minutos, sem interrupções, dedicado a uma tarefa, você deve fazer uma pausa de 5 minutos. Ao final do ciclo de duas horas, você deverá fazer uma pausa maior de 30 minutos e depois começar um novo Pomodoro.

Nesta aplicação temos por padrão o tempo de 25 minutos em seu display, funcionando através do método "setTimeout()" em seu código. E sempre que apertar o botão "Stop", o temporizador reiniciará para os 25 minutos de padrão e aguardará o comando para iniciar uma nova contagem.

## 📌 Funcionalidades:

### ➕➖ Botões de controle:

- Botões "Play" e "Pause", alternam suas posições, iniciando a contagem regressiva e interrompendo o tempo, respectivamente;
- Botão "Stop" resetando o temporizador e e desativanddo todos os botões de controle pressionados;
- Botão "(+)" para adicionar 5 segundos, adicionando 1 minuto após ao chegar em 60 segundos e, botão  "(-)", que removerá 5 minutos  do temporizador.

### 🔉 Botões de cards de áudio:

Ao lado, possuem cada um, um áudio em loop, de som ambiente do seu respectivo card. 

São eles:

- Floresta;
- Chuva;
- Cafeteria;
- e Lareira.

### 🔇 Audios

Ao clicar em qualquer um dos cards, o "soundOff" (mute) é desativado e ativa-se o respectivo áudio selecionado. O mesmo procedimento vale para qualquer um dos 4 cards. E ao clicar novamente no botão soundOff, desativa-se novamente o áudio que estiver sendo reproduzido.

Também existe o áudio padrão de botão pressionado, para qualquer um dos botões da aplicação.

Quando o contador chegar em zero, será reproduzido o alarme do áudio KitchenTimer, informando ao usuário que o seu tempo inserido chegou ao fim. 

## ⏰ Incrementos

Esse projeto é uma versão otimizada do ***Focus Timer Pomodoro***, contendo duas novas funcionalidades:

- Dark Mode;
- Controle de volume.

No topo da página, encontra-se o botão dark-mode/light-mode, onde ao clicá-lo, muda-se o tema da aplicação, intercalando em tema claro e escuro, mantendo-se o mesmo layout, mas com personalizações de cores distintas.

Foi adicionado também em cada card, um input de volume próprio para cada um deles, totalmente independentes. A aplicação inicia com o som desligado, indicado pelo seu botão "soundOff" (mute) pressionado.

##  📕 Sobre  

<p>Este é um projeto desenvolvido em treinamento, juntamente com a 
<a  href="https://www.rocketseat.com.br">Rocketseat</a> 🚀  
no decorrer do programa <b>Explorer</b>.  

<br>

### Informações  

📅 **Início:** 17.02.2023

📅 **Conclusão:** 21.02.2023

🕛 **Status:** Concluído✔️

🌎 **Result Preview:** https://pomodorodarkmode.netlify.app/

<div align="center">
Feito com 💜 por Clara 🚀
</div>
</p>