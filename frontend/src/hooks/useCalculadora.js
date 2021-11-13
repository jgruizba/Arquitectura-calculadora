import { useState, useCallback } from 'react'

//Servicios
//1. Enviar los datos al servidor
import getCalcService from '../services/getCalc'

const useCalculadora = () => {
  const [result, setResult] = useState(null)

  const getCalc = useCallback(async ({ baseO, input, baseC, setRender }) => {
    try {
      setRender(true)
      const data = await getCalcService({ baseO, input, baseC })
      if (await data) {
        setRender(false)
        setResult(await data[0])
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  return {
    result,
    getCalc,
  }
}

export default useCalculadora
