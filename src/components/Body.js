import RestaurantCard from './RestaurantCard.js'
import { useState,useEffect } from 'react';
import { swiggy_api_URL } from '../utils/constants.js';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

function mapData(arr){
    const newarr = arr.map((res) => {
        const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } = res?.info;
        const { deliveryTime } = res?.info?.sla;
        const newobj = { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, deliveryTime };
        return newobj;
    });
    return newarr;
}

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredList,setFilteredList] = useState([])
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(swiggy_api_URL);
        const json = await data.json();
        console.log(json)
        const arr = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(arr)
        const newarr = mapData(arr);
        setListOfRestaurants(newarr);
        setFilteredList(newarr);
    }

    console.log("Body Component Re-Rendered after updating state Variable")

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' 
                        onClick={ () => 
                            {
                                const filteredList = listOfRestaurants.filter(
                                    (res)=> res.avgRating > 4.2
                                );
                                setFilteredList(filteredList)
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
                            setFilteredList(filteredData)
                        }}
                >Search</button>   
            </div>
            <div className='res-container'>
                {
                  filteredList.map(
                    (restaurant) => 
                    <Link key={restaurant.id} to={"/restaurants/"+restaurant.id}>
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    </Link>
                  )
                }
            </div>
        </div>
    )
}

export default Body;