import '../style/calculadora.css'
import { useState, useRef } from 'react'

//Hook
import useCalculadora from '../hooks/useCalculadora'

const Calculadora = ({ setRender }) => {
  const { result, getCalc } = useCalculadora()

  const optionsSend = useRef({
    binario: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16,
  })
  const options = useRef(['binario', 'octal', 'decimal', 'hexadecimal'])

  // Datos para envio
  const [optionBaseO, setOptionBaseO] = useState(null)
  const [optionBaseC, setOptionBaseC] = useState(null)
  const [input, setInput] = useState(null)

  const [notification, setNotification] = useState({
    render: false,
    message: null,
  })

  const handleCalc = () => {
    const baseO = optionsSend.current[optionBaseO]
    const baseC = optionsSend.current[optionBaseC]

    if (
      baseO !== null &&
      baseO !== undefined &&
      baseO !== 'Seleccionar' &&
      baseO !== '' &&
      baseC !== null &&
      baseC !== undefined &&
      baseC !== 'Seleccionar' &&
      baseC !== '' &&
      input !== null &&
      input !== undefined &&
      input !== ''
    )
      getCalc({ baseO, input, baseC, setRender })
    else
      setNotification({
        render: true,
        message: 'No se aceptan valores nulos',
      })
    setTimeout(() => {
      setNotification({
        render: false,
        message: null,
      })
    }, 1500)
  }

  return (
    <>
      <div className="calculadora-content">
        <h5>SISTEMAS COMBINACIONALES</h5>
        <div className="calculadora-form">
          <h6>Seleccione base</h6>
          <select
            name="select-baseO"
            id="select-baseO"
            onChange={(e) => setOptionBaseO(e.target.value)}
            defaultValue={'Seleccionar'}
          >
            <option value="Seleccionar" selected>
              Seleccionar
            </option>
            {options.current?.map((option, index) => (
              <option key={index}> {option} </option>
            ))}
          </select>
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Dato númerico"
            onChange={(e) => setInput(e.target.value)}
          />
          <h6>Seleccione base</h6>
          <select
            name="select-baseC"
            id="select-baseC"
            onChange={(e) => setOptionBaseC(e.target.value)}
            defaultValue={'Seleccionar'}
          >
            <option value="Seleccionar" selected>
              Seleccionar
            </option>
            {options.current?.map((option, index) => (
              <option key={index}> {option} </option>
            ))}
          </select>
          {notification.render && (
            <div className="notification">
              <h6> {notification.message} </h6>
            </div>
          )}
          <button onClick={() => handleCalc()}>CALCULAR</button>
          <label>
            <h6>
              El resultado es: <i>{result}</i>
            </h6>
          </label>
        </div>
      </div>
    </>
  )
}

export default Calculadora
