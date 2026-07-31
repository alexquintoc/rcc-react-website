import { createContext } from 'react';

export interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

export const RouterContext = createContext<RouterContextValue | null>(null);
