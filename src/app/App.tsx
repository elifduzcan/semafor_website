import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Consultation } from "./pages/Consultation";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/danismanlik" element={<Consultation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
