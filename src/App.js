import Prozu from "./components/contact/Prozu";
import Contact from "./components/contact/contact/Contacts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>   
    <Routes>
      <Route path="/" element={<Prozu/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
