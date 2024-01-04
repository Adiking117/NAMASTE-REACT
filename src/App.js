import React , {lazy , Suspense} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header.js'
import Body from './components/Body.js'
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
// import Grocery from './components/Grocery.js';


const Grocery = lazy(() => import('./components/Grocery.js'))

const AppLayout = () => {
    // console.log("React Virtual DOM",<Body/>)
    return (
        <div className ="app">
            <Header/>
            <Outlet/>
        </div>
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
