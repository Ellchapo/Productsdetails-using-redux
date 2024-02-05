import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { addProduct } from '../Store/ProductSlice';

function ProductDetails() {
    
    const dispatch=useDispatch()

    const {id}=useParams();

    const [details,setDetails]=useState("");

    useEffect(()=>{
          fetch(`https://dummyjson.com/products/${id}`).then((d)=>d.json()).then((d)=>setDetails(d))
    },[])
   
    const addHandler=()=>{
        dispatch(addProduct({details}))
    }
  return (
    <div>ProductDetails
     {
        details && <div>
            <img src={details.thumbnail}></img>
            <h2>{details.title}</h2>
            <h2>{details.description}</h2>
            
            <h2>{details.price}</h2>
        </div>
     }
       {
        <button onClick={addHandler}>Add to cart</button>
       }
    </div>
  )
}

export default ProductDetails