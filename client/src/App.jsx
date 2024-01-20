import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboad from "./pages/Dashboad";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboad" element={<Dashboad />} />
        <Route path="/about" element={<About />} />
        <Route path="/sighnin" element={<Signin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
