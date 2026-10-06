export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface Project {
  index: string;
  identity: string;
  domain: string;
  stack: string;
  description: string;
  link: string;
}
