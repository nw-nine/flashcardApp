import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import CreateDeck from "./CreateDeck";
import DeckView from "./DeckView";
import Study from "./Study";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import EditDeck from "./EditDeck";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/decks/new">
              <CreateDeck />
            </Route >
            <Route exact path="/decks/:id">
              <DeckView />
            </Route>
            <Route  path="/decks/:id/edit">
              <EditDeck />
            </Route>
            <Route path="/decks/:id/study">
              <Study  />
            </Route>
            <Route path="/decks/:id/cards/new">
              <CreateCard />
            </Route>
            <Route exact path="/decks/:deckId/cards/:cardId/edit">
              <EditCard />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        
      </div>
    </React.Fragment>
  );
}

export default Layout;
