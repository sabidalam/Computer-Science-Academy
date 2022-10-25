import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import Courses from "../../Components/Pages/Courses/Courses";
import Home from "../../Components/Pages/Home/Home";
import Topic from "../../Components/Pages/Topic/Topic";

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
                element: <Topic></Topic>,
                loader: ({ params }) => fetch(`http://localhost:5000/topic/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }

])