import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/Not Found";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/SidePages/Home";
import Settings from "../Pages/SidePages/Settings";
import Trending from "../Pages/SidePages/Trending";

const RootRouter = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <div style={{ minHeight: "100vh" }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" Component={Dashboard}>
            <Route path="home" Component={Home} />
            <Route path="settings" Component={Settings} />
            <Route path="trending" Component={Trending} />
            <Route path="*" Component={NotFound} />
          </Route>
          <Route path="/login" Component={Login} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

// const RouteData = [
//   {
//     path: "login",
//     Component: Login,
//   },
//   {
//     path: "home",
//     Component: Home,
//   },
//   {
//     path: "*",
//     Component: NotFound,
//   },
// ];

export default RootRouter;
