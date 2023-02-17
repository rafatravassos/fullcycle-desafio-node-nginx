# fullcycle-desafio-node-nginx
Desafio para chamada de aplicação node com proxy reverso NGINX utilizando Docker

## Desafio
        Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

        O retorno da aplicação node.js para o nginx deverá ser:

        <h1>Full Cycle Rocks!</h1>

        - Lista de nomes cadastrada no banco de dados.

        Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

        Suba tudo em um repositório e faça a entrega.

        * A linguagem de programação para este desafio é Node/JavaScript.


## Como foi feito
    ### mysql
    Foi criado um arquivo init-script.sql que contém o script para criação de tabela
    Será criada uma pasta ./mysql com os dados do banco
    Assim que o container sobe a tabela PEOPLE será criada, caso ainda não exista

    ### node
    Dependências:
        - mysql
        - node_random_name

    Assim que o container está no ar, um registro será inserido com um nome aleatório.
    Se for chamado localhost:8080, será exibida a listagem dos nomes já cadastrados.

    