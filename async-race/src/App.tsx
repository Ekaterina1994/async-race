import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Garage } from "./pages/Garage";
import { Winners } from "./pages/Winners";
import './App.css';
import { Header } from "./components/header/Header";
import { SettingsCarsContext } from "./context/context";

const App = () => {
  const [colorValue, setColorValue] = useState<string>("");

  return (
    <div>
      <SettingsCarsContext.Provider value={{ colorValue, setColorValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Garage items={[]} />} />
          <Route path="/garage" element={<Garage items={[]} />} />
          <Route path="/winners" element={<Winners />} />
        </Routes>
      </SettingsCarsContext.Provider>
    </div>
  );
};

export default App;
