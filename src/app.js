import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store"

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading....!!</h1>}><Grocery /></Suspense> 
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/resturant/:resId',
                element: <ResturantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);