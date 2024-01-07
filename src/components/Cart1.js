import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart1 = () => {

    // This makes sure we have subscribed to that specific portion of the store
    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }


    return (
        <div>
            <h1>Cart</h1>
            <div>
                <button onClick={handleClearCart}>Clear Button</button>
                {cartItems.length === 0 && <h1>Cart is Empty</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart1;