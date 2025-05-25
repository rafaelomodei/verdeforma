'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='w-full px-4 py-3 flex justify-between items-center'>
      <Link href='/'>
        <Image
          src='/images/svg/logo-verdeforma.svg' // ajuste para o caminho da sua logo
          alt='Logo VerdeForma'
          width={156}
          height={64}
          priority
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className='flex gap-6'>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Vasos</NavigationMenuTrigger>
            <NavigationMenuContent className='p-4 grid grid-cols-1 gap- rounded-md'>
              <Link href='/colecoes' className='hover:underline text-sm'>
                Coleções
              </Link>
              <Link href='/categorias' className='hover:underline text-sm'>
                Categorias
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='#sobre' className={cn('text-sm font-medium')}>
              Sobre
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='#contato' className={cn('text-sm font-medium')}>
              Contato
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
