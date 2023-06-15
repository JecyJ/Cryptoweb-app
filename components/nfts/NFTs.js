'use client'

import SearchBar from "@components/reusable/SearchBar";
import { useEffect, useState } from "react";


const NFTs = () => {
    const [nft, setNft] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(
            "https://api.coingecko.com/api/v3/nfts/list?per_page=250&page=1"
          )
            .then((res) => res.json())
            .then((data) => {
              setNft(data);
            })
            .catch((error) => {
              console.log("Error fetching coin data:", error);
            });
    }, [])

    const handleSearch = (text) => {
        setSearchText(text.toLowerCase());
      };
      
    
      const filteredNft = searchText ? nft.filter((nfts) => nfts.name.toLowerCase().includes(searchText)) : nft;
    
    //   const getPriceChangeColor = (changePercentage) => {
    //     if (changePercentage > 0) {
    //       return "text-green-500";
    //     } else if (changePercentage < 0) {
    //       return "text-red-500";
    //     }
    //     return "";
    //   };
    
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
                        <th className="hidden sm:table-cell">Symbol</th>
                        <th>Name</th>
                        <th>Assets</th>
                        <th className="hidden md:table-cell">Address</th>                  
                        </tr>
                    </thead>
                    <tbody className="text-center py-2">
                        {filteredNft.map((nfts) => (
                        <tr key={nfts.id}>
                            <td className="hidden sm:table-cell">{nfts.symbol}</td>
                            <td>{nfts.name}</td>
                            <td>{nfts.asset_platform_id}</td>
                            <td className="hidden md:table-cell">{nfts.contract_address}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      );
}

export default NFTs;