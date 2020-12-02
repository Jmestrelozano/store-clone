import {useContext} from "react";
import { Context } from "../hooks/UseContext";

export const UseFetch = (url, method = "GET", body) => {
  const {setPeticion } = useContext(Context);
  let respuesta = fetch(`${url}`, {
    method,
    body: body,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then(result => setPeticion(result.data))

  return respuesta;
};