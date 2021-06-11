import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  //Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  //Crear state Error campos ingresados
  const [error, actualizarError] = useState(false);

  //Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita, // tomo una copia del arreglo/obejeto original con spread operator y trabajo sobre ese, en React no es valido sobreescribir
      [e.target.name]: e.target.value, // acceseso al inputo via .name y a el valor ingresado via .value
    });
  };
  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  //Cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //Eliminar el mensaje de error previo
    actualizarError(false);

    //Asignar un ID
    cita.id = uuidv4();

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h4>Add an appointment:</h4>

      {error ? <p className="alerta-error">All fields are required</p> : null}

      <form onSubmit={submitCita}>
        <label>Pet's Name</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Pet´s Name"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Owner's Name</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Owner's Name"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Date</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hour</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Symtoms</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="button-primary">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
