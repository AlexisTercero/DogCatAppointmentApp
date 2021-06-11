import React from "react";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Pet: <span>{cita.mascota}</span>{" "}
    </p>
    <p>
      Owner: <span>{cita.propietario}</span>{" "}
    </p>
    <p>
      Date: <span>{cita.fecha}</span>{" "}
    </p>
    <p>
      Hour: <span>{cita.hora}</span>{" "}
    </p>
    <p>
      Symtoms: <span>{cita.sintomas}</span>{" "}
    </p>

    <button className="button eliminar " onClick={() => eliminarCita(cita.id)}>
      Delete
    </button>
  </div>
);

export default Cita;
