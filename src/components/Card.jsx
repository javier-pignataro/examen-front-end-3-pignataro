import React from "react";

const Card = ({preferenciasCulinarias}) => 
{
      return(
            <>
                  <h4>Hola {preferenciasCulinarias.nombre}</h4>
                  <p>Sabemos que tu comida favorita es:</p>
                  <p>{preferenciasCulinarias.comidaFavorita}</p>
            </>
      )
};

export default Card;
