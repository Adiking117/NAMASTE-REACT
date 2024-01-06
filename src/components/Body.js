import RestaurantCard, { PromotedLabel } from './RestaurantCard.js'
import { useState,useEffect, useContext } from 'react';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import useRestaurantCard from '../utils/useRestaurantCard.js';
import UserContext from '../utils/UserContext.js'

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

function mapData(arr){
    const newarr = arr.map((res) => {
        const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating , isOpen } = res?.info;
        const { deliveryTime } = res?.info?.sla;
        const newobj = { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, deliveryTime , isOpen};
        return newobj;
    });
    return newarr;
}

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredList,setFilteredList] = useState([])
    const [searchText,setSearchText] = useState("");

    const resCard = useRestaurantCard();
    const PromotedRestaurant = PromotedLabel(RestaurantCard);
    
    useEffect(()=>{
        // console.log("rescard",resCard)
        const newarr = mapData(resCard);
        setListOfRestaurants(newarr);
        setFilteredList(newarr);
    },[resCard])
    

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>Net Gela</h1>
        )
    }
    // console.log("rEstaurant list", listOfRestaurants)
    // console.log("filteredList", filteredList);
    // console.log("Body Component Re-Rendered after updating state Variable")

    const {loggedInUser , setUserName} = useContext(UserContext)
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
            <div>
                <label htmlFor="name">UserName :</label>
                <input
                    id="name"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className='res-container'>
                {
                  filteredList.map(
                    (restaurant) => 
                    <Link key={restaurant.id} to={"/restaurants/"+restaurant.id}>
                    {
                        (restaurant.isOpen)
                        ?
                        (<PromotedRestaurant resData={restaurant}/>)
                        :
                        (<RestaurantCard resData={restaurant}/>)
                    }
                    </Link>
                  )
                }
            </div>
        </div>
    )
}

export default Body;