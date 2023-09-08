import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Facebook from "~/pages/Facebook";
import Upload from "~/pages/Upload";
import HeaderOnly from "~/components/Layouts/HeaderOnly";
import Search from "~/pages/Search";
const publicRoutes =[
    {path:'/',component: Home },
    {path:'/profile', component: Profile},
    {path:'/facebook', component: Facebook,layout :HeaderOnly},
    {path: '/upload', component: Upload},
    {path:'/search', component:Search, layout: null}

]

const privateRoutes = []

export {privateRoutes, publicRoutes}