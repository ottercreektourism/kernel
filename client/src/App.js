import React from "react";
import NavBar from './components/NavBar';
// import Login from './pages/login'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './pages/login';
import DailyTracker from './pages/dailyTrackerPage';
import GridPage from './pages/gridPage';
import IndividualDay from './pages/individualDay';
import Resources from './pages/resources';
import WordsOfEncouragement from './pages/wordsOfEncouragement';
import DailyTrackerFormDT from "./components/DailyTracker";
import Activities from "./components/Activities";
import SubmittedDT from "./components/submittedDT";
// import DailyTrackerForm from './components/DailyTracker';
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (

    <Router>
      <NavBar />
      <div className="container">
    <Routes>
        <Route exact path='/' element={<DailyTracker />} />
        <Route path='/dailytracker' element={<DailyTracker/>} />
        <Route path='/grid' element={<GridPage/>} />
        <Route path='/individualday' element={<IndividualDay/>} />
        <Route path='/submittedDT' element={<SubmittedDT/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/wordsofencouragement' element={<WordsOfEncouragement/>} />
    </Routes>
    </div>
    </Router>

  );
}

export default App;
