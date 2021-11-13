import './style/app.css'
import { useState } from 'react'

//Components
import LoadingServer from './components/LoadingServer'
import Calculadora from './components/calculadora'

//Images
const escudo_UD = require('./images/escudo_UD.svg')

const App = () => {
  const date = new Date(Date.now())

  const [render, setRender] = useState(false)

  return (
    <>
      <LoadingServer render={render} />
      <div className="app">
        <div className="app-content">
          <div className="header">
            <div className="left-header">
              <img src={escudo_UD} alt="Universidad Distrital" />
            </div>
            <div className="center-header">
              <h4>CREADOR POR: </h4>
              <h6>
                Johnatan Guillermo Ruiz Bautista <i>20181020034</i>
              </h6>
              <h6>
                Andres Leonardo Baquero Hernandez <i>20181020124</i>
              </h6>
              <h6>
                Brayan Alejandro Puentes Camargo <i>20181020044</i>
              </h6>
              <h6>
                Juan Camilo Ramírez Rátiva <i>20181020089</i>
              </h6>
            </div>
            <div className="right-header">{date.toLocaleDateString()}</div>
          </div>
          <div className="calculadora">
            <Calculadora setRender={setRender} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
