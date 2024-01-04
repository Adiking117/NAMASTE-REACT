import { useEffect,useState } from "react"
import { swiggy_api_URL } from '../utils/constants.js';

const useRestaurantCard = () => {
    const [resCard,setResCard] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        const data1 = await fetch(swiggy_api_URL)
        const json = await data1.json();
        console.log("json",json)
        const arr = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log("Arr",arr)
        setResCard(arr)
    }
    return resCard;
}

export default useRestaurantCard;