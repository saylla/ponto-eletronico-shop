# E-commerce de Eletrônicos - Ponto do Eletrônico

Um sistema completo de e-commerce para venda de eletrônicos desenvolvido com React, TypeScript e TailwindCSS, incluindo painel administrativo e funcionalidades completas de compra online.

## 🚀 Tecnologias Utilizadas

### Front-End
- **React** 18.3.1 - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **TailwindCSS** - Framework CSS para estilização
- **React Router DOM** - Roteamento SPA
- **React Query (TanStack Query)** - Gerenciamento de estado de servidor
- **React Hook Form** - Gerenciamento de formulários
- **Lucide React** - Biblioteca de ícones
- **Shadcn/ui** - Componentes UI reutilizáveis

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e servidor de desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── admin/           # Componentes do painel admin
│   ├── cart/            # Componentes do carrinho
│   ├── layouts/         # Layouts da aplicação
│   ├── product/         # Componentes de produto
│   ├── sections/        # Seções da página
│   └── ui/              # Componentes UI base (shadcn)
├── contexts/            # Contextos React (Auth, etc.)
├── data/                # Dados mock e tipos
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários e configurações
├── pages/               # Páginas da aplicação
│   └── admin/           # Páginas administrativas
└── utils/               # Funções utilitárias
```

## 🎨 Design System

O projeto utiliza um design system baseado em tokens semânticos definidos em `src/index.css` e configurações do TailwindCSS:

### Cores Principais
- **Primary**: `#1EAEDB` (Azul principal)
- **Primary Hover**: `#33C3F0`
- **Primary Dark**: `#0EA5E9`
- **Gray Light**: `#eee`
- **Gray Medium**: `#888888`
- **Gray Dark**: `#555555`

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 🛍️ Funcionalidades Principais

### Para Usuários Finais

#### 1. **Página Inicial**
- Banner promocional destacado
- Navegação por categorias
- Produtos em destaque
- Novidades
- Ofertas especiais
- Newsletter subscription

#### 2. **Catálogo de Produtos**
- Listagem de produtos com filtros
- Busca por categoria
- Cards informativos com:
  - Imagem do produto
  - Nome e descrição
  - Preço atual e preço anterior (quando em promoção)
  - Botão "Adicionar ao Carrinho"

#### 3. **Detalhes do Produto**
- Galeria de imagens com navegação
- Informações completas do produto
- Breadcrumb navigation
- Tabs com especificações, avaliações, etc.
- Botões para adicionar ao carrinho

#### 4. **Sistema de Carrinho**
- Visualização de itens adicionados
- Edição de quantidades
- Remoção de produtos
- Cálculo automático de totais
- Resumo do pedido
- Carrinho vazio com call-to-action

#### 5. **Autenticação**
- Sistema de login e registro
- Autenticação com JWT
- Proteção de rotas
- Contexto de autenticação global

#### 6. **Checkout**
- Página de finalização de compra
- Formulários de dados pessoais e entrega
- Resumo do pedido
- Integração com métodos de pagamento

### Para Administradores

#### 1. **Painel Administrativo**
- Dashboard com métricas principais
- Sidebar de navegação
- Layout dedicado para área admin

#### 2. **Gerenciamento de Produtos**
- Listagem completa de produtos
- CRUD de produtos (Create, Read, Update, Delete)
- Upload de imagens
- Controle de estoque
- Categorização

#### 3. **Gerenciamento de Pedidos**
- Visualização de todos os pedidos
- Alteração de status de pedidos
- Detalhes completos de cada pedido
- Histórico de transações

## 🗂️ Dados e Categorias

### Categorias Disponíveis
- **Fones de Ouvido** - Bluetooth, com fio, gamers
- **Joysticks** - PlayStation, Xbox, universais
- **Games Portáteis** - Consoles retrô, handhelds
- **Carregadores** - USB-C, sem fio, powerbanks
- **Cabos USB** - Lightning, USB-C, HDMI

### Produtos em Destaque
O sistema conta com mais de 15 produtos categorizados, incluindo:
- Fones bluetooth com cancelamento de ruído
- Controles para consoles modernos
- Dispositivos de carregamento rápido
- Cabos e adaptadores premium
- Consoles portáteis retrô

## 🔐 Sistema de Autenticação

### Usuários de Demonstração
```
Admin:
- Email: admin@exemplo.com
- Senha: admin123

Usuário Comum:
- Email: usuario@exemplo.com
- Senha: user123
```

### Recursos de Segurança
- Tokens JWT para autenticação
- Proteção de rotas sensíveis
- Middleware de autorização
- Contexto seguro de autenticação

## 🎯 Páginas e Rotas

### Públicas
- `/` - Página inicial
- `/produtos` - Lista de produtos
- `/categoria/:categorySlug` - Produtos por categoria
- `/produto/:id` - Detalhes do produto
- `/carrinho` - Carrinho de compras
- `/promocoes` - Produtos em promoção
- `/login` - Página de login
- `/cadastro` - Registro de usuário
- `/checkout` - Finalização de compra

### Administrativas (Protegidas)
- `/admin` - Dashboard administrativo
- `/admin/produtos` - Gerenciamento de produtos
- `/admin/pedidos` - Gerenciamento de pedidos

## 📱 Responsividade

O projeto é totalmente responsivo, utilizando:
- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints TailwindCSS**:
  - `sm`: 640px
  - `md`: 768px  
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1400px

## 🔧 Configuração e Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn ou bun

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🧩 Componentes Principais

### Layouts
- **Layout** - Layout padrão com header e footer
- **AdminLayout** - Layout específico para área administrativa
- **Navbar** - Navegação principal
- **Footer** - Rodapé com informações e links

### UI Components
- **ProductCard** - Card de produto reutilizável
- **CategoryCard** - Card de categoria
- **Button** - Botão customizável com variantes
- **Input** - Campo de entrada de dados
- **Toast** - Notificações do sistema

### Carrinho
- **CartItem** - Item individual do carrinho
- **CartItemList** - Lista de itens do carrinho
- **OrderSummary** - Resumo do pedido
- **EmptyCart** - Estado vazio do carrinho

### Produto
- **ProductImages** - Galeria de imagens do produto
- **ProductInfo** - Informações do produto
- **ProductTabs** - Abas com detalhes adicionais
- **BreadcrumbNav** - Navegação breadcrumb

## 🎨 Customização do Design

O projeto utiliza um sistema de design tokens que permite fácil customização:

### CSS Variables (index.css)
```css
:root {
  --primary: 196 69% 49%;        /* Cor primária */
  --secondary: 210 40% 96.1%;    /* Cor secundária */
  --background: 0 0% 100%;       /* Fundo */
  --foreground: 222.2 84% 4.9%;  /* Texto */
  /* ... outros tokens */
}
```

### Tailwind Configuration
O arquivo `tailwind.config.ts` estende as configurações padrão com:
- Cores customizadas
- Animações personalizadas
- Breakpoints específicos
- Fonte Inter

## 🚀 Deploy e Produção

### Build de Produção
```bash
npm run build
```

### Deploy
O projeto pode ser deployado em qualquer serviço de hospedagem estática:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔮 Próximos Passos e Melhorias

### Funcionalidades Futuras
- [ ] Integração com API real
- [ ] Sistema de avaliações de produtos
- [ ] Wishlist de produtos
- [ ] Sistema de cupons de desconto
- [ ] Chat de suporte ao cliente
- [ ] Histórico de pedidos do usuário
- [ ] Notificações push
- [ ] Sistema de afiliados

### Melhorias Técnicas
- [ ] Testes unitários e E2E
- [ ] PWA (Progressive Web App)
- [ ] SEO otimização
- [ ] Performance optimization
- [ ] Internacionalização (i18n)
- [ ] Analytics integration

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

---

**Desenvolvido com ❤️ para o futuro do e-commerce brasileiro**