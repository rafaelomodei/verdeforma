import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vaso Verde Cônico',
    slug: 'vaso-verde-conico',
    description: 'Ideal para suculentas e ambientes internos.',
    price: 59.9,
    images: ['/images/vaso1-1.png', '/images/vaso1-2.png'],
  },
  {
    id: '2',
    name: 'Vaso Branco Minimalista',
    slug: 'vaso-branco-minimalista',
    description: 'Design clean e sofisticado.',
    price: 89.9,
    images: ['/images/vaso2-1.png', '/images/vaso2-2.png'],
  },
];
