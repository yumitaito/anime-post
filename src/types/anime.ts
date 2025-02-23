export interface AnimeMedia {
  id: number;
  title: {
    native: string;
  };
  coverImage: {
    extraLarge: string;
  };
}

export interface Anime {
  id: number;
  title: string;
  imageUrl: string;
}

export interface AnimeCardItemProps {
  id: number;
  title: string;
  imageUrl: string;
}
