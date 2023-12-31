import React from 'react';
import ReactDOM  from 'react-dom/client';
import logo from './images/logo.png';
import rescard from './images/res-card.jpg'

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className='res-card'>
            <img className='res-logo' src={rescard}/>
            <h3>KFC</h3> 
            <h4>Fast Food,Not Indian</h4>   
            <h4>4.5 stars</h4> 
            <h4>30 minutes</h4>       
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className ="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
