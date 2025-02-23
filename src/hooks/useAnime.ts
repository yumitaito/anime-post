import { useState, useEffect } from "react";
import { fetchAnimes } from "@/services/anime/api";
import { Anime, AnimeMedia } from "@/types/anime";

export const useAnimes = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadAnimes = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAnimes();
        const fetchedAnimes: Anime[] = data.map((anime: AnimeMedia) => ({
          id: anime.id,
          title: anime.title.native,
          imageUrl: anime.coverImage.extraLarge,
        }));
        setAnimes(fetchedAnimes);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Unknown error occurred")
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimes();
  }, []);

  return { animes, isLoading, error };
};
