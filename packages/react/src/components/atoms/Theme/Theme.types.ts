import { ReactNode } from 'react';

export type ThemeMode = 'dark' | 'light';
export type ThemeBehaviour = 'auto' | ThemeMode;
export type ThemeVariant = 'background' | 'contents';

export interface ThemeProps {
  children?: ReactNode;
  $mode?: ThemeBehaviour;
  $variant?: ThemeVariant;
  className?: string;
}
