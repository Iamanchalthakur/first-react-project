import { Outlet, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const layout = () => {
  return (
    <>
     <Navbar />
     <Outlet />
     <Footer />

      
    </>
  )
};

export default layout;