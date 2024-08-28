import ResturantCard from "./ResturantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfResturants, setListOfResturants] = useState([]);
  let [filteredResturants, setFilteredResturants] = useState([]);

  let [searchText, setSearchText] = useState(" ");

  console.log(listOfResturants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connecton.</h1>
    );

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ml-9">
        <div className="search m-0.5 p-0.5">
          {/* for search */}
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-6 py-0.5 ml-3 bg-gray-300 m-2 rounded-xl"
            onClick={() => {
              const filterSearchRestaurants = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturants(filterSearchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-0.5 p-0.5">
          {/* for filter button */}
          <button
            className="px-6 py-0.5 ml-3 bg-gray-300 m-2 rounded-xl"
            onClick={() => {
              const filteredResturants = listOfResturants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfResturants(filteredResturants);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap mx-12">
        {filteredResturants.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/resturant/" + resturant.info.id}
            className="res-item-names"
          >
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
