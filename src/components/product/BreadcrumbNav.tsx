
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbNavProps {
  productName: string;
  category: string;
}

const BreadcrumbNav = ({ productName, category }: BreadcrumbNavProps) => {
  const formattedCategory = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return (
    <nav className="flex mb-6 text-sm">
      <ol className="flex items-center space-x-1">
        <li>
          <Link to="/" className="text-gray-medium hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight size={16} className="text-gray-medium" />
        </li>
        <li>
          <Link to="/produtos" className="text-gray-medium hover:text-primary">
            Produtos
          </Link>
        </li>
        <li>
          <ChevronRight size={16} className="text-gray-medium" />
        </li>
        <li>
          <Link 
            to={`/categoria/${category}`} 
            className="text-gray-medium hover:text-primary"
          >
            {formattedCategory}
          </Link>
        </li>
        <li>
          <ChevronRight size={16} className="text-gray-medium" />
        </li>
        <li className="text-gray-dark font-medium truncate">{productName}</li>
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
