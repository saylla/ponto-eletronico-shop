
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layouts/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-3xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-xl text-gray-medium mb-8 max-w-lg mx-auto">
          A página que você está procurando não existe ou pode ter sido movida.
        </p>
        <Button asChild size="lg">
          <Link to="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
