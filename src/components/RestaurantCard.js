import { CDN_URL } from "../utils/constants.js"

const RestaurantCard = (props) => {
    const { resData } = props
    const {cloudinaryImageId,name,cuisines,deliveryTime,avgRating,costForTwo} = resData
    return (
        <div className='res-card'>
            <img className='res-logo' 
            src={ CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3> 
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime} MINUTES</h4> 
            <h4>{avgRating} STARS</h4>   
            <h4>${costForTwo}</h4>       
        </div>
    )
}

export default RestaurantCard;