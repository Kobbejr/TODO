import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoPage from "./pages/TodoPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<TodoPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
