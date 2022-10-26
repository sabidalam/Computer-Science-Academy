import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import Blog from "../../Components/Pages/Blog/Blog";
import Courses from "../../Components/Pages/Courses/Courses";
import Home from "../../Components/Pages/Home/Home";
import SignUp from "../../Components/Pages/Login/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
            }
        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }

])