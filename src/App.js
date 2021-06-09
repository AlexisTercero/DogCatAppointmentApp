import React, { Fragment, useState, useEffect } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const[citas, guardarCitas] = useState(citasIniciales);

  //useEffect para realizar ciertas operaciones antes cambios del state
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if(citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas))
    } else{
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas] );

  //Funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //Funcion que elimina citas por su id
    const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id );
      guardarCitas(nuevasCitas);
    }
  //Mensaje condicional
  const titulo = citas.length === 0 ? "No Appointments" : "Appointments List"

  return (
    <Fragment>
      <Header />
      {/* <h1>Administrador de Pacientes</h1> */}
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h3>{titulo}</h3>
            {citas.map(cita => (
              <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}               
              />
           ))}
          </div>

        </div>
      </div>
      <Footer /> 
    </Fragment>
  );
}

export default App;
