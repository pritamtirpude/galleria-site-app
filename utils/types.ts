import { StaticImageData } from 'next/image';

export type GalleryType = {
  name: string;
  year: number;
  column: number;
  slugname: string;
  description: string;
  source: string;
  artist: {
    image: StaticImageData;
    name: string;
  };
  images: {
    thumbnail: StaticImageData;
    hero: {
      small: StaticImageData;
      large: StaticImageData;
    };
    gallery: StaticImageData;
  };
};

export type GalleryCardProps = {
  data: GalleryType;
};
