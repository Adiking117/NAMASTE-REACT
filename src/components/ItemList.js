import { CDN_URL } from "../utils/constants"

const ItemList = (props) => {
    const {items} = props
    // console.log("items ",items)
    return(
        <div className="item-list">
            {
                items.map((item)=>{
                    return (
                        <div key = {item.card.info.id}>
                            <span>{item.card.info.name}</span>
                            <span> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            {/* <span>{item.card.info.description}</span> */}
                            <img src={CDN_URL+item.card.info.imageId}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList