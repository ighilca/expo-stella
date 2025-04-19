'use client';

import Image from "next/image";
import Masonry from 'react-masonry-css';

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MasonryGridProps {
  photos: Photo[];
}

export default function MasonryGrid({ photos }: MasonryGridProps) {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {photos.map((photo, index) => {
        const aspectRatio = photo.width / photo.height;
        return (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-gray-100"
            style={{ 
              width: '100%',
              aspectRatio: aspectRatio
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg font-medium mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.alt.split(' - ')[1]}
                </p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Commander l'œuvre
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Masonry>
  );
} 