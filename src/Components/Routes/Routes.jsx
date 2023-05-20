import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import AllToy from "../Pages/AllToy/AllToy";
import PrivateRoute from "./PrivateRoute ";
import ToyDetails from "../Pages/AllToy/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'addtoy',
                element: <PrivateRoute>
                    <AddToy></AddToy>
                </PrivateRoute>
            },
            {
                path: 'mytoy',
                element: <PrivateRoute>
                    <MyToy></MyToy>
                </PrivateRoute>
            },
            {
                path: 'alltoy',
                element: <PrivateRoute>
                    <AllToy></AllToy>
                </PrivateRoute>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toyData/${params.id}`)
            },
            {
                path: 'updatetoy',
                element: <UpdateToy></UpdateToy>
            },
        ]
    },
]);






export default router