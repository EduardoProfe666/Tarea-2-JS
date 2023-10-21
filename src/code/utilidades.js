export const validarNoNullUndefined = (x) => x !== null && x !== undefined

export const generarIdUnico = () =>
  Math.floor(performance.timeOrigin * performance.now() + performance.timeOrigin)
    .toString(36)
    .substring(0, 9)
