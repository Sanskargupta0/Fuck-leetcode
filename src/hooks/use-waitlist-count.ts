import { useContext } from 'react';
import { WaitlistContext } from '@/context/waitlist-context';

export const useWaitlistCount = () => {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlistCount must be used within a WaitlistProvider');
  }
  return context;
};
