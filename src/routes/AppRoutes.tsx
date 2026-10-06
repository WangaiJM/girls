import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Admission from "../pages/Admission/Admission";
import Contacts from "../pages/Contacts/Contacts";
import Donation from "../pages/Donation/Donation";
import Facilities from "../pages/Facilities/Facilities";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Programs from "../pages/Programs/Programs";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/admission" element={<Admission />} />
    <Route path="/programmes" element={<Programs />} />
    <Route path="/facilities" element={<Facilities />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/donation" element={<Donation />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;