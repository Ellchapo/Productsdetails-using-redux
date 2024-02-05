import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [data,setData]=useState("");

    useEffect(()=>{
          fetch('https://dummyjson.com/products').then((d)=>d.json()).then((d)=>setData(d.products))
    },[])
  return (
    <div>Home

        {
            data && data.map((d)=>{
              return (<div>
                <img src={d.thumbnail}>

                </img>
                <Link to={`/product/${d.id}`}>ProductDetails</Link>
              </div>)
            })
        }
    </div>
  )
}

export default Home