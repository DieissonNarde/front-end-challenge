<img src="/web/public/svg/logo.svg" width="200">

<p align="center">
  Aplicação para consulta de filmes por listagem de mais populares do dia e filtragem por gêneros.
</p>

<br>

[//]: # (Add your gifs/images here:)
<p align="center">
  <img src="/.github/app-desktop.gif" width="620">
</p>

## API
Foi utilizada a API pública de filmes [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction)

## Requisitos funcionais
* O usuário deve ter acesso a uma listagem dos filmes mais populares do dia
* O usuário deve conseguir paginar a lista para encontrar novos filmes
* O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem
* A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa

## Requisitos não funcionais
* O app deverá ser criado usando [React](https://reactjs.org/)
* O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge
* O app deverá ser responsivo

## Extras
* O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
* O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
* O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

## :rocket: TECNOLOGIAS
Esse projeto foi desenvolvido com as seguintes tecnologias:
- **React JS** 
- **Next JS** 
- **Typescript** 
- **Styled Components** 
- **Axios** 

## 🤔 Como executar o projeto
```bash
# Clone este repositório
$ git clone git@github.com:DieissonNarde/front-end-challenge.git

# Acesse a pasta do projeto no seu terminal
$ cd web

# Renomear arquivo .env.example para .env e adicionar token da api TMDB

# Instale as dependências e execute a aplicação
$ yarn && yarn dev

```

---