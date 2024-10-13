'use client';

import { useGalleriaContext } from '@/utils/hooks';
import { galleriaData } from '@/utils/data';
import iconNext from '@/public/assets/shared/icon-next-button.svg';
import iconBack from '@/public/assets/shared/icon-back-button.svg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

function BottomNavigation() {
  const { currentIndex, handleNext, handlePrevious } = useGalleriaContext();
  return (
    <div className="fixed bottom-0 z-30 w-full bg-galleria-white">
      <div className="absolute left-0 top-0  h-px w-full bg-galleria-lightGray">
        <motion.div
          className="absolute top-0 h-px bg-galleria-black"
          animate={{
            width: `${10 + Math.round((currentIndex / (galleriaData.length - 1)) * 90)}%`
          }}
        />
      </div>
      <div className="flex items-center justify-between px-4 py-6 md:px-10 md:py-[25px] lg:mx-auto lg:max-w-7xl lg:px-0 lg:py-[25px]">
        <AnimatePresence mode="wait" initial={false}>
          {galleriaData[currentIndex] && (
            <motion.div
              key={galleriaData[currentIndex]?.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col gap-2"
            >
              <span className="inline-block text-body font-bold md:text-heading3 lg:text-heading3">
                {galleriaData[currentIndex]?.name}
              </span>
              <span className="inline-block text-[10px] md:text-[13px] lg:text-[13px] ">
                {galleriaData[currentIndex]?.artist.name}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-6 md:gap-10 lg:gap-10">
          <motion.button
            whileTap={{
              scale: 0.9
            }}
            onClick={handlePrevious}
          >
            <Image src={iconBack} alt="previous button" />
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.9
            }}
            onClick={handleNext}
          >
            <Image src={iconNext} alt="next button" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
