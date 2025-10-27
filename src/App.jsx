import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ProductPages from "./screens/Product";
import Profile from "./screens/Profile";
import CartPage from "./screens/Cart";
import AddProduct from "./screens/AddProduct";
import Test from "./screens/Test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductPages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin/create/product" element={<AddProduct />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
