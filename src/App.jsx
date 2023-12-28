import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Tweet from "./pages/Tweet";
import CRM from "./pages/CRM";

const CRMData = {
  name: ["Sunita Kumar", "Henderson G. Sterling II", "Aoi Kobayashi"],
  job: ["Electrical Engineer", "Receptionist", "President"],
  email: [
    "sunita.kumar@acme.co",
    "henderson-the-second@acme.co",
    "kobayashi.aoi@acme.co",
  ],
};
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path="/CRM" element={<CRM CRMData={CRMData} />} />
      </Routes>
    </>
  );
}

export default App;
