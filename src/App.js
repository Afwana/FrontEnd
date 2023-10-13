import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import WatchHistroy from './Pages/WatchHistroy';
import Home from './Pages/Home';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistroy />}/>
      </Routes>
      <hr />
      <Footer/>
    </>
  );
}

export default App;
