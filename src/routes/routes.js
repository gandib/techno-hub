import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/ReadingHistory/ReadingHistory";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <ProductList />,
            },
            {
                path: "add-product",
                element: <AddProduct />,
            },
            {
                path: "update-product",
                element: <UpdateProduct />,
            },
        ],
    },
    {
        path: 'detail-product',
        element: <ProductDetail />
    },
    {
        path: '/reading-history',
        element: <ReadingHistory />
    },

]);

export default routes;
