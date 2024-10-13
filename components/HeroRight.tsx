'use client';

import { galleriaData } from '@/utils/data';
import { useGalleriaContext } from '@/utils/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

function HeroRight() {
  const { currentIndex } = useGalleriaContext();
  return (
    <div className="relative flex-1  md:mt-16 lg:mt-0">
      <AnimatePresence mode="wait" initial={false}>
        {galleriaData[currentIndex] && (
          <motion.div
            key={galleriaData[currentIndex].name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.2
            }}
            className="absolute right-0 top-28 -z-10 md:left-0 md:top-0 lg:left-auto lg:right-0  lg:top-0 "
          >
            <h1 className="text-[100px] font-bold leading-[100px] text-galleria-veryLightGray  md:text-display lg:static lg:text-[180px]">
              {galleriaData[currentIndex]?.year}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {galleriaData[currentIndex] && (
          <motion.p
            key={galleriaData[currentIndex].name}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{
              duration: 0.2
            }}
            className="mt-44 w-full text-body font-bold text-galleria-darkGray md:ml-32 md:mt-24 md:max-w-[457px]  lg:ml-16 lg:mt-28 lg:max-w-[350px] "
          >
            {galleriaData[currentIndex]?.description}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {galleriaData[currentIndex] && (
          <motion.div
            key={galleriaData[currentIndex].name}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{
              duration: 0.2
            }}
            className=" mt-10 md:mt-[68px] lg:absolute lg:bottom-0 lg:left-16"
          >
            <Link
              aria-label={`Wikipedia resource link of ${galleriaData[currentIndex].name}`}
              href={galleriaData[currentIndex]?.source ?? ''}
              target="_blank"
              className="text-button2 font-bold uppercase text-galleria-darkGray underline transition-colors hover:text-galleria-black"
            >
              Go to Source
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroRight;
