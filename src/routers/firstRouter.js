import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import SecondRouter from "./secondRouter";

const FirstRouter = () => {
  return (
    <Router basename="/Cartzilla">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route 
         path="/" component={SecondRouter} />
        <Redirect to ="/" />
      </Switch>

      <Footer />
    </Router>
  );
};

export default FirstRouter;
