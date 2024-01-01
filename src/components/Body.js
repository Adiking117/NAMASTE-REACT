import RestaurantCard from './RestaurantCard.js'
import { useState,useEffect } from 'react';
import { swiggy_api_URL } from '../utils/constants.js';
import Shimmer from './Shimmer.js';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

function mapData(arr){
    return arr.map((res) => {
        const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } = res?.info;
        const { deliveryTime } = res?.info?.sla;
        const newobj = { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, deliveryTime };
        return newobj;
    });
    // return newarr;
}

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(swiggy_api_URL);
        const json = await data.json();
        const arr = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const newarr = mapData(arr);
        setListOfRestaurants(newarr);
    }

    console.log("Body Component Re-Rendered after updating state Variable")

    // // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' 
                        onClick={ () => 
                            {
                                const filteredList = listOfRestaurants.filter(
                                    (res)=> res.avgRating > 4.5
                                );
                                setListOfRestaurants(filteredList)
                            }
                        }>
                    Top Rated Restaurant
                </button>
            </div>
            <div className='search-container'>
                <input 
                    type = "text"
                    className = "search-input"
                    value = {searchText}
                    placeholder='Enter name of your restaurant'
                    onChange={ (e) => setSearchText(e.target.value) }
                />
                <button className='search-btn'
                        onClick={()=>{
                            const filteredData = filterData(searchText,listOfRestaurants)
                            setListOfRestaurants(filteredData)
                        }}
                >Search</button>   
            </div>
            <div className='res-container'>
                {
                  listOfRestaurants.map(
                    (restaurant) => 
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    )
}

export default Body;