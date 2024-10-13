import React from 'react';
import GalleryCard from './GalleryCard';
import { galleriaData } from '@/utils/data';

type FlexColumnProps = {
  columnId: number;
};
function FlexColumn({ columnId }: FlexColumnProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-10">
      {galleriaData
        .filter((item) => item.column === columnId)
        .map((item) => (
          <GalleryCard key={item.name} data={item} />
        ))}
    </div>
  );
}

export default FlexColumn;
