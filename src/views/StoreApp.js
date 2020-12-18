import React, { useState } from "react";
import { Context } from "../hooks/UseContext";
import FirstRouter from "../routers/firstRouter";

const StoreApp = () => {

  const [DatosInfoProductos, setDatosInfoProductos] = useState([])
  return (
    <>
    <Context.Provider value={{DatosInfoProductos,setDatosInfoProductos}}>
      <FirstRouter />
      </Context.Provider>
    </>
  );};

export default StoreApp;
