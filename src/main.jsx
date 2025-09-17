import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Offers from './components/Offers'
import Help from './components/Help'
import SignUp from './components/SignUp'
import Body from "./components/Body";
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { Provider } from 'react-redux'
import appStore from './utils/appStore';
import Cart from './components/Cart'

const appRouter = createBrowserRouter([
    {
        path: "/", element: <App />,
        errorElement:<Error/>,
        children: [
        { path: "/"        ,   element: <Body /> },
        { path: "/offers"  ,   element: <Offers /> },
        { path: "/help"    ,   element: <Help /> },
        { path: "/signup"  ,   element: <SignUp /> },
        { path: "/restaurant/:id"  ,   element: <RestaurantMenu /> },
        { path: "/cart"  ,   element: <Cart/> }

        ]

    },

])


createRoot(document.getElementById('root')).render(

    <RouterProvider router={appRouter}></RouterProvider>
    // <Provider store={appStore}>   
    //   <RouterProvider router={appRouter} />
    // </Provider>

)
