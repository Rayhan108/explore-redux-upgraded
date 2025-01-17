
import Main from "@/components/layout/Main";
import Home from "@/Pages/Home/Home";
import Tasks from "@/Pages/Tasks/Tasks";
import Users from "@/Pages/Users/Users";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/tasks",
                element:<Tasks/>
            },
            {
                path:"/users",
                element:<Users/>
            },
        ]
    }
])
export default routes;