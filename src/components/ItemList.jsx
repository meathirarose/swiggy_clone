import React from 'react'

const ItemList = ({items}) => {
    console.log(items);
    
  return (
    <div>
      {items.map(item => 
        <div key={item?.card?.info?.id} className="p-2 m-2 text-left">            
          <div className="my-4 py-2 flex justify-between items-center">                
            <div>
              <span className="text-md font-semibold">{item?.card?.info?.name}</span>
              <p>
                ₹
                {item?.card?.info?.defaultPrice / 100
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </p>
          </div>
          <div>
            <button className="shadow-md bg-gray-100 text-green-700 px-8 py-2 mx-3 rounded-md font-bold">ADD</button>
          </div>
          </div>
        <hr />
      </div>
      )}
    </div>
  )
}

export default ItemList
