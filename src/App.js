import Calculadora from "./components/Calculadora";
import Tabela from "./components/Tabela"
import React from "react";

const objClassificacao = [
  {classificacao: "Magreza", min: null, max: 19.5, grau: 0, cor: "#00FFFF"},
  {classificacao: "Normal", min: 19.5, max: 24.9, grau: 0, cor: "#98BF64"},
  {classificacao: "Sobrepeso", min: 25.0, max: 29.9, grau: "I", cor: "#FADA5E"},
  {classificacao: "Obesidade", min: 30.0, max: 39.9, grau: "II", cor: "#FC6A03"},
  {classificacao: "Obesidade Grave", min: undefined, max: 40.0, grau: "III", cor: "#E3242B"}
];

function App() {
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [imc, setIMC] = React.useState(0);
  const [classificaoIMC, setClassificacaoIMC] = React.useState("");

  return (
    <div className="App">
      <Calculadora
        altura={altura}
        setAltura={setAltura}
        peso={peso}
        setPeso={setPeso}
        imc={imc}
        setIMC={setIMC}
        setClassificacaoIMC={setClassificacaoIMC}
      ></Calculadora> 
      <Tabela 
        objClassificacao={objClassificacao}
        classificaoIMC={classificaoIMC}
        setClassificacaoIMC={setClassificacaoIMC}
      ></Tabela>
    </div>
  );
}

export default App;
