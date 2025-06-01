'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';

import { Home, Inbox, Calendar, Search, Settings } from 'lucide-react';
import { useEffect } from 'react';

const items = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Inbox', url: '/inbox', icon: Inbox },
  { title: 'Calendar', url: '/calendar', icon: Calendar },
  { title: 'Search', url: '/search', icon: Search },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');

    // 👉 Se iniciar maior que 768, forçamos o fechamento da sidebar
    if (media.matches) {
      setOpen(false);
    }

    const handleResize = () => {
      if (media.matches && open) {
        setOpen(false);
      }
    };

    media.addEventListener('change', handleResize);
    return () => media.removeEventListener('change', handleResize);
  }, [open, setOpen]);

  return (
    <Sidebar side='right'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className='mr-2 h-4 w-4' />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
