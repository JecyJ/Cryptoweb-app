'use client'

import SearchBar from "@components/reusable/SearchBar";
import Image from "next/image";
import { useEffect, useState } from "react";


const Exchange = () => {
    const [exchange, setExchange] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(
            "https://api.coingecko.com/api/v3/exchanges"
          )
            .then((res) => res.json())
            .then((data) => {
              setExchange(data);
            })
            .catch((error) => {
              console.log("Error fetching coin data:", error);
            });
    }, [])

    const handleSearch = (text) => {
        setSearchText(text.toLowerCase());
    };

    const filteredExchange = searchText ? exchange.filter((exchanges) => exchanges.name.toLowerCase().includes(searchText)) : exchange;

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
                <table className="w-full text-base sm:text-lg font-normal">
                    <thead>
                        <tr className="py-2">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Year Established</th>
                        <th className="hidden md:table-cell">Country</th>
                        <th className="hidden sm:table-cell">Trust Score</th>                        
                        <th>24hrs</th>
                        </tr>
                    </thead>
                    <tbody className="text-center py-2">
                        {filteredExchange.map((exchanges) => (
                        <tr key={exchanges.id}>
                            <td>{exchanges.trust_score_rank}</td>
                            <td className="flex space-x-2">
                                <Image
                                    src={exchanges.image}
                                    alt="/"
                                    width={40}
                                    height={10}
                                />
                                <h1 className="w-full">{exchanges.name}</h1>
                            </td>
                            <td>{exchanges.year_established}</td>
                            <td className="hidden md:table-cell">{exchanges.country}</td>
                            <td className="hidden sm:table-cell">{exchanges.trust_score}</td>
                            <td className={getPriceChangeColor(exchanges.trade_volume_24h_btc)}>
                                {exchanges.trade_volume_24h_btc}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      )
}

export default Exchange;