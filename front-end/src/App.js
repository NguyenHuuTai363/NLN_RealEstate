import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import PropertyDetails from "./pages/propertyDetail/PropertyDetails";
import Login from "./components/accounts/Login"
import Register from "./components/accounts/Register";
import AddProperty from "./components/addProperty/AddProperty";
import AdminHome from "./pages/home/AdminHome";
import AdminPropertyList from "./pages/admin/adminProperty/AdminPropertyList";
import UserList from "./pages/admin/user/UserList";
import Profile from "./components/profile/Profile";
import UpdateProperty from "./pages/admin/updateProperty/UpdateProperty";
import UpdateUser from "./pages/admin/updateUsers/UpdateUser";

function App() {

  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/admin" element={<AdminHome> <UserList/> </AdminHome>} />
        <Route path="/user" element={<UserList/>} />
        <Route path="/adminpropertylist" element={<AdminHome> <AdminPropertyList/> </AdminHome> }/>
        <Route path="/updateuser/:id" element={<AdminHome> <UpdateUser/> </AdminHome>}/>
        <Route path="/updateproperty/:id" element={<AdminHome> <UpdateProperty/> </AdminHome>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
