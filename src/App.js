
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homee from './pages/Homee';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Foooter from './components/Foooter';

function App() {
  return (
    <div>
      
     <Header/>

     <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/home' element={ <Homee/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
    
    
     
     </Routes>
    
     <Foooter/>
    </div>
  );
}

export default App;
