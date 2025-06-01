'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  max?: number;
  className?: string;
}

export function StarRating(props: StarRatingProps) {
  const { rating, reviewCount, max = 5, className } = props;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <span className='text-muted-foreground'>{rating.toFixed(1)}</span>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'w-4 h-4',
            i < fullStars
              ? 'fill-yellow-400 stroke-yellow-500'
              : i < totalStars && hasHalfStar
              ? 'fill-yellow-300 stroke-yellow-400'
              : 'stroke-muted-foreground'
          )}
        />
      ))}
      <span className='text-muted-foreground'>
        {reviewCount !== undefined && ` (${reviewCount})`}
      </span>
    </div>
  );
}
