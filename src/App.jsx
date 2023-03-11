import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAPIConfiguration } from "./data/homeSlice";

import { fetchDataFromAPI } from "./utils/api";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import SearchResult from "./pages/SearchResult/SearchResult";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/:mediaType/:id", element: <Details /> },
    { path: "/search/:query", element: <SearchResult /> },
    { path: "/explore/:mediaType", element: <Explore /> },
    { path: "*", element: <PageNotFound /> }
]);

const App = () => {
    const { url } = useSelector(state => state.home);
    const dispatch = useDispatch();

    console.log(url);

    const apiTesting = () => {
        fetchDataFromAPI("/movie/popular").then(res => {
            console.log(res);
            dispatch(getAPIConfiguration(res));
        });
    };

    useEffect(() => {
        apiTesting();
    }, []);
    return (
        <>
            {/* <Header /> */}
            <RouterProvider router={router}></RouterProvider>
            {/* <Footer /> */}
        </>
    );
};

export default App;
