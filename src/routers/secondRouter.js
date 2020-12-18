import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { CarrouselSection } from "../components/carrousel/CarrouselSection";
import { Section_comentarios } from "../components/Section_comentarios";
import { Section_entrada } from "../components/Section_entrada";
import { Section_productos } from "../components/Section_productos";
import { DetailsProducts } from "../views/DetailsProducts";
import ResetPassword from "../views/ResetPassword";
const SecondRouter = () => {
  return (
   
      <main className="container-viewPrincipal bg-light">
        <section
          className="container p-4
        "
        >
          <Switch>
            <Route exact path="/">
              <CarrouselSection />
              <Section_entrada />
              <Section_productos TitleEncabezado="Discounted products" />
              <Section_productos TitleEncabezado="Bestsellers" />
              <Section_comentarios />
            </Route>
            <Route
              exact
              path="/detallesProducto/:name"
              component={DetailsProducts}
            />
            <Route eaxct path="/account/resetPassword" component={ResetPassword} />
          </Switch>
          <Redirect to="/" />
        </section>
      </main>
    
  );
};

export default SecondRouter;
