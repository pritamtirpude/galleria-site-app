'use client';

import { galleriaData } from '@/utils/data';
import { useGalleriaContext, useMediaQuery } from '@/utils/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import iconViewImage from '@/public/assets/shared/icon-view-image.svg';
import Image from 'next/image';

function HeroLeft() {
  const { currentIndex, setIsLightBoxClicked } = useGalleriaContext();

  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <div className="relative flex-1 lg:min-w-[800px]">
      <AnimatePresence mode="wait" initial={false}>
        {galleriaData[currentIndex] && (
          <motion.div
            key={galleriaData[currentIndex].name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.1
            }}
            className="relative"
          >
            <div className="absolute bottom-0 left-4 right-0 top-4 z-20 md:bottom-4 md:left-4 md:right-auto md:top-auto lg:bottom-4 lg:left-4 lg:right-auto lg:top-auto">
              <button
                onClick={() => setIsLightBoxClicked(true)}
                className="flex items-center gap-[14px] bg-galleria-black/85 px-4 py-[14px] text-[10px] font-bold uppercase tracking-[2.14px] text-galleria-white transition-colors hover:bg-galleria-white/25"
                aria-label="Open image in lightbox"
              >
                <Image src={iconViewImage} alt="view image icon" />
                View Image
              </button>
            </div>

            <div>
              <Image
                placeholder="blur"
                priority
                className="size-full object-cover md:max-w-[520px]  lg:max-w-[475px]"
                src={
                  matches
                    ? galleriaData[currentIndex]?.images?.hero?.small
                    : galleriaData[currentIndex]?.images.hero.large
                }
                alt={`Artwork titled ${galleriaData[currentIndex]?.name}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        {galleriaData[currentIndex] && (
          <motion.div
            key={galleriaData[currentIndex].name}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              duration: 0.2
            }}
            className="absolute -bottom-16  z-20 max-w-[280px] bg-galleria-white  p-6 md:-right-14 md:bottom-auto md:top-0 md:max-w-[445px] md:px-16 md:pb-16  md:pt-0 lg:-right-14 lg:bottom-auto lg:top-0 lg:max-w-[445px] lg:px-16 lg:pb-16 lg:pt-0"
          >
            <h3 className="w-full text-heading2 font-bold md:text-heading1 lg:text-heading1">
              {galleriaData[currentIndex]?.name}
            </h3>
            <span className="mb:mt-6 mt-2 inline-block text-body text-galleria-darkGray lg:mt-6">
              {galleriaData[currentIndex]?.artist?.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

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
            className="absolute -bottom-32 md:right-0 md:top-72 lg:-bottom-16 lg:right-40 lg:top-auto"
          >
            <Image
              placeholder="blur"
              className="size-16 object-cover md:size-32 lg:size-32"
              src={galleriaData[currentIndex]?.artist.image}
              alt={`Portrait of artist name ${galleriaData[currentIndex]?.artist.name}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroLeft;
