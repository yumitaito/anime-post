"use client";

import { useState } from "react";
import { AnimeCard } from "../AnimeCard/AnimeCard";
import { Search } from "../Search/Search";

export const AnimeCardContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AnimeCard searchTerm={searchTerm} />
    </>
  );
};
