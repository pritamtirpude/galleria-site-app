import { GalleriaContext } from '@/context/GalleriaContextProvider';
import { useContext, useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false); // Initially false to ensure correct hydration

  useEffect(() => {
    const getMatches = (query: string): boolean => {
      if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches;
      }
      return false;
    };

    const matchMedia = window.matchMedia(query);
    setMatches(getMatches(query)); // Update matches when component mounts

    const handleChange = () => {
      setMatches(matchMedia.matches); // Update matches on change
    };

    // Listen to the change event
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange); // Cleanup listener
    };
  }, [query]);

  return matches;
}

export const useGalleriaContext = () => {
  const context = useContext(GalleriaContext);
  if (!context) {
    throw new Error('GalleriaContext is not defined');
  }
  return context;
};
