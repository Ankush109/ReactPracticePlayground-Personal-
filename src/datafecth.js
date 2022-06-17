import React, { useState, useEffect } from 'react'
import axios from "axios"
  function Datafecth() {
    const [posts, setpost] = useState([])
  

    const options = {
      method: 'GET',
      url: 'https://stock-and-options-trading-data-provider.p.rapidapi.com/options/aapl',
      headers: {
        'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
        'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com',
        'X-RapidAPI-Key': 'e5d18a5de9msh6ad77ce245bd0ecp14eac2jsnef482c55cf85'
      }
    };
 useEffect(()=>{
     axios.request(options).then(res=>{
         console.log(res);
         setpost(res.data)
     }).catch(err=>{
         console.log(err);
     })
 },[])

        return (
            <div>
                <ul>
                    {
                        posts.map(post => <li>{posts}</li>)
                    }
                </ul>
            </div>
        )
    }

export default Datafecth