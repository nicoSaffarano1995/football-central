import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import Home from './views/Home/Home.jsx'
import Competitions from './views/Competitions/Competitions.jsx'
import Community from './views/Community/Community.jsx';
import Landing from './views/Landing/Landing.jsx'
import NavBar from './components/NavBar/NavBar';
import DetailCompetition from './views/DetailCompetition/DetailCompetition.jsx';


function App() {

  const location = useLocation()

  return (
    <div>

      {location.pathname === '/' ? <Landing/> : <NavBar/>}

      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/competitions' element={<Competitions/>}/>
        <Route exact path='/community' element={<Community/>}/>
        <Route exact path='/competitions/detail/:id' element={<DetailCompetition/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
