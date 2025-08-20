# Guia de Componentes - E-commerce de Eletrônicos

## 📋 Visão Geral

Este documento detalha todos os componentes do sistema, suas propriedades, uso e exemplos práticos.

## 🏗️ Hierarquia de Componentes

### Layouts (Estrutura Base)

#### Layout
**Localização:** `src/components/layouts/Layout.tsx`

Layout principal da aplicação que inclui navbar e footer.

```typescript
interface LayoutProps {
  children: React.ReactNode;
}

// Uso
<Layout>
  <HomePage />
</Layout>
```

**Características:**
- Navbar fixa no topo
- Footer no final da página
- Container responsivo
- Área de conteúdo principal

#### AdminLayout
**Localização:** `src/components/layouts/AdminLayout.tsx`

Layout específico para páginas administrativas com sidebar.

```typescript
// Uso através de Outlet (React Router)
<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
</Route>
```

**Características:**
- Sidebar de navegação administrativa
- Header dedicado para admin
- Proteção de acesso (admin only)
- Layout em duas colunas

#### Navbar
**Localização:** `src/components/layouts/Navbar.tsx`

Barra de navegação principal com menu e carrinho.

**Funcionalidades:**
- Logo e navegação principal
- Links para categorias
- Ícone do carrinho com contador
- Menu mobile responsivo
- Botões de login/logout

#### Footer
**Localização:** `src/components/layouts/Footer.tsx`

Rodapé com informações da empresa e links úteis.

**Conteúdo:**
- Informações de contato
- Links de política
- Redes sociais
- Newsletter

---

### Componentes de Produto

#### ProductCard
**Localização:** `src/components/ui/ProductCard.tsx`

Card de produto reutilizável para listagens.

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  shortDescription: string;
}

interface ProductCardProps {
  product: Product;
}

// Uso
<ProductCard product={productData} />
```

**Características:**
- Imagem responsiva
- Preço com desconto (quando aplicável)
- Botão "Adicionar ao Carrinho"
- Link para detalhes
- Badge de desconto automático
- Loading state para imagens

#### ProductImages
**Localização:** `src/components/product/ProductImages.tsx`

Galeria de imagens do produto com navegação.

```typescript
interface ProductImagesProps {
  images: string[];
  productName: string;
  fallbackImage: string;
}

// Uso
<ProductImages 
  images={product.images}
  productName={product.name}
  fallbackImage="/placeholder.jpg"
/>
```

**Funcionalidades:**
- Imagem principal grande
- Miniaturas navegáveis
- Tratamento de erro de imagem
- Aspect ratio fixo
- Indicador visual da imagem ativa

#### ProductInfo
**Localização:** `src/components/product/ProductInfo.tsx`

Informações detalhadas do produto na página de detalhes.

```typescript
interface ProductInfoProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

// Uso
<ProductInfo 
  product={productData}
  onAddToCart={handleAddToCart}
/>
```

**Características:**
- Nome e descrição do produto
- Preço com formatação brasileira
- Botões de ação (comprar/carrinho)
- Informações de disponibilidade
- Compartilhamento social

#### ProductTabs
**Localização:** `src/components/product/ProductTabs.tsx`

Abas com informações adicionais do produto.

```typescript
interface ProductTabsProps {
  description: string;
  specifications: Record<string, string>;
  reviews: Review[];
}

// Uso
<ProductTabs 
  description={product.description}
  specifications={product.specs}
  reviews={product.reviews}
/>
```

**Abas Incluídas:**
- Descrição detalhada
- Especificações técnicas
- Avaliações de clientes
- Política de troca

#### BreadcrumbNav
**Localização:** `src/components/product/BreadcrumbNav.tsx`

Navegação breadcrumb para produtos.

```typescript
interface BreadcrumbNavProps {
  productName: string;
  category: string;
}

// Uso
<BreadcrumbNav 
  productName="iPhone 14 Pro"
  category="smartphones"
/>
```

**Navegação:**
- Home > Produtos > Categoria > Produto
- Links clicáveis para navegação
- Formatação automática de nomes

---

### Componentes de Carrinho

#### CartItem
**Localização:** `src/components/cart/CartItem.tsx`

Item individual do carrinho com controles.

```typescript
interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

// Uso
<CartItem 
  item={cartItem}
  onUpdateQuantity={updateQuantity}
  onRemove={removeItem}
/>
```

**Funcionalidades:**
- Imagem do produto
- Nome e preço
- Controles de quantidade (+ / -)
- Botão de remoção
- Subtotal calculado

#### CartItemList
**Localização:** `src/components/cart/CartItemList.tsx`

Lista de todos os itens do carrinho.

```typescript
interface CartItemListProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

// Uso
<CartItemList 
  items={cartItems}
  onUpdateQuantity={handleUpdateQuantity}
  onRemove={handleRemoveItem}
/>
```

#### OrderSummary
**Localização:** `src/components/cart/OrderSummary.tsx`

Resumo do pedido com totais e botões de ação.

```typescript
interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

// Uso
<OrderSummary 
  subtotal={calculateSubtotal()}
  shipping={0}
  tax={calculateTax()}
  total={calculateTotal()}
  onCheckout={proceedToCheckout}
/>
```

**Características:**
- Subtotal dos produtos
- Frete e impostos
- Total geral
- Botão de finalização
- Cupons de desconto (preparado)

#### EmptyCart
**Localização:** `src/components/cart/EmptyCart.tsx`

Estado vazio do carrinho com call-to-action.

```typescript
// Uso
{cartItems.length === 0 ? <EmptyCart /> : <CartItemList />}
```

**Elementos:**
- Ícone ilustrativo
- Mensagem amigável
- Botão para explorar produtos
- Design centralizado

---

### Componentes de Seções

#### HomeBanner
**Localização:** `src/components/sections/HomeBanner.tsx`

Banner principal da página inicial.

**Características:**
- Texto promocional
- Call-to-action
- Design responsivo
- Background gradiente

#### CategoriesSection
**Localização:** `src/components/sections/CategoriesSection.tsx`

Seção de categorias na página inicial.

```typescript
interface CategoriesSectionProps {
  title: string;
  categories: Category[];
}

// Uso
<CategoriesSection 
  title="Navegue por Categorias"
  categories={categoriesData}
/>
```

#### ProductsSection
**Localização:** `src/components/sections/ProductsSection.tsx`

Seção de produtos com título e link "Ver Todos".

```typescript
interface ProductsSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

// Uso
<ProductsSection 
  title="Produtos em Destaque"
  products={featuredProducts}
  viewAllLink="/produtos"
/>
```

---

### Componentes Administrativos

#### AdminHeader
**Localização:** `src/components/admin/AdminHeader.tsx`

Header específico da área administrativa.

**Funcionalidades:**
- Título da página atual
- Informações do usuário admin
- Botão de logout
- Breadcrumb admin

#### AdminSidebar
**Localização:** `src/components/admin/AdminSidebar.tsx`

Sidebar de navegação administrativa.

**Menu Items:**
- Dashboard
- Produtos
- Pedidos
- Usuários (preparado)
- Relatórios (preparado)

---

### Componentes UI Base (Shadcn)

#### Button
**Localização:** `src/components/ui/button.tsx`

Botão base com múltiplas variantes.

```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

// Variantes disponíveis
<Button variant="default">Primário</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destruir</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Pequeno</Button>
<Button size="lg">Grande</Button>
```

#### Input
**Localização:** `src/components/ui/input.tsx`

Campo de entrada base.

```typescript
interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Uso
<Input 
  type="email"
  placeholder="seu@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

#### Card
**Localização:** `src/components/ui/card.tsx`

Container de conteúdo com estilo consistente.

```typescript
// Componentes do Card
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo principal
  </CardContent>
  <CardFooter>
    Rodapé do card
  </CardFooter>
</Card>
```

#### Badge
**Localização:** `src/components/ui/badge.tsx`

Badge para indicadores e status.

```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

// Uso
<Badge variant="default">Novo</Badge>
<Badge variant="destructive">Esgotado</Badge>
<Badge variant="outline">Em Promoção</Badge>
```

#### Toast
**Localização:** `src/components/ui/toast.tsx`

Sistema de notificações.

```typescript
// Hook useToast
const { toast } = useToast();

// Uso básico
toast({
  title: "Sucesso!",
  description: "Produto adicionado ao carrinho.",
});

// Toast de erro
toast({
  title: "Erro",
  description: "Falha ao adicionar produto.",
  variant: "destructive",
});
```

#### Tabs
**Localização:** `src/components/ui/tabs.tsx`

Sistema de abas.

```typescript
<Tabs defaultValue="description">
  <TabsList>
    <TabsTrigger value="description">Descrição</TabsTrigger>
    <TabsTrigger value="specs">Especificações</TabsTrigger>
    <TabsTrigger value="reviews">Avaliações</TabsTrigger>
  </TabsList>
  
  <TabsContent value="description">
    Conteúdo da descrição
  </TabsContent>
  
  <TabsContent value="specs">
    Especificações técnicas
  </TabsContent>
</Tabs>
```

#### Select
**Localização:** `src/components/ui/select.tsx`

Seletor dropdown.

```typescript
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma categoria" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="electronics">Eletrônicos</SelectItem>
    <SelectItem value="games">Games</SelectItem>
    <SelectItem value="accessories">Acessórios</SelectItem>
  </SelectContent>
</Select>
```

---

## 🎨 Padrões de Design

### Cores e Variantes

```css
/* Cores primárias */
.primary { color: #1EAEDB; }
.primary-hover { color: #33C3F0; }
.primary-dark { color: #0EA5E9; }

/* Cores de status */
.success { color: #22c55e; }
.warning { color: #f59e0b; }
.error { color: #ef4444; }
.info { color: #3b82f6; }
```

### Espacamento Consistente

```css
/* Padrão de espaçamento */
.space-xs { margin: 0.25rem; }    /* 4px */
.space-sm { margin: 0.5rem; }     /* 8px */
.space-md { margin: 1rem; }       /* 16px */
.space-lg { margin: 1.5rem; }     /* 24px */
.space-xl { margin: 2rem; }       /* 32px */
```

### Estados de Interação

```css
/* Estados de hover */
.hover-scale { transition: transform 0.2s; }
.hover-scale:hover { transform: scale(1.05); }

/* Estados de focus */
.focus-ring:focus { 
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

/* Estados de loading */
.loading { opacity: 0.6; cursor: not-allowed; }
```

---

## 📱 Responsividade

### Breakpoints por Componente

#### ProductCard
```css
/* Mobile: 1 coluna */
@media (min-width: 640px) {
  /* Tablet: 2 colunas */
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px) {
  /* Desktop: 3-4 colunas */
  grid-template-columns: repeat(4, 1fr);
}
```

#### Navbar
```css
/* Mobile: Menu hambúrguer */
.mobile-menu { display: block; }
.desktop-menu { display: none; }

@media (min-width: 768px) {
  .mobile-menu { display: none; }
  .desktop-menu { display: flex; }
}
```

---

## 🔧 Hooks Customizados

### useAuth
**Localização:** `src/contexts/AuthContext.tsx`

Hook para gerenciar autenticação.

```typescript
const { user, isAuthenticated, isAdmin, login, logout } = useAuth();

// Verificar se usuário está logado
if (!isAuthenticated) {
  return <LoginPage />;
}

// Verificar se é admin
if (isAdmin) {
  return <AdminPanel />;
}
```

### useToast
**Localização:** `src/components/ui/use-toast.ts`

Hook para notificações.

```typescript
const { toast } = useToast();

const handleSuccess = () => {
  toast({
    title: "Operação concluída",
    description: "Dados salvos com sucesso!",
  });
};

const handleError = () => {
  toast({
    title: "Erro",
    description: "Falha ao salvar dados.",
    variant: "destructive",
  });
};
```

---

## 🧪 Testes de Componentes

### Estratégias de Teste

```typescript
// Teste de renderização
describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(formatPrice(mockProduct.price))).toBeInTheDocument();
  });
});

// Teste de interação
describe('Button', () => {
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## 📚 Exemplos de Uso Avançado

### Composição de Componentes

```typescript
// Página de produto completa
const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  
  return (
    <Layout>
      <div className="container-custom">
        <BreadcrumbNav 
          productName={product.name}
          category={product.category}
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <ProductImages 
            images={product.images}
            productName={product.name}
            fallbackImage="/placeholder.jpg"
          />
          
          <ProductInfo 
            product={product}
            onAddToCart={handleAddToCart}
          />
        </div>
        
        <ProductTabs 
          description={product.description}
          specifications={product.specifications}
          reviews={product.reviews}
        />
      </div>
    </Layout>
  );
};
```

### Formulário Complexo

```typescript
// Formulário de checkout
const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { toast } = useToast();
  
  const onSubmit = async (data: FormData) => {
    try {
      await processOrder(data);
      toast({
        title: "Pedido confirmado!",
        description: "Você receberá um email de confirmação.",
      });
    } catch (error) {
      toast({
        title: "Erro no pedido",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados de Entrega</CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input 
            {...register("name", { required: "Nome é obrigatório" })}
            placeholder="Nome completo"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          
          <Input 
            {...register("email", { 
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido"
              }
            })}
            type="email"
            placeholder="seu@email.com"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          
          <Button type="submit" className="w-full">
            Finalizar Pedido
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
```

---

**Este guia serve como referência completa para todos os componentes do sistema, facilitando o desenvolvimento e manutenção.**