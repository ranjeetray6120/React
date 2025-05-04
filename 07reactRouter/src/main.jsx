import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'
import User from './component/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "/Contact",
//         element: <Contact />
//       },
//       {
//         path:"/Github",
//         element: <Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route
      loader={githubInfoLoader}
      path='github' element={<Github />}/>
      <Route path='user/:userid' element={<User />}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
