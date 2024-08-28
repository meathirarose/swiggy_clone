import React from 'react'

const ItemList = ({items}) => {
    console.log(items);
    
  return (
    <div>
      {items.map(item => 
        <div key={item?.card?.info?.id}>
            <div>
                <p className='text-md font-semibold'>{item?.card?.info?.name}</p>
                <p>
                  ₹{item?.card?.info?.defaultPrice/100 ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}
                </p>
            </div>
        </div>
      )}
    </div>
  )
}

export default ItemList
