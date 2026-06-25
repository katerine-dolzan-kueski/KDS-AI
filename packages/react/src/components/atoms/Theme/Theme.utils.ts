import { ThemeBehaviour, ThemeMode } from './Theme.types';

function getSystemTheme(): ThemeMode {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  return media.matches ? 'dark' : 'light';
}

export default function getTheme(config: ThemeBehaviour): ThemeMode {
  if (config === 'auto') {
    return getSystemTheme();
  }

  return config;
}
