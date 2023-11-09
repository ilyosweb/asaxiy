import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import Tolov from './router/tolov/Tolov';
import Trek from './router/trek/Trek';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/tolov' element={<Tolov />} />
        <Route path='/trek' element={<Trek />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
