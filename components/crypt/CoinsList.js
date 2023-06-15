'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "@components/reusable/SearchBar";

const CoinsList = () => {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
      })
      .catch((error) => {
        console.log("Error fetching coin data:", error);
      });
  }, []);

  const handleSearch = (text) => {
    setSearchText(text.toLowerCase());
  };
  

  const filteredCoins = searchText ? coins.filter((coin) => coin.name.toLowerCase().includes(searchText)) : coins;

  const getPriceChangeColor = (changePercentage) => {
    if (changePercentage > 0) {
      return "text-green-500";
    } else if (changePercentage < 0) {
      return "text-red-500";
    }
    return "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && searchText === "") {
      setCoins([]); // Clear previous search results when Backspace is pressed and search text is empty
    } else if (e.key.length === 1) {
      setSearchText((prevSearchText) => prevSearchText + e.key.toLowerCase()); // Automatically search on every letter key stroke
    }
  };


  return (
    <section className="w-full h-auto my-5">
      <SearchBar onSearch={handleSearch} />
      <div 
        className="max-w-450px sm:max-w-[900px] md:max-w-[1250px] mx-auto"
        onKeyDown={handleKeyDown}
        tabIndex={0} // Allows the div to receive keyboard events
      >
        <table className="w-full text-sm sm:text-base font-normal">
          <thead>
            <tr className="py-2">
              <th>Rank</th>
              <th>Name</th>
              <th className="hidden sm:table-cell">Symbol</th>
              <th>Price</th>
              <th>24hr %</th>
              <th className="hidden md:table-cell">High</th>
              <th className="hidden md:table-cell">Low</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody className="text-center py-2">
            {filteredCoins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td className="flex space-x-2">
                  <Image
                    src={coin.image}
                    alt="/"
                    width={22}
                    height={22}
                  />
                  <h1 className="w-full">{coin.name}</h1>
                </td>
                <td className="hidden sm:table-cell">{coin.symbol}</td>
                <td>{coin.current_price}</td>
                <td className={getPriceChangeColor(coin.price_change_percentage_24h)}>
                  {coin.price_change_percentage_24h}
                </td>
                <td className="hidden md:table-cell">{coin.high_24h}</td>
                <td className="hidden md:table-cell">{coin.low_24h}</td>
                <td>{coin.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CoinsList;
