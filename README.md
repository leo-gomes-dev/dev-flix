### Dev Flix

O **Dev Flix** é uma aplicação web moderna de catálogo de cinema desenvolvida em React, utilizando a ferramenta de build Vite. O projeto consome a API do TMDB (The Movie Database) para listar os filmes em cartaz em tempo real, trazendo uma interface escura inspirada nas principais plataformas de streaming do mercado. 

**[Link do Site Hospedado](https://leo-gomes-dev.github.io/dev-flix/#/)**
**[Link do Repositório Oficial](https://github.com/leo-gomes-dev/dev-flix)** 

### Sobre o Projeto (About)

Este projeto foi desenvolvido com o objetivo de consolidar conceitos avançados de desenvolvimento Frontend, focando em requisições assíncronas eficientes, gerenciamento de estado estruturado, rotas dinâmicas e segurança no gerenciamento de chaves de API em ambientes de deploy (Vercel). 

### Tecnologias Utilizadas

O ecossistema do projeto foi selecionado para garantir performance, tipagem sutil e carregamento instantâneo: 

* **[React](https://react.dev/)** — Biblioteca Javascript para construção de interfaces baseadas em componentes.
* **[Vite](https://vite.dev/)** — Ferramenta de build ultra-rápida para o desenvolvimento frontend moderno.
* **[Axios](https://axios-http.com/)** — Cliente HTTP baseado em Promises para integração limpa com a API do TMDB.
* **[React Router DOM](https://reactrouter.com/)** — Gerenciamento e navegação de rotas dinâmicas do ecossistema React.
* **[CSS3 Avançado](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** — Estilização modular com CSS Grid, Flexbox e customização nativa de barras de rolagem.

### 🔧 Como Clonar e Executar o Projeto (Fork & Setup)

Se você deseja testar o projeto localmente, fazer modificações ou criar um *fork*, siga o passo a passo abaixo: 

### 1. Clonar o Repositório

Abra o seu terminal e execute o comando abaixo para clonar o projeto: 

```bash

git clone https://github.com/leo-gomes-dev/dev-flix.git

```
Use o código com cuidado.

### 2. Entrar na pasta do projeto

```bash

cd dev-flix

```

Use o código com cuidado.

### 3. Instalar as dependências

Certifique-se de ter o Node.js instalado em sua máquina e execute: 

```bash

npm install

```
Use o código com cuidado.

### 4. Configurar as Variáveis de Ambiente (.env)

Crie um arquivo na raiz do seu projeto chamado .env e configure com a sua URL base e a sua chave de acesso gerada no painel do desenvolvedor do [TMDB](https://www.themoviedb.org/): 

env

VITE_API_BASE_URL=https://api.themoviedb.org/3/
VITE_API_TOKEN=SUA_CHAVE_BEARER_TOKEN_AQUI

Use o código com cuidado.

### 5. Iniciar o servidor de desenvolvimento

```bash

npm run dev

```
Use o código com cuidado.

O Vite abrirá uma porta local (geralmente http://localhost:5173) para você visualizar o projeto rodando. 

### Variáveis de Ambiente no Deploy (Vercel)

Para que o projeto funcione corretamente na Vercel sem expor os seus dados de forma pública no histórico de Commits do GitHub: 

1. Certifique-se de que o arquivo .env está adicionado ao seu .gitignore.
2. No painel do seu projeto na Vercel, vá em **Settings** > **Environment Variables** e cadastre as chaves VITE_API_BASE_URL e VITE_API_TOKEN com seus respectivos valores de produção.

### Desenvolvedor

Desenvolvido por **Leo Gomes**. 

* **Website Oficial:** [leogomesdev.com](https://leogomesdev.com/)
* **GitHub:** [@leo-gomes-dev](https://github.com/leo-gomes-dev)
