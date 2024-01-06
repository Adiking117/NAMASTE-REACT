import ItemList from "./ItemList";
// import { useState } from "react";

const RestaurantCategory = (props) => {
    const {data,showItems,setShowIndex} = props
    // console.log("data category",data)


    // UnControlled Component
    // const [showItems,setShowItems] = useState(showItems)
    // const handleClick = () => {
    //     setShowItems(!showItems)
    // }

    const handleClick = () => {
        // modify state variables of parent with children
        setShowIndex();
    }

    return (
        <div className="category">
            <div>
                <div className="accordian" onClick={handleClick}>
                    <span className="accordian-item">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;