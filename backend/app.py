from flask import Flask, request, make_response, jsonify
from flask_cors import CORS

#Cambio de base
from Cambio_Base import CambioBase

#Herramientas
import json       

app = Flask(__name__)
CORS(app)

#cambio_base = CambioBase()

@app.route("/calc", methods=['POST'])
def calc():
    if request.data:
        data_raw = request.data.decode("utf-8")
        json_data = json.loads(data_raw) #print(json_data) Debug de datos entrantes

        baseO = json_data['baseO']
        baseC = json_data['baseC']
        numero = json_data['input']

        cambio_base = CambioBase()
        resultado = cambio_base.basea_baseb(numero, baseO, baseC)
        print(resultado)
        if resultado != None:
            return make_response(jsonify({"results": resultado}), 200)
        else:
           return make_response(jsonify({"results": f'El número {numero} no está en formato base {baseO}'}), 500) 
    return make_response(jsonify({"results": 'Falló la comunicación con el servidor'}), 500)

if __name__ == '__main__':
    app.run(debug=True)