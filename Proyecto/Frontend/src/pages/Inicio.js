import React, { useState } from 'react';
import styles from '../css/form.module.css';
import { getReportes } from '../helpers/getReportes';
export const Inicio = () => {
  const [server, setserver] = useState({ contenido:[],servidor: '' });
  const [carnet,setcarnet]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    getReportes(carnet).then(({data,message})=>{
      setserver({contenido:data,servidor:message})
    })
  }
  return (
    <div className={`${styles.contenedor} animate__animated animate__bounceInLeft`}>
      <label>Busqueda en Listado de Reportes</label>
      <ul>
        <li>
          <input type="text" onChange={event=>setcarnet(event.target.value)}  className={styles.txt_rep} placeholder="Ingresa Carnet" />
          <input type="submit" onClick={handleSubmit} value="Buscar" />
        </li>
      </ul>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Carnet</th>
            <th>Nombre</th>
            <th>Proyecto</th>
            <th>Cuerpo</th>
            <th>Fecha</th>
            <th>Servidor</th>
          </tr>
        </thead>
        {server.contenido.map(({ carne,nombre,curso_proyecto,cuerpo,fecha, procesado}, index) => {
          return (
            <tbody key={index}>
              <tr className={styles.tabla}>
                <td>{carne}</td>
                <td>{nombre}</td>
                <td>{curso_proyecto}</td>
                <td>{cuerpo}</td>
                <td>{fecha}</td>
                <td>{procesado}</td>
                
              </tr>
            </tbody>
          );
        })}
      </table>
      <label>Solicitud atendida por el servidor {server.servidor}</label>
    </div>
  );
};
