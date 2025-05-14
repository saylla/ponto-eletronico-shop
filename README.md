# E-commerce de Eletrônicos

Este é um projeto de um **site de vendas de eletrônicos** completo, desenvolvido com **React.js**, **Node.js** e **MongoDB**. O site oferece uma experiência de compra online fluída e segura, com funcionalidades como cadastro e login de usuários, carrinho de compras, checkout, gerenciamento de produtos e painel administrativo.

## Funcionalidades

- **Página Inicial:** Exibição de produtos com filtros de categoria e opção de adicionar ao carrinho.
- **Detalhes do Produto:** Página com informações detalhadas de cada produto, avaliações de usuários e opção para compra.
- **Login e Registro de Usuários:** Funcionalidade para login e registro de novos usuários com autenticação via JWT.
- **Carrinho de Compras:** Permite adicionar, remover e editar a quantidade de produtos no carrinho, além de exibir o valor total.
- **Checkout:** Página de finalização de compra com métodos de pagamento e confirmação de pedido.
- **Painel Administrativo:** Dashboard para gerenciar produtos e pedidos, incluindo a possibilidade de editar informações, estoque e status de pedidos.
- **Avaliações de Produtos:** Sistema de avaliação com estrelas, permitindo que usuários classifiquem os produtos que compraram.

## Tecnologias Usadas

- **Front-End:** React.js, TailwindCSS
- **Back-End:** Node.js, Express.js
- **Banco de Dados:** MongoDB
- **Autenticação:** JWT (Json Web Token)
- **Controle de versão:** Git e GitHub

## Estrutura do Projeto
/client # Diretório do Front-End (React.js)
/src
/components # Componentes reutilizáveis
/pages # Páginas da aplicação
/services # Funções de API
/styles # Estilos (TailwindCSS)

/server # Diretório do Back-End (Node.js)
/controllers # Lógica de controle de rotas
/models # Modelos de banco de dados (MongoDB)
/routes # Rotas da API
/middleware # Middleware de autenticação
/config # Configuração do servidor e banco de dados
