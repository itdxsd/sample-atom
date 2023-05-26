import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter, Switch } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import { Login } from "./Login/containers/login";
const Login = lazy(() => import('./Login/containers/login'))
const PublicRoute = lazy(() => import('./shared/utils/publicRoute'))

function App() {
 return (
   <div className="App">
     <BrowserRouter>
     <Suspense fallback={<></>}>
          <Routes>
              <Route path="/login/*"  element={<PublicRoute  component={Login} />} />
              {/* <Route path="/" element={<Login />} > */}
              {/* <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} /> */}
           
          </Routes>
       </Suspense>
     </BrowserRouter>
   </div>
 )
}

export default App