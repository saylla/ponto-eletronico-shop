
import { Link } from 'react-router-dom';
import CategoryCard, { Category } from '../ui/CategoryCard';

interface CategoriesSectionProps {
  title: string;
  categories: Category[];
}

const CategoriesSection = ({ title, categories }: CategoriesSectionProps) => {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
