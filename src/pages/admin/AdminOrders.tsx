
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  ShoppingCart, 
  Eye, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { formatPrice } from '@/utils/formatPrice';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Dados simulados de pedidos
const mockOrders = [
  { 
    id: "ORD-001", 
    customer: "João Silva", 
    email: "joao.silva@exemplo.com",
    date: "2023-11-02", 
    amount: 275.99, 
    status: "Concluído",
    items: [
      { id: "1", name: "Fone de Ouvido Bluetooth", price: 199.99, quantity: 1 },
      { id: "2", name: "Carregador Rápido USB-C", price: 76.00, quantity: 1 }
    ]
  },
  { 
    id: "ORD-002", 
    customer: "Maria Santos", 
    email: "maria.santos@exemplo.com",
    date: "2023-11-01", 
    amount: 149.50, 
    status: "Processando",
    items: [
      { id: "3", name: "Mouse Gamer", price: 149.50, quantity: 1 }
    ]
  },
  { 
    id: "ORD-003", 
    customer: "Carlos Oliveira", 
    email: "carlos.oliveira@exemplo.com",
    date: "2023-10-31", 
    amount: 432.75, 
    status: "Enviado",
    items: [
      { id: "4", name: "Teclado Mecânico", price: 349.90, quantity: 1 },
      { id: "5", name: "Mousepad Gamer", price: 82.85, quantity: 1 }
    ]
  },
  { 
    id: "ORD-004", 
    customer: "Ana Souza", 
    email: "ana.souza@exemplo.com",
    date: "2023-10-30", 
    amount: 89.90, 
    status: "Concluído",
    items: [
      { id: "6", name: "Cabo HDMI 2.0", price: 89.90, quantity: 1 }
    ]
  },
  { 
    id: "ORD-005", 
    customer: "Pedro Costa", 
    email: "pedro.costa@exemplo.com",
    date: "2023-10-29", 
    amount: 199.99, 
    status: "Cancelado",
    items: [
      { id: "7", name: "Webcam HD", price: 199.99, quantity: 1 }
    ]
  },
  { 
    id: "ORD-006", 
    customer: "Fernanda Lima", 
    email: "fernanda.lima@exemplo.com",
    date: "2023-10-28", 
    amount: 1299.90, 
    status: "Concluído",
    items: [
      { id: "8", name: "Tablet Android", price: 1299.90, quantity: 1 }
    ]
  },
  { 
    id: "ORD-007", 
    customer: "Ricardo Almeida", 
    email: "ricardo.almeida@exemplo.com",
    date: "2023-10-27", 
    amount: 499.99, 
    status: "Enviado",
    items: [
      { id: "9", name: "Monitor LED 24\"", price: 499.99, quantity: 1 }
    ]
  },
  { 
    id: "ORD-008", 
    customer: "Juliana Martins", 
    email: "juliana.martins@exemplo.com",
    date: "2023-10-26", 
    amount: 59.90, 
    status: "Processando",
    items: [
      { id: "10", name: "Pendrive 64GB", price: 59.90, quantity: 1 }
    ]
  }
];

const statusOptions = [
  { value: "Processando", label: "Processando" },
  { value: "Enviado", label: "Enviado" },
  { value: "Concluído", label: "Concluído" },
  { value: "Cancelado", label: "Cancelado" }
];

const AdminOrders = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewOrder, setViewOrder] = useState<any>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  
  const ordersPerPage = 10;
  
  // Filtrar pedidos
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    
    return matchesSearch && matchesStatus;
  });
  
  // Paginar pedidos
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage, 
    currentPage * ordersPerPage
  );
  
  const maxPage = Math.ceil(filteredOrders.length / ordersPerPage);
  
  const handleStatusChange = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    
    setOrders(updatedOrders);
    
    toast({
      title: "Status atualizado",
      description: `Pedido ${orderId} atualizado para ${newStatus}.`
    });
  };
  
  const viewOrderDetails = (order: any) => {
    setViewOrder(order);
    setIsViewDialogOpen(true);
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gerenciar Pedidos</h1>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Lista de Pedidos</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar pedidos..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos os status</SelectItem>
                  {statusOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedOrders.length > 0 ? (
                  paginatedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{formatPrice(order.amount)}</TableCell>
                      <TableCell>
                        <Select
                          value={order.status}
                          onValueChange={(value) => handleStatusChange(order.id, value)}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue>
                              <span className={`inline-block px-2 py-1 rounded text-xs ${
                                order.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                                order.status === 'Processando' ? 'bg-blue-100 text-blue-800' :
                                order.status === 'Enviado' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {order.status}
                              </span>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => viewOrderDetails(order)}
                        >
                          <Eye size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <div className="flex flex-col items-center">
                        <ShoppingCart className="h-12 w-12 text-gray-300 mb-2" />
                        <p className="text-gray-500">Nenhum pedido encontrado</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {filteredOrders.length > ordersPerPage && (
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                Exibindo {(currentPage - 1) * ordersPerPage + 1} - {Math.min(currentPage * ordersPerPage, filteredOrders.length)} de {filteredOrders.length} pedidos
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, maxPage))}
                  disabled={currentPage === maxPage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Dialog para visualizar detalhes do pedido */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Detalhes do Pedido {viewOrder?.id}</DialogTitle>
          </DialogHeader>
          
          {viewOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Cliente</h3>
                  <p>{viewOrder.customer}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p>{viewOrder.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Data</h3>
                  <p>{viewOrder.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${
                    viewOrder.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                    viewOrder.status === 'Processando' ? 'bg-blue-100 text-blue-800' :
                    viewOrder.status === 'Enviado' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {viewOrder.status}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Itens do Pedido</h3>
                <div className="border rounded-md divide-y">
                  {viewOrder.items.map((item: any) => (
                    <div key={item.id} className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantidade: {item.quantity}</p>
                      </div>
                      <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-right">
                  <h3 className="text-sm font-medium text-gray-500">Total do Pedido</h3>
                  <p className="text-xl font-bold">{formatPrice(viewOrder.amount)}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Ações</h3>
                <div className="flex gap-2">
                  <Select
                    value={viewOrder.status}
                    onValueChange={(value) => {
                      handleStatusChange(viewOrder.id, value);
                      setViewOrder({ ...viewOrder, status: value });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Atualizar Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline">
                    Imprimir
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminOrders;
