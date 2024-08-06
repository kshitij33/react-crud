import React, { useState } from 'react'
import { formatCurrency } from '../utilities/formatCurrency'
import { Button } from '@mui/material'

type propTypes =  {
    name: string
    imgUrl: string
    price: number

}


const Card = ({ name, imgUrl, price }: propTypes) => {
    const [quantity, setQuantity] = useState(0);
    // const quantity = 0;
    const updateQuantity = ()=>{
        setQuantity(quantity+1);
    }

    const updateQuantityRemove = ()=>{
        setQuantity(quantity-1);
    }


  return (
    <div className='grid grid-cols-1 justify-items-center'>
        <img className='w-72 cursor-pointer' src={imgUrl} alt="" />
        <div className=' flex justify-between w-72 align-baseline'>
            <div className='text-xl p-1'>
            {name}
            </div>
            <div className='text-xl p-1 text-gray-800'>
            {formatCurrency(price)}
            </div>
        </div>
        <div className=''>
            
            {quantity === 0? (
                <button onClick={updateQuantity} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-100">Add to Cart</button>
            ):<><div className='text-center'>
            <span className='font-bold'>{quantity}</span> in Cart
        </div><Button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={updateQuantity}>Add</Button> <Button className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800' onClick={updateQuantityRemove}>Remove</Button></>}
        </div>
    </div>
  )
}

export default Card