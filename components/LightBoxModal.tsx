'use client';

import { useGalleriaContext } from '@/utils/hooks';
import Image from 'next/image';
import { galleriaData } from '@/utils/data';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function LightBoxModal() {
  const { setIsLightBoxClicked, currentIndex } = useGalleriaContext();

  // Add and remove event listener for 'Escape' key
  useEffect(() => {
    const handleEscapeKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightBoxClicked(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKeyDown);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [setIsLightBoxClicked]);

  return (
    <motion.div
      transition={{
        duration: 0.2
      }}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      key={galleriaData[currentIndex]?.name}
      className="fixed left-0 top-0 z-50 flex size-full flex-col items-center justify-center bg-galleria-black/85 px-6  md:px-0 lg:px-0"
      onClick={() => setIsLightBoxClicked(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.8,
          opacity: 0
        }}
        transition={{
          duration: 0.2
        }}
        className="flex flex-col gap-8 md:gap-10 lg:gap-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsLightBoxClicked(false)}
          className="ml-auto text-body uppercase tracking-[3px] text-galleria-white"
        >
          close
        </button>
        <Image
          placeholder="blur"
          className="h-full object-cover lg:w-[400px] 2xl:w-full"
          src={galleriaData[currentIndex]?.images.gallery}
          alt={galleriaData[currentIndex]?.name}
        />
      </motion.div>
    </motion.div>
  );
}

export default LightBoxModal;
