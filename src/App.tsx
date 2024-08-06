import { Route, Routes } from "react-router-dom";
import "../src/index.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container mx-auto mb-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
