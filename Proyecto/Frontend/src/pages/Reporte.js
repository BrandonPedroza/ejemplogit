import React, {useState} from 'react';
import { ResultadoComponent } from '../components/ResultadoComponent';
import styles from '../css/form.module.css';
import { getReporteIndividual } from '../helpers/getReporteInvididual';
export const Reporte = () => {
  const [carnet,setcarnet]=useState('')
  const [cuerpo, setCuerpo] = useState({
    data:[],
    message: '',
  });
  const handleSubmit=(e)=>{
    console.log('valor de carnet',carnet);
    if(carnet===''){
      alert('ingresar carnet');
    }
    else{       
      e.preventDefault()
      getReporteIndividual(carnet).then(({data,message})=>{      
        setCuerpo({data,message})
      })
    }
  }
  const prip=(nombre,atributo)=>{
    return({
      nombre,
      atributo
    }
    )
  }
  console.log(prip('a','b'))
    return (
      <div className={`${styles.contenedor} animate__animated animate__bounceInRight`}>
        <label>Busqueda de Reportes</label>
        <ul>
          <li>
            <input type="text" onChange={event=>setcarnet(event.target.value)}  className={styles.txt_rep} placeholder="Ingresa Carnet" />
            <input type="submit" onClick={handleSubmit} value="Buscar" />
          </li>          
        </ul>
        <div className={styles.parrafo}>        
          <ResultadoComponent {...prip('Nombre: ',cuerpo.data.map(element=>element.nombre).slice(-1))}/> 
          <ResultadoComponent {...prip('Curso: ',cuerpo.data.map(element=>element.curso_proyecto).slice(-1))}/> 
          <ResultadoComponent {...prip('Procesado Por: ',cuerpo.data.map(element=>element.procesado).slice(-1))}/> 
          <ResultadoComponent {...prip('Fecha: ',cuerpo.data.map(element=>element.fecha).slice(-1))}/> 
          <ResultadoComponent {...prip('Cuerpo: ',cuerpo.data.map(element=>element.cuerpo).slice(-1))}/> 
        </div>
        <label>Solicitud atendida por el servidor {cuerpo.message}</label>
      </div>
    );
};
