import {useState} from 'react'
import FormStyles from "../styles/Form.module.css"
import React from "react";

const Form = ({setPreferenciasCulinarias}) => 
{
      const [ err, setErr ] = useState(false);
      const [ datos, setDatos ] = useState(
            {
                  nombre: "",
                  comidaFavorita: ""
            }
      );

      function handleSubmit( ev )
      {
            ev.preventDefault();
            console.log( datos );

            if( (datos.nombre.length < 3) || (datos.nombre[0] == " ") ) {
                  setErr(true)
                  return
            }

            if( datos.comidaFavorita.length < 6 ) {
                  setErr(true)
                  return
            }

            setPreferenciasCulinarias( {form: true, datos: datos} )
            setErr(false)
      }

      return (
            <div className={FormStyles.formContainer}>
                  <h2>
                        ¿Cual es tu comida favorita?
                  </h2>
                  <form className={FormStyles.formElements} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Ingresa tu nombre" onChange={ ({target}) => setDatos({ ...datos, nombre: target.value })}/>
                        <input type="text" placeholder="Ingresa tu comida favorita" onChange={ ({target}) => setDatos({ ...datos, comidaFavorita: target.value })}/>
                        <button>Enviar</button>
                  </form>
                  {err && <p>Por favor chequea que la información sea correcta</p>}
                  {/* {!err && <p>Ok!</p>} */}
            </div>
      ) 
};

export default Form;
