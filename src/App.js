import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ManufacturingProjects from "./Components/Projects/Projectlarge";
import BlogSection from "./Components/Blog/BlogPage";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<ManufacturingProjects />} />
        <Route path="/blogs" element={<BlogSection />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;
