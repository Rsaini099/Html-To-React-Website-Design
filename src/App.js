import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './pages/Footer';
import Award from './pages/Award';
import Team from './pages/Team';
import Contect from './pages/Contect';
import Doctor from './pages/Doctor';
import Doctor_Single from './pages/Doctor_Single';
import Appoinment from './pages/Appoinment';
import Signup from './pages/Signup';
import Signup_p from './pages/Signup_p';
import Signup_d from './pages/Signup_d';
import Signin from './pages/Signin';




function App() {
  return (
    <>


      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/award" element={<Award />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor_single" element={<Doctor_Single />} />
          <Route path="/appoinment" element={<Appoinment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup_p" element={<Signup_p />} />
          <Route path="/signup_d" element={<Signup_d />} />
       
          
          
          



        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
