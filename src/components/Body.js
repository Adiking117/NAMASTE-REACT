import RestaurantCard from './RestaurantCard.js'
import { useState } from 'react';
import restaurantList from '../utils/mockData.js';


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}


const Body = () => {

    // Local State Variable - Super Power Variable
    const [listOfRestaurants,setListOfRestaurants] = useState(restaurantList);
    const [searchText,setSearchText] = useState("");

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' 
                        onClick={ () => 
                            {
                                const filteredList = listOfRestaurants.filter(
                                    (res)=> res.data.avgRating > 4
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
                ></button>   
            </div>
            <div className='res-container'>
                {
                  listOfRestaurants.map(
                    (restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    )
}

export default Body;