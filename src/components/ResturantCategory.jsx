import React from 'react'
import ItemList from './ItemList';

const ResturantCategory = ({cateData, showItems, setShowIndex}) => {

  const handleClick = () =>{
    setShowIndex()
  }
    
  return (
    <div>
        <div className='w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4'>
            <div className='flex justify-between py-4 cursor-pointer'
              onClick={handleClick}
            >
                <span className='font-medium text-lg'>{cateData.title} ({cateData.itemCards.length})</span>
                <span>⬇️</span>
            </div>
        {showItems && <ItemList items={cateData.itemCards} />}
        </div>
    </div>
  )
}

export default ResturantCategory
