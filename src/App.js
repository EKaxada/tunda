import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import NavBar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </Router>
  );
};

export default App;
