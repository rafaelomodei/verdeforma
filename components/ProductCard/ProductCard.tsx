import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className='hover:shadow-md transition'>
        <img
          src={product.images[0]}
          alt={product.name}
          className='w-full h-48 object-cover rounded-t-md'
        />
        <CardContent>
          <h3 className='text-lg font-semibold'>{product.name}</h3>
          <p className='text-muted-foreground'>R$ {product.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
