import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavB from "./components/NavB";
import MembersList from "./components/MembersList";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div>
      <NavB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookslist" element={<BooksList />} />
        <Route path="/memberslist" element={<MembersList />} />
      </Routes>
    </div>
  );
}

export default App;
