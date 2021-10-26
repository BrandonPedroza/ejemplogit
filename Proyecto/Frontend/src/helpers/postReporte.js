export const postReporte= async ({carnet,nombre,curso,cuerpo,procesado})=>{
    console.log(carnet,nombre,curso,cuerpo, procesado)
    const url=`http://34.125.29.51:3001/task`
    const requestOps = {
        mode:'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            carne: carnet,
            nombre:nombre,
            curso_proyecto:curso,
            cuerpo:cuerpo,
            procesado:procesado
        }),
      };
      const response= await fetch(url,requestOps)
      console.log(requestOps)
      console.log(response)
      const data= await response.json();
      console.log(data)
    return data
};