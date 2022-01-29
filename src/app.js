import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/users";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import User from "./components/user";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
