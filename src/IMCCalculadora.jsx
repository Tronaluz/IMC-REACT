import React, { useState } from 'react';
import './IMCCalculadora.css';

function IMCCalculadora() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div className="imc-result">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculadora;
