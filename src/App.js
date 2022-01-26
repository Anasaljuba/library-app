import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavB from "./components/NavB";

function App() {
  return (
    <div className="App">
      <NavB />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
