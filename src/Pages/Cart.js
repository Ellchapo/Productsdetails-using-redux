import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
 const products=useSelector(state=>state.Product);
  console.log(products)

  return (
    <div>Cart
     {
        products.length>0 && products.map((d)=>{
            return <div key={d.details.id} style={{background:"black",color:'white'}}>
                {d.details.title}
                
            </div>
        })
     }
    </div>
  )
}

export default Cart