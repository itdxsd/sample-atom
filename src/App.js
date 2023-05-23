import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
import { Todo } from "./Todo/container/Todo";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
           <Route path="/" element={<Todo />} >
           {/* <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} /> */}
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App