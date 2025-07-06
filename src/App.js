import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Umkm from "./Umkm";
import Kegiatan from "./Kegiatan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Umkm" element={<Umkm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Kegiatan" element={<Kegiatan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
