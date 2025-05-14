
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart2, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const AdminSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const navItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      href: '/admin',
      active: location.pathname === '/admin' 
    },
    { 
      icon: Package, 
      label: 'Produtos', 
      href: '/admin/produtos',
      active: location.pathname === '/admin/produtos' 
    },
    { 
      icon: ShoppingCart, 
      label: 'Pedidos', 
      href: '/admin/pedidos',
      active: location.pathname === '/admin/pedidos' 
    },
    { 
      icon: Users, 
      label: 'Usuários', 
      href: '/admin/usuarios',
      active: location.pathname === '/admin/usuarios' 
    },
    { 
      icon: BarChart2, 
      label: 'Relatórios', 
      href: '/admin/relatorios',
      active: location.pathname === '/admin/relatorios' 
    },
    { 
      icon: Settings, 
      label: 'Configurações', 
      href: '/admin/configuracoes',
      active: location.pathname === '/admin/configuracoes' 
    }
  ];

  return (
    <aside 
      className={cn(
        "bg-gray-900 text-white transition-all duration-300 flex flex-col", 
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-gray-800",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed && (
          <Link to="/admin" className="text-xl font-bold">
            Admin Panel
          </Link>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-800"
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center py-2 px-4 hover:bg-gray-800 transition-colors",
                  item.active ? "bg-primary text-white" : "text-gray-300",
                  collapsed ? "justify-center" : ""
                )}
              >
                <item.icon size={20} className={collapsed ? "" : "mr-3"} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <Link 
          to="/" 
          className={cn(
            "flex items-center text-gray-300 hover:text-white",
            collapsed ? "justify-center" : ""
          )}
        >
          {!collapsed && <span>Voltar ao site</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
