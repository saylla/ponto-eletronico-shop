
import { Link } from 'react-router-dom';

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      to={`/categoria/${category.slug}`} 
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-square bg-gray-50">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-contain p-6 transition-transform group-hover:scale-105" 
          />
        </div>
        <div className="p-4 text-center bg-primary text-white font-medium">
          {category.name}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
