'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { StarRating } from '../StarRating/StarRating';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  const totalImages = product.images.length;

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'relative transition border border-border bg-background shadow-none overflow-hidden rounded-md',
          'hover:border-primary hover:border-2 hover:bg-muted/90 dark:hover:bg-muted/30'
        )}
      >
        <div className='relative w-full h-64'>
          <img
            src={product.images[currentImage]}
            alt={product.name}
            className='w-full h-full object-cover transition duration-300'
          />

          {hovered && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlePrev();
                }}
                className='absolute top-1/2 left-2 -translate-y-1/2 bg-background/70 p-1 rounded-full hover:bg-background transition z-10'
              >
                <ChevronLeft className='w-5 h-5 text-foreground' />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className='absolute top-1/2 right-2 -translate-y-1/2 bg-background/70 p-1 rounded-full hover:bg-background transition z-10'
              >
                <ChevronRight className='w-5 h-5 text-foreground' />
              </button>
            </>
          )}
        </div>

        {/* Conteúdo */}
        <CardContent className='flex flex-col gap-2 pt-2'>
          <StarRating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
          <h3 className='text-md text-muted-foreground'>{product.name}</h3>
          <p className='text-lg font-semibold'>R$ {product.price.toFixed(2)}</p>

          {product.isFreeShipping && (
            <p className='font-semibold text-green-600'>Frete grátis</p>
          )}

          {product.isFull && (
            <div className='flex'>
              <p className='text-muted-foreground'>Enviado pelo</p>
              <p className='ml-2 font-semibold text-green-600 italic'>FULL</p>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
