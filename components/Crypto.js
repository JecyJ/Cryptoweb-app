'use client'


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';

const Crypto = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((res) => res.json())
      .then((data) => {
        setCoin(data.coins);
      })
      .catch((error) => {
        console.log('Error fetching coin data', error);
      });
  }, []);

  const getPriceChangeColor = (price) => {
    // Add your logic here to determine the CSS class based on price change
    // For example:
    if (price > 0) {
      return 'text-green-500';
    } else if (price < 0) {
      return 'text-red-500';
    } else {
      return '';
    }
  };

  const formatPrice = (price) => {
    return price.toFixed(6); // Format price to 3 decimal places
  };

  return (
    <section className='w-full h-auto my-10'>
      <div className='max-w-450px sm:max-w-[900px] md:max-w-[1250px] mx-auto'>
        <div className='flex items-center justify-between pb-2'>
          <div>
            <Image src='/images/Trending.png' alt='/' width={150} height={150} />
          </div>
          <Link href='/crypto'>
            <p className='flex items-center justify-center text-[#3984F4]'>
              More <RiArrowDropRightLine />
            </p>
          </Link>
        </div>
        <table className='w-full text-sm sm:text-base font-normal'>
          <thead>
            <tr className='py-2'>
              <th>Rank</th>
              <th>Name</th>
              <th className='hidden sm:table-cell'>Symbol</th>
              <th>Price</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className='text-center py-2'>
            {coin.map((data) => (
              <tr key={data.item.id}>
                <td>{data.item.market_cap_rank}</td>
                <td className='flex space-x-2'>
                  <Image src={data.item.small} alt='/' width={22} height={22} />
                  <h1 className='w-full'>{data.item.name}</h1>
                </td>
                <td className='hidden sm:table-cell'>{data.item.symbol}</td>
                <td className={getPriceChangeColor(data.item.price_btc)}>{formatPrice(data.item.price_btc)}</td>
                <td>{data.item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Crypto;