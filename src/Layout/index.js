import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom.min";
import CreateDeck from "./CreateDeck";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Router>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/cd">
            <CreateDeck />
          </Route >
            <NotFound />
        </Router>
      </div>
    </>
  );
}

export default Layout;
