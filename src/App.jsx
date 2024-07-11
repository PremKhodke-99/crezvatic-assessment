import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from "./components/Products";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [])

  const updateLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    window.location.reload();
  }


  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" exact element={<Products Products={Products} user={user} />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login updateLogin={updateLogin}/>} />
        <Route path="/cart" exact element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
