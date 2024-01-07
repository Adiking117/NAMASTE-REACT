import { useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function getName(resInfo){
    const resName = resInfo.cards[0]?.card.card.info;
    const {id,name,cloudinaryImageId,city,avgRating} = resName
    const newobj1 = {id,name,cloudinaryImageId,city,avgRating}
    return newobj1;
}

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [vegOnly,setVegOnly] = useState(false)
    const [showIndex,setShowIndex] = useState()

    // custom hook
    const resInfo = useRestaurantMenu(resId);
    // console.log(resInfo)
    
    const handleVegOnlyClick = () => {
        setVegOnly((setVeg)=> !setVeg)
    };

    if(resInfo===null) return <Shimmer/>;

    const resdetails = getName(resInfo);
    // console.log("resdetails" ,resdetails)

    const resCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log(resCards)
    const categories = resCards.filter((c)=>{
        return c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    // console.log(categories)



    return (
        <div className="menu">
            <h1>{resdetails.name}</h1>
            <h3>{resdetails.city} - {resdetails.avgRating}</h3>
            <br/>
            {   
                vegOnly 
                ? 
                <button onClick={handleVegOnlyClick}>All Items</button> 
                :
                <button onClick={handleVegOnlyClick}>Veg-Only</button>
            }
            <div>
                {
                    categories.map((c,index)=>{
                        return <div key = {c?.card?.card.title}>
                            <RestaurantCategory 
                                data={c?.card?.card}
                                showItems={index === showIndex ? true : false} // Controlled Component
                                setShowIndex = {()=>setShowIndex(index)}
                                vegOnly = {vegOnly}
                            />
                        </div> 
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantMenu;