import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Users from "./components/Users";
import UserId from "./components/UserId";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />;
        <Route path="/users" element={<Users />} />;
        <Route path="/user/:id" element={<UserId />} />;
      </Routes>
    </>
  );
}

export default App;
