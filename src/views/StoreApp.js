import React, { useState } from "react";
import { CarrouselSection } from "../components/carrousel/CarrouselSection";
import { Navbar } from "../components/Navbar";
import { Section_comentarios } from "../components/Section_comentarios";
import { Section_entrada } from "../components/Section_entrada";
import { Section_productos } from "../components/Section_productos";
import { Footer } from "../components/footer";
import { Sidebar } from "../components/Sidebar";
import { Context } from "../hooks/UseContext";
const StoreApp = () => {
  const [Peticion, setPeticion] = useState([]);

  return (
    <Context.Provider value={{ Peticion, setPeticion }}>
      <Navbar />
      <Sidebar />
      <main className="container-viewPrincipal bg-light">
        <section
          className="container p-4
        "
        >
          <CarrouselSection />
          <Section_entrada />
          <Section_productos TitleEncabezado="Discounted products" />
          <Section_productos TitleEncabezado="Bestsellers" />
          <Section_comentarios />
        </section>
      </main>
      <Footer />
    </Context.Provider>
  );
};

export default StoreApp;
