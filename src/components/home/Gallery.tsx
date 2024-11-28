import React from 'react';
import { CardProps } from '../../types';

const ArtCard: React.FC<CardProps> = ({ imageUrl, artist, title }) => (
  <div className="transform transition-all hover:-translate-y-1 hover:shadow-xl">
    <div className="relative rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <p className="text-white text-sm">@{artist}</p>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const artworks = [
    {
      imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
      artist: "coplin",
      title: "Abstract Waves"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5",
      artist: "andrea",
      title: "Color Study"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      artist: "marcus",
      title: "Digital Dreams"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208",
      artist: "sophia",
      title: "Urban Perspective"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
      artist: "elena",
      title: "Abstract Motion"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1575995872537-3793d29d972c",
      artist: "lisa",
      title: "Modern Expression"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Artworks</h2>
        <p className="mt-4 text-lg text-gray-600">Discover unique pieces from talented artists</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artworks.map((artwork, index) => (
          <ArtCard key={index} {...artwork} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;