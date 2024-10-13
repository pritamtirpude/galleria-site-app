'use client';

import { useGalleriaContext } from '@/utils/hooks';
import { AnimatePresence } from 'framer-motion';
import LightBoxModal from '@/components/LightBoxModal';
import BottomNavigation from '@/components/BottomNavigation';
import HeroLeft from '@/components/HeroLeft';
import HeroRight from '@/components/HeroRight';

function GalleryDetailPage() {
  const { isLightBoxClicked } = useGalleriaContext();

  return (
    <section>
      <AnimatePresence mode="wait" initial={false}>
        {isLightBoxClicked && <LightBoxModal />}
      </AnimatePresence>
      <div className="w-full px-6 pb-14 pt-6 md:p-10 lg:mx-auto lg:max-w-7xl lg:px-0 lg:pb-32 lg:pt-0">
        <div className="flex flex-col overflow-hidden md:flex-col md:overflow-hidden lg:mb-[75px] lg:mt-[100px] lg:flex-row lg:overflow-visible">
          {/* Hero Left */}
          <HeroLeft />
          {/* Hero Right */}
          <HeroRight />
        </div>
      </div>
      <BottomNavigation />
    </section>
  );
}

export default GalleryDetailPage;
