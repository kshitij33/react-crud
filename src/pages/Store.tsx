import React from 'react'
import storeItems from '../data/items.json';
import Card from '../components/Card';
const Store = () => {
  return (
    <div>
        <p className='text-4xl'>Store</p>
        {/* <div className='flex'> */}
        {storeItems.map((item, index) => (
            <div className='p-8'>
                <Card name={item.name} imgUrl={item.imgUrl} price={item.price} />
            </div>
        ))}
        </div>
        // </div>
    // </div>
  )
}

export default Store