import React, { useState } from 'react';
import styles from '../css/form.module.css';
import { postReporte } from '../helpers/postReporte';
export const Agregar = () => {
  const [datos,setDatos]=useState({carnet:'',nombre:'',curso:'',cuerpo:'',procesado:''})

  const handleSubmit=(e)=>{
    e.preventDefault()
    postReporte(datos).then(()=>{
      alert("Ingreso Satisfactorio")
    })
    
  }
  const handleChange=(e)=>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className={styles.contenedor +' animate__animated animate__bounceInUp'}>
      <label>Agrega Reportes de practicantes</label>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input type="text" name="carnet" onChange={handleChange} className={styles.txt_rep} placeholder="Carnet" />
          </li>
          <li>
            <input type="text" name="nombre" onChange={handleChange} className={styles.txt_rep} placeholder="Nombre" />
          </li>
          <li>
            <input type="text" name="curso" onChange={handleChange} className={styles.txt_rep} placeholder="Curso/Proyecto" />
          </li>
          <li>
            <textarea name="cuerpo" onChange={handleChange} placeholder="Cuerpo Reporte" />
          </li>
        </ul>
        <input type="submit" onClick={handleSubmit} className="btn" value="Enviar Reporte" />
        </form>
    </div>
  );
};
