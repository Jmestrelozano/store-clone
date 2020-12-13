import React from 'react'
import "../contentRedesSociales/redesSociales.css"
export const RedesSociales = ({tamaño,colorTitulo,background,border,colorIcono}) => {
    return (
        <div className="redes-compañia">
              <h2 style={{fontSize:`${tamaño}`,color:`${colorTitulo}`}}>Follow us</h2>

              <ul className="column-grid-four iconos">
                <li style={{border:`${border}`,backgroundColor:`${background}`,color:`${colorIcono}`}}>
                  <i className="fab fa-twitter"></i>
                </li>
                <li style={{border:`${border}`,backgroundColor:`${background}`,color:`${colorIcono}`}}>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li style={{border:`${border}`,backgroundColor:`${background}`,color:`${colorIcono}`}}>
                  <i className="fab fa-instagram"></i>
                </li>
                <li style={{border:`${border}`,backgroundColor:`${background}`,color:`${colorIcono}`}}>
                  <i className="fab fa-youtube"></i>
                </li>
              </ul>
            </div>
    )
}
