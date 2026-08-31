import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />;
      </Routes>
    </>
  );
}

export default App;
