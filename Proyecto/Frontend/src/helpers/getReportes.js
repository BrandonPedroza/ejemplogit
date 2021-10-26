import { getReporteIndividual } from "./getReporteInvididual";

export const getReportes= async (carnet)=>{
    let url='';
    let data=undefined;
if (carnet===''){
    url='http://34.125.29.51:3001/task'
    const requestOps = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
    const response= await fetch(url,requestOps)
    data=await response.json()
}
else
    data=getReporteIndividual(carnet)
return data
}