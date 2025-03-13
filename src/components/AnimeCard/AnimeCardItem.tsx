"use client";
import Image from "next/image";

interface AnimeCardItemProps {
  id: number;
  title: string;
  imageUrl: string;
}

export const AnimeCardItem = ({ id, title, imageUrl }: AnimeCardItemProps) => {
  return (
    <div
      data-testid={`anime-card-${id}`}
      className="w-full h-[240px] sm:h-[387px] relative rounded-lg shadow-lg overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 160px, 310px"
        priority={false}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
        <h2
          id={`anime-title-${id}`}
          className="text-base sm:text-xl font-bold mb-2 text-white"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};
