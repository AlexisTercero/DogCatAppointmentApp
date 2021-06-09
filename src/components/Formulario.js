import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';;

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [ cita, actualizarCita] = useState ({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })
    //Crear state Error campos ingresados
    const [ error, actualizarError ] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita, // tomo una copia del arreglo/obejeto original con spread operator y trabajo sobre ese, en React no es valido sobreescribir
            [e.target.name] : e.target.value // acceseso al inputo via .name y a el valor ingresado via .value 
        })
    }
    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    //Cuando el usuario presiona agregar cita
     const submitCita =  e => {
         e.preventDefault();

         //Validar
         if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
             actualizarError(true);
             return;
         }
         //Eliminar el mensaje de error previo
         actualizarError(false);

         //Asignar un ID
         cita.id = uuidv4()
         console.log(cita);

         //Crear la cita
         crearCita(cita)

         //Reiniciar el form
         actualizarCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
         })
     }
      





    return ( 
       <Fragment>
           <h4>Add an appointment</h4>

           { error ? <p className = "alerta-error">All fields are required</p> : null }
          
           <form onSubmit={submitCita} >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState} 
                    value={mascota}               
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState} 
                    value={propietario}                  
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={fecha}                  
                />
                <label>Horario</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={hora}                
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}  
                    value={sintomas} 
                ></textarea>
                
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add</button>
                
           </form>
       </Fragment>
     );
}
 
export default Formulario;