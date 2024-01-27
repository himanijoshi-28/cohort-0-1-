// eslint-disable-next-line no-unused-vars
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Landing from "./component/Landing";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Route path="/" element={<Landing />}></Route>
    </BrowserRouter>
  );
};

export default App;
