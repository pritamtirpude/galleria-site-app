'use client';

import Image from 'next/image';
import { GalleryCardProps } from '@/utils/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

function GalleryCard({ data }: GalleryCardProps) {
  return (
    <Link
      href={`/gallery/${data?.slugname}`}
      aria-label={`View details of ${data.name} by ${data.artist.name}`}
    >
      <motion.div
        whileHover={{
          scale: 0.9
        }}
        className="relative cursor-pointer overflow-hidden after:absolute after:top-0   after:size-full after:transition-colors after:hover:bg-gradient-to-t after:hover:from-transparent after:hover:to-galleria-white/85"
        tabIndex={0}
      >
        <Image
          src={data.images.thumbnail}
          alt={`Artwork titled ${data.name} by ${data.artist.name}`}
          priority
          className="size-full object-cover"
          placeholder="blur"
        />

        <div className="absolute bottom-0  w-full  bg-gradient-to-b from-transparent to-galleria-black/85 p-8">
          <p className="flex flex-col gap-[7px]">
            <span className="inline-block text-heading2 font-bold text-galleria-white">
              {data.name}
            </span>
            <span className="inline-block text-subhead2  text-galleria-white">
              {data.artist.name}
            </span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default GalleryCard;
