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
                element: <Home></Home>
            },
            {
                path: '/topic/:id',
                element: <Topic></Topic>
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>
            }
        ]
    }

])