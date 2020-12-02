import React, { useState, useEffect, useContext } from "react";
import { UseFetch } from "../api/useFetch";
import { Context } from "../hooks/UseContext";

export const Sidebar_Categories = () => {
  const [Categories, setCategories] = useState([]);
  const { Peticion } = useContext(Context);
   useEffect(() => {
  
 
   }, [])
  UseFetch(
    "https://node-express-store-2020.herokuapp.com/list/categories",
    "GET"
  )
 
   
  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
