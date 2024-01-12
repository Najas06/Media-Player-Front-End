import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Watchhistory from './pages/Watchhistory';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Watchhistory' element={<Watchhistory/>}/>
      
      
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
