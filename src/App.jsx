import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Listing from "./pages/Listing";
import Member from "./pages/Member";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import CallAction from "./components/CallAction";

const App = () => {
  return (
    <Router>
      <Navbar />
      <CallAction />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/members" element={<Member />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
