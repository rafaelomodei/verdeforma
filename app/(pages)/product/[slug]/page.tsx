import { products } from '@/lib/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.name}
              className='rounded mb-4'
            />
          ))}
        </div>
        <div>
          <p className='text-muted-foreground mb-4'>{product.description}</p>
          <p className='text-2xl font-semibold'>
            R$ {product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </main>
  );
}
