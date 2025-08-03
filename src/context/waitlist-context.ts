import { createContext } from 'react';

export interface WaitlistContextType {
  waitlistCount: number | string;
  isLoading: boolean;
  incrementCount: () => void;
}

export const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);
