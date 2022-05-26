import React from "react";
import NavBar from './components/NavBar';
import "./App.css";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/login';
import dailyTrackerPage from './pages/dailyTrackerPage';
import gridPage from './pages/gridPage';
import individualDay from './pages/individualDay';
import resources from './pages/resources';
import wordsOfEncouragement from './pages/wordsOfEncouragement';


function App() {
  return (

    // <>      
    // <NavBar />
    //   <div className="container">
    //   </div>
    // </>
    <Router>
      <Navbar />
    <Routes>
        <Route exact path='/login' exact element={<Home />} />
        <Route path='/dailytracker' element={<dailyTrackerPage/>} />
        <Route path='/grid' element={<gridPage/>} />
        <Route path='/individualday' element={<individualDay/>} />
        <Route path='/resources' element={<resources/>} />
        <Route path='/wordsofencouragement' element={<wordsOfEncouragement/>} />

    </Routes>
    </Router>
  );
}

export default App;
