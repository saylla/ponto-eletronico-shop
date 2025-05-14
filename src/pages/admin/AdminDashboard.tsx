
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, CreditCard } from "lucide-react";
import { featuredProducts } from "@/data/mockData";
import { formatPrice } from "@/utils/formatPrice";

const AdminDashboard = () => {
  // Dados simulados para o dashboard
  const stats = [
    { 
      title: "Total de Vendas", 
      value: formatPrice(42590), 
      icon: CreditCard,
      change: "+12% este mês", 
      trend: "up" 
    },
    { 
      title: "Pedidos", 
      value: "124", 
      icon: ShoppingCart,
      change: "+4% este mês", 
      trend: "up" 
    },
    { 
      title: "Produtos", 
      value: String(featuredProducts.length), 
      icon: Package,
      change: "+2 este mês", 
      trend: "up" 
    },
    { 
      title: "Usuários", 
      value: "1,203", 
      icon: Users,
      change: "+5% este mês", 
      trend: "up" 
    }
  ];

  // Pedidos recentes simulados
  const recentOrders = [
    { id: "ORD-001", customer: "João Silva", date: "2023-11-02", amount: 275.99, status: "Concluído" },
    { id: "ORD-002", customer: "Maria Santos", date: "2023-11-01", amount: 149.50, status: "Processando" },
    { id: "ORD-003", customer: "Carlos Oliveira", date: "2023-10-31", amount: 432.75, status: "Enviado" },
    { id: "ORD-004", customer: "Ana Souza", date: "2023-10-30", amount: 89.90, status: "Concluído" },
    { id: "ORD-005", customer: "Pedro Costa", date: "2023-10-29", amount: 199.99, status: "Cancelado" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Estatísticas */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Pedidos Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Pedidos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left">
                <tr className="border-b">
                  <th className="pb-3 font-medium">ID do Pedido</th>
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Valor</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.date}</td>
                    <td className="py-3">{formatPrice(order.amount)}</td>
                    <td className="py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        order.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processando' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Enviado' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Gráfico de Vendas (Simulado) */}
      <Card>
        <CardHeader>
          <CardTitle>Vendas Mensais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Gráfico de vendas mensais seria exibido aqui.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
