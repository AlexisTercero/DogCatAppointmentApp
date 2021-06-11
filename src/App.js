import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import catdog from "./images/catdog.svg"



function App() {
  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect para realizar ciertas operaciones antes cambios del state
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  //Funcion que toma las citas actuales y agrega la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Funcion que elimina citas por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };
  //Mensaje condicional
  const titulo = citas.length === 0 ? "No Appointments" : "Appointments List:";

  return (
    <Fragment>
      <div style={{ backgroundImage: `url(${catdog})` }}>
      <Router>
        <Header />
        <Switch>
          <div className="container"              
          >
            <div className="row">
              <Route path="/home">
                <div className="one-half row">
                  <Formulario crearCita={crearCita} />
                </div>
              </Route>
              <Route path="/appointments">
                <div className="one-half row">
                  <h4>{titulo}</h4>
                  {citas.map((cita) => (
                    <Cita
                      key={cita.id}
                      cita={cita}
                      eliminarCita={eliminarCita}
                    />
                  ))}
                </div>
              </Route>
            </div>
          </div>
        </Switch>
        <Footer />
      </Router>
      </div>
    </Fragment>
  );
}

export default App;
