import { isSSR } from '@/lib/isSSR';

export const THEME_KEY = 'jc:theme';

export type Theme = 'dark' | 'light';

export const getTheme = (): Theme => {
  if (isSSR().isServer) {
    return 'light';
  }

  const storageTheme = localStorage.getItem(THEME_KEY) as Theme;
  if (storageTheme) {
    return storageTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const updateThemeInDom = (theme: Theme) => {
  const documentElementClassList = document.documentElement.classList;
  theme === 'dark' ? documentElementClassList.add('dark') : documentElementClassList.remove('dark');
};
