import RestaurantCard from './RestaurantCard.js'
import { useState } from 'react';
import restaurantList from '../utils/mockData.js';

// const Body = () => {
//     // Normal JS variable 
//     let listOfRestaurants = [
//     {
//         data: {
//           id: "75453",
//           name: "Domino's Pizza",
//           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//           cuisines: ["Pizzas"],
//           costForTwo : 40000,
//           deliveryTime: 45,
//           avgRating: "4.5",
//         }
//     },
//     {
//         data: {
//           id: "74453",
//           name: "KFC",
//           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//           cuisines: ["Chicken"],
//           costForTwo : 50000,
//           deliveryTime: 45,
//           avgRating: "3.8",
//         }
//     },
//     {
//         data: {
//           id: "79453",
//           name: "MC Donalds",
//           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//           cuisines: ["Burger"],
//           costForTwo : 35000,
//           deliveryTime: 45,
//           avgRating: "4.2",
//         }
//     },
//     ];
//     // Console logs filters but UI doesnt get updated 
//     return (
//         <div className='body'>
//             <div className='filter'>
//                 <button className='filter-btn' 
//                         onClick={ () => 
//                             {
//                                 listOfRestaurants = listOfRestaurants.filter(
//                                     (res)=> res.data.avgRating > 4
//                                 );
//                                 console.log(listOfRestaurants)
//                             }
//                         }>
//                     Top Rated Restaurant
//                 </button>
//             </div>
//             <div className='res-container'>
//                 {
//                   listOfRestaurants.map(
//                     (restaurant) => 
//                     <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
//                   )
//                 }
//             </div>
//         </div>
//     )
// }


const Body = () => {

    // Local State Variable - Super Power Variable
    const [listOfRestaurants,setListOfRestaurants] = useState(restaurantList);


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