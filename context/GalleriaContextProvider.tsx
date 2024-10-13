'use client';

import { galleriaData } from '@/utils/data';
import { useParams } from 'next/navigation';
import React, { createContext, useCallback, useEffect, useState } from 'react';

type GalleriaContextType = {
  currentIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
  isLightBoxClicked: boolean;
  setIsLightBoxClicked: (bool: boolean) => void;
};

export const GalleriaContext = createContext<GalleriaContextType | null>(null);

export default function GalleriaContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { slug } = useParams();

  const galleryIndex = galleriaData.findIndex((item) => item.slugname === slug);

  const [currentIndex, setCurrentIndex] = useState(galleryIndex);

  const [isLightBoxClicked, setIsLightBoxClicked] = useState(false);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % galleriaData.length;
    setCurrentIndex(nextIndex);
    window.history.pushState(
      null,
      '',
      `/gallery/${galleriaData[nextIndex].slugname}`
    );
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    const prevIndex =
      (currentIndex - 1 + galleriaData.length) % galleriaData.length;

    setCurrentIndex(prevIndex);
    window.history.pushState(
      null,
      '',
      `/gallery/${galleriaData[prevIndex].slugname}`
    );
  }, [currentIndex]);

  useEffect(() => {
    if (galleryIndex !== -1) {
      setCurrentIndex(galleryIndex);
    }
  }, [slug, galleryIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleNext, handlePrevious]);

  return (
    <GalleriaContext.Provider
      value={{
        currentIndex,
        handleNext,
        handlePrevious,
        isLightBoxClicked,
        setIsLightBoxClicked
      }}
    >
      {children}
    </GalleriaContext.Provider>
  );
}
