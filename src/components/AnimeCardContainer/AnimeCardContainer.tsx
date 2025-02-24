"use client";

import { useState } from "react";
import { AnimeCard } from "../AnimeCard/AnimeCard";
import { Search } from "../Search/Search";

interface AnimeCardContainerProps {
  fromVoting?: boolean;
}

export const AnimeCardContainer = ({
  fromVoting = false,
}: AnimeCardContainerProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AnimeCard searchTerm={searchTerm} fromVoting={fromVoting} />
    </>
  );
};
