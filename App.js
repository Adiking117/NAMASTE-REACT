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

// const RestaurantCard = (props) => {
//     console.log(props)
//     return (
//         <div className='res-card'>
//             <img className='res-logo' src={rescard}/>
//             <h3>{props.resname}</h3> 
//             <h4>{props.cuisine}</h4>   
//             <h4>{props.rating}</h4> 
//             <h4>{props.deltime}</h4>       
//         </div>
//     )
// }

const RestaurantCard = (props) => {
    const { resname,cuisine,rating,deltime } = props
    // console.log(props)
    return (
        <div className='res-card'>
            <img className='res-logo' src={rescard}/>
            <h3>{resname}</h3> 
            <h4>{cuisine}</h4>   
            <h4>{rating}</h4> 
            <h4>{deltime}</h4>       
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
                <RestaurantCard resname="KFC" cuisine="Fast Food" rating="4.5 Stars" deltime="30 minutes"/>
                <RestaurantCard resname="Burger King" cuisine="Burger" rating="4.2 Stars" deltime="35 minutes"/>
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
