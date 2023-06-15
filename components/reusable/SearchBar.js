'use client'

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="w-full h-auto my-6">
      <div className="flex items-center justify-center space-x-5 max-w-450px sm:max-w-[900px] md:max-w-[1250px] mx-auto">
        <input
          className="border border-gray-700 h-14 w-2/3 pl-2 rounded-xl text-base md:text-lg"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
