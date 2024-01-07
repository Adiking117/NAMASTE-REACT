import ItemList from "./ItemList";
// import { useState } from "react";

const RestaurantCategory = (props) => {
    const {data,showItems,setShowIndex,vegOnly} = props
    // console.log("data category",data)


    // // UnControlled Component
    // const [showItems,setShowItems] = useState(showItems)
    // const handleClick = () => {
    //     setShowItems(!showItems)
    // }

    const handleClick = () => {
        // modify state variables of parent with children
        setShowIndex();
    }
    
    const filteredItems = vegOnly ? data.itemCards.filter((i)=> i.card.info.isVeg===1) : data.itemCards

    return (
        <div className="category">
            <div>
                <div className="accordian" onClick={handleClick}>
                    <span className="accordian-item">
                        {data.title} ({filteredItems.length})
                    </span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                {showItems && <ItemList filteredItems={filteredItems}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;