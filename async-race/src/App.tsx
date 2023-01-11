import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Garage } from "./pages/Garage";
import { Winners } from "./pages/Winners";
import './App.css';
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </div>
  );
}

export default App;
