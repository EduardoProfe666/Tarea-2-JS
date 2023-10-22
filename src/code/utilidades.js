export const validarNoNullUndefined = (x) => x !== null && x !== undefined

export const generarIdUnico = () =>
  Math.floor(performance.timeOrigin * performance.now() + performance.timeOrigin)
    .toString(36)
    .substring(0, 9)
export const dormirEjecucion = (ms)=>{
  let dormirHasta = new Date().getTime()+ms;
  while(new Date().getTime()<dormirHasta) continue
}
  
  
    
