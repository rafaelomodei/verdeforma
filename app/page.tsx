import { ProductCard } from '@/components/ProductCard/ProductCard';
import { products } from '../lib/products';

// Apresentação
// MOstrar alguns produtos, mais vendidos

export default function Home() {
  return (
    <main className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-6'>Verdeforma - Galeria de Vasos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
