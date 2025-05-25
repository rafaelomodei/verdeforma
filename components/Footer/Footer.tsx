'use client';

import Link from 'next/link';
import { Github, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Footer() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <footer className='w-full border-t'>
      <div className='max-w-[1366px] mx-auto px-4 py-3 flex flex-col gap-6'>
        <div className='flex gap-8 w-full'>
          <div className='flex-1'>
            <Link
              href='/'
              className='flex items-center gap-2 font-semibold text-lg'
            >
              <Image
                src='/images/svg/logo-verdeforma.svg'
                alt='VerdeForma'
                width={156}
                height={64}
              />
            </Link>
          </div>

          <div className='flex-1'>
            <h4 className='font-semibold'>Créditos</h4>
            <ul className='text-sm'>
              <li>
                <Link href='#'>Verde Forma</Link>
              </li>
              <li>
                <Link href='#'>Omodei Labs</Link>
              </li>
            </ul>
          </div>

          <div className='flex-1'>
            <h4 className='font-semibold'>Ajuda</h4>
            <ul className='text-sm'>
              <li>
                <Link href='#'>Sobre</Link>
              </li>
              <li>
                <Link href='#'>Contato</Link>
              </li>
              <li>
                <Link href='#'>Termos</Link>
              </li>
              <li>
                <Link href='#'>Privacidade</Link>
              </li>
            </ul>
          </div>

          <div className='flex-1'>
            <h4 className='font-semibold'>Social</h4>
            <ul className='text-sm'>
              <li>
                <Link href='#'>Instagram</Link>
              </li>
              <li>
                <Link href='#'>Facebook</Link>
              </li>
              <li>
                <Link href='#'>TokToki</Link>
              </li>
              <li>
                <Link href='#'>Twitter</Link>
              </li>
            </ul>
          </div>

          <div className='flex-1'>
            <h4 className='font-semibold'>E-commerce</h4>
            <ul className='text-sm'>
              <li>
                <Link href='#'>Mercado Livre</Link>
              </li>
              <li>
                <Link href='#'>Shoppe</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center text-sm pt-4'>
          <p>
            Built by{' '}
            <Link href='#' className='underline'>
              Verde Forma
            </Link>
            .
          </p>
          <div className='flex gap-4 mt-2 md:mt-0'>
            <Link href='https://github.com' target='_blank'>
              <Github size={18} />
            </Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='transition-colors'
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
