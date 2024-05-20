import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home/home';
import Aboutus from './Pages/aboutus/aboutus';
import Services from './Pages/services/services';
import Contact from './Pages/contact/contact';
import Layout from './Pages/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutuS" element={<Aboutus />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
