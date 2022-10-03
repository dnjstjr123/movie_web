import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExplainMovie from "./pages/ExplainMovie";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/explainmovie" element={<ExplainMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
