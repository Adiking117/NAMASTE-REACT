import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_menu_api_URL,IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

function getName(resInfo){
    const resName = resInfo.cards[0]?.card.card.info;
    const {id,name,cloudinaryImageId,city,avgRating} = resName
    const newobj1 = {id,name,cloudinaryImageId,city,avgRating}
    return newobj1;
}

function getItems(resInfo){
    const items = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards
    // console.log(items)
    const newobj2 = items.map((res)=>{
        const {id,name,price,defaultPrice,imageId,isVeg=0} = res.card.info
        return {id,name,price,defaultPrice,imageId,isVeg}
    })
    return newobj2;
}

function mapItems(items){
    return items.map((item)=>{
        return (
                    <div key={item.id}>
                        <li>
                            {item.name} -- Price is Rs.{item.price/100 || item.defaultPrice/100}
                        </li>
                        <img src = {IMG_CDN_URL+item.imageId}/>
                    </div>
        )         
    })
}


const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo,setResInfo] = useState(null)
    const [vegOnly,setVegOnly] = useState(false)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch(swiggy_menu_api_URL+resId)
        const json = await data.json()
        //setResInfo(json.data);
        setResInfo(json.data)
    }
    
    const handleVegOnlyClick = () => {
        setVegOnly(true)
    };

    if(resInfo===null) return <Shimmer/>;

    const resdetails = getName(resInfo);
    // console.log("resdetails" ,resdetails)
    const items = getItems(resInfo);
    // console.log("all-items" ,items)
    const vegItems = items.filter((item)=>{return item.isVeg===1})
    // console.log("veg-items",vegItems);

    return (
        <div className="menu">
            <h1>{resdetails.name}</h1>
            <h3>{resdetails.city} - {resdetails.avgRating}</h3>
            <br/>
            <button onClick={handleVegOnlyClick}>Veg-Only</button>
            <ul className="item-list">
                {
                    (vegOnly) ? mapItems(vegItems) : mapItems(items)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;