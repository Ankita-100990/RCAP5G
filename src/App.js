// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Menu";
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <>
      <Menu />
      <Routes>
        {/* <Route exact path="/" element={<Header/>} /> */}
        <Route exact path="/Dashboard" element={<Dashboard/>} />
      </Routes> 
    </>


  );
}

export default App;
