import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Blogs from './pages/Blogs'
import "./App.css"
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;