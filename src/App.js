import React from "react";
import NavBar from './components/NavBar';
import Login from './pages/login'
import "./App.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/login';
import DailyTracker from './pages/dailyTrackerPage';
import GridPage from './pages/gridPage';
import IndividualDay from './pages/individualDay';
import Resources from './pages/resources';
import WordsOfEncouragement from './pages/wordsOfEncouragement';


function App() {
  return (

   
    <Router>
      <NavBar />
      <div className="container">
    <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/dailytracker' element={<DailyTracker/>} />
        <Route path='/grid' element={<GridPage/>} />
        <Route path='/individualday' element={<IndividualDay/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/wordsofencouragement' element={<WordsOfEncouragement/>} />
    </Routes>
    </div>
    </Router>

  );
}

export default App;
