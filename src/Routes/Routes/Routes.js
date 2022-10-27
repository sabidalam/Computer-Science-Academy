import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import Blog from "../../Components/Pages/Blog/Blog";
import CheckOut from "../../Components/Pages/CheckOut/CheckOut";
import Courses from "../../Components/Pages/Courses/Courses";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login/Login";
import SignUp from "../../Components/Pages/Login/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import { BiSad } from 'react-icons/bi';
import Faq from "../../Components/Pages/FAQ/Faq";
import AllCourses from "../../Components/Pages/AllCourses/AllCourses";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>

    },
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/allCourses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/topic/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/topic/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    },
    {
        path: '/faq',
        element: <Faq></Faq>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '*',
        element:
            <div className='mt-5 text-center'>
                <BiSad className="fs-1"></BiSad>
                <h2 className='text-danger'>404 not found!</h2>
                <h3 className='text-secondary'>The route you are searching is not available!!!</h3>
                <h3 className='text-secondary'>Please try for a valid route!!!</h3>
            </div>
    }

])