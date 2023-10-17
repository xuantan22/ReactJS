import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import HeaderOnly from "~/components/Layouts/HeaderOnly";


import Defaultlayout from "~/components/Layouts/DefaultLayout";
import HomeLayout from "~/components/Layouts/HomeLayout";

import Product from "~/pages/Product";

import Iphone from "~/pages/products/SmartPhone/Iphone/Iphone";
import Xiaomi from "~/pages/products/SmartPhone/Xiaomi";
import PhoneComponent from "~/pages/products/SmartPhone/PhoneComponent";


import Casio from "~/pages/products/clock/Casio";
import Orient from "~/pages/products/clock/Orient";
import Citizen from "~/pages/products/clock/Citizen";
import Seiko from "~/pages/products/clock/Seiko";
import Fossil from "~/pages/products/clock/Fossil";


import Asus from "~/pages/products/laptop/Asus";
import Dell from "~/pages/products//laptop/Dell";
import Acer from "~/pages/products/laptop/Acer";
import Samsung from "~/pages/products/laptop/Samsung";
import MSI from "~/pages/products/laptop/MSI";

import Login from "~/Login/Login";
import Cart from "~/pages/products/Cart/Cart";

const publicRoutes =[
    {path:'/',component: Home, layout:HomeLayout },
    {path:':/profile', component: Profile},
    {path: '/smartphone/iphone', component:Iphone, layout:Defaultlayout},
    {path: '/smartphone/xiaomi', component:Xiaomi, layout:Defaultlayout},
    {path: '/smartphone/phu-kien', component:PhoneComponent, layout:Defaultlayout},
    {path: '/clock/casio', component:Casio, layout: Defaultlayout},
    {path: '/clock/orient', component:Orient, layout:Defaultlayout},
    {path: '/clock/citizen', component:Citizen, layout:Defaultlayout},
    {path: '/clock/seiko', component:Seiko, layout:Defaultlayout},
    {path: '/clock/fossil', component:Fossil, layout:Defaultlayout},
    {path: '/laptop/asus', component:Asus, layout:Defaultlayout},
    {path: '/laptop/dell', component:Dell, layout:Defaultlayout},
    {path: '/laptop/msi', component:MSI, layout:Defaultlayout},
    {path: '/laptop/acer', component:Acer, layout:Defaultlayout},
    {path: '/laptop/samsung', component:Samsung, layout:Defaultlayout}, 
    {path:'/cart',component:Cart, layout:HeaderOnly},
    {path:`/products/:type/:id`,component:Product, layout:HeaderOnly}
]

const privateRoutes = [
    {path:'/login',component: Login, layout:HeaderOnly },
]

export {privateRoutes, publicRoutes}