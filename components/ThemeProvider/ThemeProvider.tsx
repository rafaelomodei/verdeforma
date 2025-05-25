'use client';

import * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
