import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Home/Header";
import Body from "./Components/Home/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact Us/ContactUs";
import Cart from "./Components/Cart/Cart";
import Error from "./utils/Error";
import RestaurantMenu from "./Components/Home/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Shimmer from "./utils/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/Redux store/appStore";


//CHUNKING
//CODE SPLITTING
//DYNAMIC BUNDLING
//LAZY LOADING
//ON DEMAND LOADING
//DYNAMIC IMPORT

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //if there is authentication and userdata comes here => Here's how we can alter the UserContext component:
  useEffect(() => {
    const data = {
      name: "Lakshya",
      password: "********",
    };
    setUserName(data.name);
  }, []);

  const onlineStatus = useOnlineStatus();
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <div className="app-status">
            {onlineStatus ? (
              <span className="app-status-online">"🟢"</span>
            ) : (
              <span className="app-status-offline"> "🔴"</span>
            )}
          </div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
