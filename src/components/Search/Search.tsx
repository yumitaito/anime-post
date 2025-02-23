"use client";

import { ChangeEvent } from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-8 max-w-md mx-auto">
      <input
        type="text"
        placeholder="アニメを検索..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-white/90"
      />
    </div>
  );
};
