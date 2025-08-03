import React, { useState, useEffect, ReactNode } from 'react';
import { fetchWaitlistCount } from '@/lib/api';
import { WaitlistContext } from './waitlist-context';

interface WaitlistProviderProps {
  children: ReactNode;
}

export const WaitlistProvider: React.FC<WaitlistProviderProps> = ({ children }) => {
  const [waitlistCount, setWaitlistCount] = useState<number | string>(193);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadWaitlistCount = async () => {
      setIsLoading(true);
      setWaitlistCount("Let me check the waitlist count...");
      
      try {
        const count = await fetchWaitlistCount();

        if (count > 0) {
          setWaitlistCount(count);
        } else {
          // Fallback to initial count if API fails
          setWaitlistCount(193);
        }
      } catch (error) {
        // Fallback to initial count if API fails
        setWaitlistCount(193);
      } finally {
        setIsLoading(false);
      }
    };

    loadWaitlistCount();
  }, []);

  const incrementCount = () => {
    setWaitlistCount(prev => typeof prev === 'number' ? prev + 1 : 194);
  };

  const value = {
    waitlistCount,
    isLoading,
    incrementCount,
  };

  return (
    <WaitlistContext.Provider value={value}>
      {children}
    </WaitlistContext.Provider>
  );
};
