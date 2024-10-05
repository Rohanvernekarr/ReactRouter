import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/components/home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import User from './assets/components/User/User.jsx'
import Github from './assets/components/github/Github.jsx'


// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
      
//       {
//         path:"about",
//         element: <About/>

//       },
//       {
//         path:"contact",
//         element: <Contact/>

//       }
//     ]
//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
      <Route path='github' element={<Github />} /> 
    </Route>
  )
);
export default router;

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
