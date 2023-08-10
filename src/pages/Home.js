import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en')
        .then((res) => {
            setCoins(res.data)
            console.log(res.data)
        })
    }, [])

  return (
    <div className='p-5'>
        <h1 className='text-center p-6 text-2xl'>Crypto App</h1>
        <div className='flex justify-center gap-4 flex-wrap text-center '>
            {
                coins.map(coin => 
                    <div className='w-[200px] border border-zinc-800 rounded-xl p-3' key={coin.id}>
                        <h2>{coin.name}</h2>
                        <h3>{coin.symbol}</h3>
                        <h4>$ {coin.current_price.toLocaleString()}</h4>
                        <img className='w-[40px] relative left-20' src={coin.image} />
                    </div>)
            }
        </div>
    </div>
  )
}

export default Home