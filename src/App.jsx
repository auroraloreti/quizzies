import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";


function App() {
  return (
    <>
    <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    </>
  );
}

export default App;
