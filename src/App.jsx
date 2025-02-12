
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import WishList from './components/WishList/WishList'
import Brands from './components/Brands/Brands'
import Categories from './components/Categories/Categories'
import Register from './components/Register/Register'
import toast, { Toaster } from 'react-hot-toast';
import Login from './components/Login/Login'
import AuthentcaionProtection from './components/AuthentcaionProtection/AuthentcaionProtection'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'
import ProductDetails from './components/ProductDetails/ProductDetails'
import AllSubcategories from './components/AllSubcategories/AllSubcategories'
import SpecificSub from './components/SpecificSub/SpecificSub'
import Checkout from './components/Checkout/Checkout'
import AllOrders from './components/AllOrders/AllOrders'
import PasswordVerify from './components/passwordVerify/passwordVerify'
import VerificationCode from './components/VerificationCode/VerificationCode'
import ResetPassword from './components/ResetPassword/ResetPassword'
function App() {
  const queryClient = new QueryClient()
  
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/Products",
        element:<ProtectedRoutes><Products/></ProtectedRoutes>
      },
      {
        path:"/Cart",
        element:<ProtectedRoutes><Cart/></ProtectedRoutes>
      },
      {
        path:"/wishlist",
        element:<ProtectedRoutes><WishList/></ProtectedRoutes>
      },
      {
        path:"/brands",
        element:<ProtectedRoutes><Brands/></ProtectedRoutes>
      },
      {
        path:"/Categories",
        element:<ProtectedRoutes><Categories/></ProtectedRoutes>,
        children:[
          {
            index:true,
            element:<AllSubcategories/>
          },{
            path:"/Categories/subcategory/:categoryId",
            element:<SpecificSub/>
          }
        ]
      },
      {
        path:"/register",
        element:<AuthentcaionProtection><Register/></AuthentcaionProtection>
      },
      {
        path:"/login",
        element:<AuthentcaionProtection><Login/></AuthentcaionProtection>
      },{
        path:"/productDetails/:productId/:categoryName",
        element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>
      },{
        path:"/checkout",
        element:<ProtectedRoutes><Checkout/></ProtectedRoutes>
      },{
        path:"/allorders",
        element:<ProtectedRoutes><AllOrders/></ProtectedRoutes>
      },{
        path:"passwordverify",
        element:<AuthentcaionProtection><PasswordVerify/></AuthentcaionProtection>
      },{
        path:"Verificationcode",
        element:<AuthentcaionProtection><VerificationCode/></AuthentcaionProtection>
      },{
        path:"resetpassword",
        element:<AuthentcaionProtection><ResetPassword/></AuthentcaionProtection>
      }
    ]
  }

])
  return (
    <>
    <Provider store={Store}>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes}></RouterProvider>
    <Toaster
  position="top-center"
  reverseOrder={false}/>
</QueryClientProvider>
</Provider>
    </>
  )
}

export default App
