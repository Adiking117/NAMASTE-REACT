import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items : []
    },
    reducers : {
        addItem: (state , action)=>{
            // Redux uses ImmerJs behind the Scenes
            // mutating the state
            state.items.push(action.payload)
        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearCart : (state)=> {
            // Mutate a state
            // state.items.length = 0

            // state = []
            // we cannot do this coz we are not modifying the state
            // but changing reference of it

            // we can either mutate a state or return a state
            return {items : []}
            // this new array will be replaced inside Original State
        }
    }
})

// console.log(cartSlice)

export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer