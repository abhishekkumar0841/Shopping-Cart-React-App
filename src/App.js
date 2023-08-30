import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App relative">
      <div className="bg-black py-2 fixed w-[100%] top-0">
      <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
