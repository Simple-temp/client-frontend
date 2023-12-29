import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Main/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navvbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Main/Profile/Profile";
import Sellers from "./Components/Main/Sellers/Sellers";
import Login from "./Components/Main/Login/Login";
import Register from "./Components/Main/Register/Register";
import Notfound from "./Components/404/Notfound";
import AdminTemplate from "./Components/Main/AdminTemplate/AdminTemplate";
import EditServices from "./Components/Services/EditServices";
import EditProfile from "./Components/Main/Profile/EditProfile";
import ViewSellerProfile from "./Components/Main/Sellers/ViewSellerProfile";
import CreateNew from "./Components/Main/Profile/CreateNew";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (

    <BrowserRouter>
      <ToastContainer position='top-right' limit={1} />
      <div className="min-height d-flex flex-column">
        <header className="App-header">
          <Navvbar />
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<PrivateRoute>
              <Profile />
            </PrivateRoute>} />

            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/editservice" element={<EditServices />} />
            <Route path="/createnew" element={<CreateNew />} />
            <Route path="/sellers" element={<PrivateRoute>
              <Sellers />
            </PrivateRoute>} />
            <Route path="/viewsellerprofile" element={<ViewSellerProfile />} />
            <Route path="/admintemplate" element={<AdminTemplate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
