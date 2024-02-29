import {useState} from 'react'
import Card from "./components/Card";
import Form from "./components/Form";
import AppStyles from "./styles/App.module.css"

function App() 
{
      const [preferenciasCulinarias, setPreferenciasCulinarias] = useState({
            form: false,
            datos: {}
                  // nombre: "",
                  // comidaFavorita: ""
      })

      return (
            <>
                  <div className={AppStyles.appContainer}>
                        <Form setPreferenciasCulinarias={setPreferenciasCulinarias}/>
                        {preferenciasCulinarias.form && <Card preferenciasCulinarias={preferenciasCulinarias.datos}/>}
                  </div>
            </>
      );
}


export default App;
