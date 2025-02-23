"use client";

import { normalizeString } from "@/utils/normalizeString";
import { AnimeCardItem } from "./AnimeCardItem";
import { useAnimes } from "@/hooks/useAnime";

interface AnimeCardProps {
  searchTerm: string;
}

export const AnimeCard = ({ searchTerm }: AnimeCardProps) => {
  const { animes, isLoading, error } = useAnimes();

  const filteredAnimes = animes.filter((anime) => {
    const normalizedTitle = normalizeString(anime.title);
    const normalizedSearch = normalizeString(searchTerm);
    return normalizedTitle.includes(normalizedSearch);
  });

  if (isLoading)
    return (
      <div className="text-white flex justify-center items-center h-[10vh] text-3xl">
        Loading...
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1320px] mx-auto px-4">
      {filteredAnimes.map((anime) => (
        <AnimeCardItem key={anime.id} {...anime} />
      ))}
    </div>
  );
};
