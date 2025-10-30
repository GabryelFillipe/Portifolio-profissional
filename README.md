# 💼 Portfólio Pessoal - Gabryel Fillipe

Este projeto é o meu portfólio profissional, desenvolvido para apresentar minhas habilidades, formação acadêmica e projetos de destaque. O design foi criado com base em um protótipo do Figma, focado em uma estética moderna, limpa e totalmente responsiva.

O site é uma "Single Page Application" (SPA) estática, onde toda a navegação é feita de forma fluida na mesma página, utilizando links de âncora e interatividade JavaScript.

## ✨ Funcionalidades e Seções

O portfólio é estruturado em seções claras e possui interatividade implementada com JavaScript puro, seguindo práticas de "Clean Code".

### 1. Design Responsivo (Mobile-First)

* **Layout Adaptativo:** O site se ajusta perfeitamente a todos os tamanhos de tela, de celulares (telas pequenas) a desktops, garantindo uma ótima experiência de usuário em qualquer dispositivo.
* **Menu Hamburguer:** Em telas menores, o menu de navegação principal (navbar) se recolhe em um menu "hamburguer" interativo, que pode ser aberto ou fechado.

### 2. Navegação Interativa (JavaScript)

* **Header Sticky:** O cabeçalho (`<header>`) fica fixo no topo da página após o usuário rolar a tela, garantindo acesso fácil e constante ao menu de navegação.
* **Scroll Spy:** O link da seção atual no menu é destacado automaticamente (com a classe `.active`) conforme o usuário rola a página, indicando em qual seção ele está.
* **Navegação Suave:** Clicar nos links do menu rola a página suavemente até a seção correspondente.

### 3. Seções do Portfólio

* **Home:** Seção de boas-vindas com avatar, título de impacto, breve biografia, botões de CTA (Call to Action) para LinkedIn e Download de CV, e ícones das tecnologias de domínio.
* **Projetos:** Apresentados em um layout de grade (CSS Grid) com "cards" interativos que exibem uma imagem de capa, título e tags. Cada card é um link que leva ao repositório ou demo do projeto.
* **Formação:** Uma linha do tempo (timeline) vertical e responsiva detalhando a formação acadêmica (Graduação em Engenharia de Software e Técnico em Desenvolvimento de Sistemas).
* **Contato (Rodapé):** Seção final com um call-to-action para contato, link de e-mail e ícones para redes sociais (LinkedIn, GitHub).

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica (uso de `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, etc).
* **CSS3:** Estilização avançada com:
    * **Variáveis CSS:** Para um tema de cores fácil de manter (paleta escura com destaque roxo).
    * **Flexbox:** Para alinhamento de componentes internos (como botões, ícones de tecnologia e infos do card).
    * **CSS Grid Layout:** Para a seção de grade de projetos.
    * **Media Queries:** Para garantir a total responsividade do design.
* **JavaScript (ES6+):**
    * Utilizado para toda a interatividade (menu mobile, header sticky, scroll spy).
    * Manipulação de DOM e Gerenciamento de Eventos (Event Listeners).
* **Font Awesome:** Biblioteca de ícones utilizada no menu mobile (`<i class="fas fa-bars">`), links sociais e detalhes do rodapé (`<i class="fa fa-heart">`).
* **Google Fonts:** Para a fonte "Poppins", garantindo uma tipografia moderna e legível.
* **Git e Github:** Para controle de versão e hospedagem do código.

## ⚙️ Como Executar

Para visualizar o projeto, basta seguir os passos abaixo:

1.  Clone o repositório para a sua máquina local.
2.  Abra o arquivo `index.html` em seu navegador de preferência.

Não é necessária nenhuma instalação ou configuração adicional para rodar o projeto.

## 👨‍💻 Autor

Este projeto foi desenvolvido por **Gabryel Fillipe**. Vamos nos conectar!

* **LinkedIn:** [https://www.linkedin.com/in/gabryel-fillipe/](https://www.linkedin.com/in/gabryel-fillipe/)
* **GitHub:** [https://github.com/GabryelFillipe](https://github.com/GabryelFillipe)