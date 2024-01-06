import React , {lazy , Suspense, useEffect, useState} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header.js'
import Body from './components/Body.js'
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
// import Grocery from './components/Grocery.js';
import UserContext from './utils/UserContext.js';

const Grocery = lazy(() => import('./components/Grocery.js'))

const AppLayout = () => {
    // console.log("React Virtual DOM",<Body/>)
    const [userName,setUserName] = useState();

    useEffect(()=>{
        // Api Fetch
        const data = {
            name: "Aditya"
        }
        setUserName(data.name)
    },[])

    return (
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
            <div className ="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path: "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            }
        ],
        errorElement : <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
