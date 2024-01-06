import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {data} = props
    // console.log("data category",data)
    return (
        <div className="category">
            <div>
                <div className="accordian">
                    <span className="accordian-item">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                <ItemList items={data.itemCards}/>
            </div>
        </div>
    )
}

export default RestaurantCategory;