import {useState} from 'react'
import Card from "./components/Card";
import Form from "./components/Form";

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
                  <div className="App">
                        <Form setPreferenciasCulinarias={setPreferenciasCulinarias}/>
                  </div>
                  {preferenciasCulinarias.form && <Card preferenciasCulinarias={preferenciasCulinarias.datos}/>}
            </>
      );
}


export default App;
