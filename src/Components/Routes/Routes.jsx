import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            {
                path : 'blog',
                element : <Blog></Blog>
            },
        ]
    },
]);






export default router