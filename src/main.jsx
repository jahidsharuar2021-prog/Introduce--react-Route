import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Mobiles from './Component/Mobiles/Mobiles.jsx'
import Laptops from './Component/Laptops/Laptops.jsx'
import Users from './Component/Users/Users.jsx'
import Users2 from './Component/Users2/Users2.jsx'
import UserDetails from './Component/UserDetails/UserDetails.jsx'
import Post from './Component/Posts/Posts.jsx'
import PostDeatils from './Component/PostDetails/PostDeatils.jsx'


 
const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
;

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/users2",
        element: (
          <Suspense fallback={<span>Loading......</span>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },


      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component:Post
      },
      {
        path:'/posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDeatils
      }
 




    ],

  },
  {
    path: "about",
    element: <div>About me here</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs Here</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "app2",
    element: <App></App>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
