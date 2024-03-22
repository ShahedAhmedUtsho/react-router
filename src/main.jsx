import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Blog from './components/users/Users';
import UserDetails from './components/users/user/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/Posts/Post/PostDetails/PostDetails';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/posts",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        errorElement:<Error></Error>,
        element: <Posts></Posts> , 
      },
      {
        path:"/post/:postId",
        loader :({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails  > 

      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"/users",
        loader :()=> fetch('https://jsonplaceholder.typicode.com/users'),
    element:<Blog></Blog>
      },
      {
        path:"/user/:userId",
        loader : ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },

  {
    path:"/aboutt",
    element:<div>You are in about page utsho</div>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
