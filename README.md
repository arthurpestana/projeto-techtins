# Sistema de Gerenciamento de Usuários - Loja SneakerShop
> Status do Projeto: Concluído! :heavy_check_mark:

Documentação do **Sistema de Gerenciamento de Usuários** para a loja **SneakerShop**. O sistema foi desenvolvido, visando proporcionar uma interface intuitiva e funcional para os administradores da loja, facilitando a gestão de usuários de forma eficiente.

## Objetivo

O objetivo principal desta sistema é oferecer uma solução simples e eficaz para os administradores do SneakerShop monitorarem e gerenciarem os perfis de usuários, incluindo funcionalidades como:

- Gerenciar usuários (administradores, clientes e funcionários).
- Cadastrar, visualizar, editar e excluir usuários do sistema.
- Visualizar o histórico de operações recentes
- Garantir a segurança do acesso, com autenticação segura para que apenas administradores possam gerenciar os dados dos usuários.

## Layout da Aplicação

1. **Login**: Página para acesso dos administradores no sistema.

   ![Perfil de Usuário](./public/design/login-pag.png)

2. **Home**: Exibe um resumo das funcionalidades do sistema, informações básicas de total de usuários e informações das operações recentes dos feitas pelos administradores.

   ![Página Home](./public/design/home-pag.png)

3. **Lista de Usuários**: Uma tela onde os administradores podem visualizar e pesquisar usuários. A lista inclui informações básicas como nome, e-mail, status da conta e ações rápidas para editar ou remover contas.

   ![Lista de Usuários](./public/design/users-pag.png)

4. **Cadastro/Edição de Usuário**: Interface para cadastrar ou modificar os dados dos usuários, como nome, e-mail, permissões e status. Esta tela foi desenhada para ser clara e direta, reduzindo a complexidade de gerenciamento.

   ![Cadastro e Edição de Usuário](./public/design/cad-pag.png)

Para mais detalhes, acesse o [projeto no Figma](https://www.figma.com/design/SJuZt1hepNeWCXbaC9Ls9p/Gerenciamento-de-Usu%C3%A1rios---SneakerShop?node-id=3019-2807&t=JGKBrdmabTsH7u8N-1).


## Funcionalidades

- [x] Integração com a API RESTful
- [x] Login de Administrador
   - [x] Acesso restrito e proteção via autenticação
- [x] Exibir todos os usuários cadastrados no sistema
- [x] Pesquisa de usuários
- [x] Funcionalidades de edição e exclusão de usuários no sistema
- [x] Exibição de histórico de operações recentes
- [x] Feedback visual e interativo

## Estruturação de Rotas

```
.
├── public
│   ├── design
│   ├── docs
│   ├── icons
│   ├── images
│   └── favicon.ico
│
├── src/app
│   │
│   ├── auth
│   │   └── login
│   │       └── style.tsx
│   │
│   ├── dashboard
│   │    │
│   │    ├── home
│   │    │   ├── page.tsx
│   │    │   └── style.tsx
│   │    │
│   │    ├── users
│   │    │   ├── cadUser
│   │    │   │   └── page.tsx
│   │    │   ├── page.tsx
│   │    │   └── style.css
│   │    └── layout.tsx
│   │
|   ├── globals.css
|   ├── layout.tsx
|   ├── page.tsx
|   |
│   ├── assets/fonts
|   |
│   └── components
│        ├── AlertBox
│        ├── Button
│        ├── Card
│        ├── Header
│        ├── Input
│        ├── InputDropdown
│        ├── SideBar
│        └── UserItem
│
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
└── postcss.config.mjs

```

#### Detalhes

- ***public/***: Contém arquivos estáticos acessíveis diretamente pela URL (imagens, ícones, etc.).
- ***src/app/***: Diretório raiz para definir as rotas da aplicação.
- ***src/auth/login/***: Rotas de autenticação relacionadas ao login.
- ***src/dashboard/***: Painel administrativo para usuários autenticados.
- ***src/app/dashboard/home/***: Página inicial da aplicação, com informações gerais e navegação.
- ***src/app/dashboard/users/***: Diretório para gerenciar usuários, com subdiretório para cadastro e estilos específicos.
   - ***src/app/dashboard/users/cadUser/***: Sub-Rota para cadastro ou edição de usuários.
- ***src/app/components/***: Componentes reutilizáveis da interface, como botões, inputs, e cards.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)

## Requisitos

#### Node.js
É necessário instalar o [Node.js](https://nodejs.org/en/) para rodar o projeto. O **Node.js** é uma plataforma para executar JavaScript no lado do servidor e é necessário para o NextJs funcionar.

- **Versão Requerida**: 14.x ou superior.
  
Você pode verificar a versão instalada com o seguinte comando no terminal:

```bash
node -v
```

#### Gerenciador de Pacotes

Next.js utiliza npm ou Yarn para gerenciar suas dependências. O npm já vem instalado com o Node.js, mas se preferir utilizar o Yarn, você pode instalá-lo globalmente:

```bash
npm install -g yarn
```

Verifique a versão instalada do npm ou Yarn com os comandos:

```bash
npm -v
```
```bash
yarn -v
```

## Dependências

#### AXIOS

```bash
npm install axios
``` 

#### Pacote @svgr/webpack

```bash
npm install @svgr/webpack --save-dev
```

#### Pacote jwt-decoded

```bash
npm install jwt-decode
```

## Execução da Aplicação

1º Siga a documentação de execução da API

https://github.com/arthurpestana/projeto-techtins-backend

2º No terminal, clone o projeto:

```bash
git clone https://github.com/arthurpestana/projeto-techtins.git
```

3º Acesse o diretório do projeto e instale todas as dependências citadas anteriormente.

Por fim, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2024 - Projeto-Techtins

