# Exemplo simples de Node Server sem frameworks

O objetivo deste projeto é explorar a possibilidade de construir uma estrutura básica de Node Server + MySQL para adquirir noção de como as coisas acontecem e disponibilizar um passo-a-passo por meio de código comentado.

O passo-a-passo se inicia em `index.html` e segue o _caminho feliz_. As exceções e erros ( `catch` ) foram explorados de maneira superficial.
Há indicações do caminho a ser realizado entre os arquivos mas caso você se perca é só procurar pelo passo desejado: `Passo 01`, `Passo 02`, `Passo 03`...

Foi utilizado o menor número de dependências possível e não existem testes ou lints.

Parte desta construção foi inspirada no modelo do livro "[Node.js API: Learn server-side JavaScript by building your own Node.js server from scratch](https://www.amazon.com.br/Node-js-API-server-side-JavaScript-building-ebook/dp/B084NVXMS7?ref_=nav_custrec_signin&)" por Greg Sidelnikov.


## Executando o projeto

### Com Docker

1. Clone este repositório:
 - `git clone https://github.com/felipexperto/simple-node-server.git`

2. Se você não possui o Docker instalado, [siga este guia de instalação](https://docs.docker.com/get-docker/).

3. Via terminal acesse a pasta raíz do projeto;

4. Com o Docker instalado e rodando, digite no terminal:
 - `docker-compose up` (aguarde o MySQL iniciar)

5. Pronto, pode acessar a aplicação no endereço:
 - `http://0.0.0.0:8080/`

6. Quando desejar parar a aplicação, vá no terminal:
 - Pressione `Cmd+C / Ctrl+C`
 - E digite: `docker-compose down`

### Sem Docker

1. Clone este repositório:
 - `git clone https://github.com/felipexperto/simple-node-server.git`

2. Se você não tem o NodeJS instalado, instale-o.
 - Há diversas maneiras de fazer este passo, em Windows a mais fácil é [acessando este site](https://nodejs.org/en/), baixando e instalando o pacote.
 - No Mac, se você possui o [Homebrew](https://brew.sh/index_pt-br) (gerenciador de pacotes) instalado, pode utilizar o comando: `brew install node`
 
3. A aplicação consulta uma base de dados e precisamos de uma estrutura para executá-lo.
  - Novamente, existem diversas possibilidades e vou indicar a instalação do [XAMPP](https://www.apachefriends.org/pt_br/index.html) que nos permite subir um módulo Apache e MySQL.
  - Após a instalação, execute-o e no `XAMPP Control Panel` dê um "Start" nos dois serviços.
  - Acesse o endereço: http://localhost/phpmyadmin
  - Importe nosso banco que está em `db/data.sql` (você encontra um bom tutorial [clicando aqui](https://help.one.com/hc/pt-br/articles/115005588189-Como-importar-uma-base-de-dados-para-phpMyAdmin-) ou pesquisando por: `How to Import a MySQL Database using phpMyAdmin`)
 
4. Via terminal acesse a pasta raíz do projeto;

5. Instale as dependências com `npm install`

6. Rode o projeto com `npm run dev`

7. Acesse http://127.0.0.1:3000
