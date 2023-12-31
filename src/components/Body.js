import RestaurantCard from './RestaurantCard.js'
import restaurantList from '../utils/mockData.js';

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {
                  restaurantList.map(
                    (restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    )
}

export default Body;