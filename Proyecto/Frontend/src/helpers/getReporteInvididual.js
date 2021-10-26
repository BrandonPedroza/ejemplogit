export const getReporteIndividual= async (carnet)=>{
    const url=`http://34.125.29.51:3001/task/${carnet}`
    const requestOps = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
    const response= await fetch(url,requestOps)
    const data=await response.json()
    return data
}