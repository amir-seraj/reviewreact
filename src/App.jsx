import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Tweet from "./pages/Tweet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tweet" element={<Tweet />} />
      </Routes>
    </>
  );
}

export default App;
