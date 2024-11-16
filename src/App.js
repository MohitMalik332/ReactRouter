import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';


//From Here (way 1)
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />, //This error element will be shown if an error occurs.
    //This is the Page section which will be visible to all the pages. thats why we need to add one 
    //extra element in this obj.
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <Products /> }, 
      { path: 'products/:productId', element: <ProductDetail />} 
      //These without '/' in start are relative paths. And
      //if a path starts with a leading '/' forward Slash then it is a absolute path.
      //if we use '/', then the path is directly added to the domain name.
      // -->  /root/product-id is not = to /root & /product-id instead it is = /root & product-id.
    ],
  },
]);
// createBrowserRouter can a multiple objects in the array for different pages.
//To Here (way 1)

// //From Here (way 2)
// // We can define Routes in one another way also, & for that -
// // 1. import createRoutesFromElements & Route 
// // 2. then inside createRoutesFromElements function define all the routes using Route Componentn & store
// // the result in a variable like -
// const anotherWayofRoutes = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />}/>
//     <Route path='/products' element={<Products />}/>
//   </Route>
// )
// // 3. then Pass the variable to the createBrowserRouter function, like - 

// const router = createBrowserRouter(anotherWayofRoutes);
// //To Here (way 2)


function App() {
  return <RouterProvider router={router}/>
}

export default App;



//If we have a list of products and on clicking them a page is opens with that product details.
//for that we can't create as many routes as there are products, instead we create a dynamic route.
// for that we can use ' : ' colon symbol after providing path. 