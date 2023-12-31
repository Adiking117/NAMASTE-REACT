import { useState , useContext } from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    let [btnName,setBtnName] = useState("Log-In");
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext)
    // console.log(data)
    const {loggedInUser} = data

    // Subscribing to a store using selector
    const cartItems = useSelector( (store) => store.cart.items)
    // console.log(cartItems)

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src = {logo}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    
                    <button className='login-btn' onClick={()=>{
                        (btnName==="Log-In") ? btnName="Log-Out" : btnName="Log-In";
                        setBtnName(btnName)
                    }}>{btnName}
                    </button>

                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;