import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FoodPage from "./pages/FoodPage";
import Carts from "./features/carts/Carts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="fixed z-40 top-0 w-full">
          <Navbar />
        </div>
        <div className="xl:w-10/12 mx-auto mt-20">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/foodpage" element={<FoodPage />} />
        </Route>
        <Route path="/carts" element={<Carts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
