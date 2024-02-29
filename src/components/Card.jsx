import React from "react";
import CardStyles from "../styles/Card.module.css"

const Card = ({preferenciasCulinarias}) => 
{
      return(
            <>
                  <div className={CardStyles.cardContainer}>
                        <h4>Hola {preferenciasCulinarias.nombre}</h4>
                        <p>Sabemos que tu comida favorita es:</p>
                        <p>{preferenciasCulinarias.comidaFavorita}</p>
                  </div>
            </>
      )
};

export default Card;
