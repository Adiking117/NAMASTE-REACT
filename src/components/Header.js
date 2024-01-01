import { useState } from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    let [btnName,setBtnName] = useState("Log-In");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src = {logo}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>{
                        (btnName==="Log-In") ? btnName="Log-Out" : btnName="Log-In";
                        setBtnName(btnName)
                    }}>{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;