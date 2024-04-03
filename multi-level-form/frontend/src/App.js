import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    <Header />
          <Routes>
          <Route path="" element={<Form />} />
          <Route path="/getData" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
