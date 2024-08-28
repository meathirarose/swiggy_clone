import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import useResturantMenu from '../utils/useResturantMenu';
import ResturantCategory from './ResturantCategory';

const ResturantMenu = () => {

    const {resId} = useParams();

    const resInfo = useResturantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) 
        return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cate) => 
      cate.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

  return (
    <div className='text-center'> 
      <h1 className='font-extrabold my-8 text-2xl'>{name}</h1>
      <h5 className='font-semibold text-lg'>{cuisines.join(",")} - {costForTwoMessage}</h5>
      <h2 className='font-bold my-4'>---MENU---</h2>
      {categories.map((category, index) =>(
        <ResturantCategory 
          key={category?.card?.card?.title}
          cateData={category?.card?.card} 
          showItems={index === showIndex? true: false}
          setShowIndex={()=>setShowIndex(index)}
        />))}
    </div>
  )
}

export default ResturantMenu
