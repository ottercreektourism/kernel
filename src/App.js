import React from "react";
import NavBar from './components/NavBar';
import Login from './pages/login'
import "./App.css";
import DailyTracker from "./pages/dailyTrackerPage";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <>      
    <NavBar />
      <div className="container">
        {/* <Login /> */}
        <DailyTracker />
      </div>
    </>
  );
}

export default App;
