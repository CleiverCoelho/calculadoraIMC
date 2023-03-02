import React from "react"
import styled from "styled-components";

export default function Calculadora({altura, setAltura, peso, setPeso, imc, setIMC, setClassificacaoIMC}){

    function calcularIMC(){

        const pesoTratado = trataValores(peso);
        const alturaTratada = trataValores(altura)
        
        const novoIMC = (pesoTratado/(alturaTratada*alturaTratada));
        console.log(novoIMC.toFixed(2));
        setIMC(novoIMC.toFixed(2));
        if(novoIMC.toFixed(2) < 19.5){
            setClassificacaoIMC("Magreza");
        }else if(novoIMC.toFixed(2) >= 19.5 && novoIMC.toFixed(2) <= 24.9){
            setClassificacaoIMC("Normal");
        }else if(novoIMC.toFixed(2) >= 25 && novoIMC.toFixed(2) <= 29.9){
            setClassificacaoIMC("Sobrepeso")
        }else if(novoIMC.toFixed(2) >= 30 && novoIMC.toFixed(2) <= 39.9){
            setClassificacaoIMC("Obesidade")
        }else if(novoIMC.toFixed(2) >= 40){
            setClassificacaoIMC("Obesidade Grave");
        }
    }

    function trataValores(valor) {
        valor = valor.trim();
        valor = valor.replace(",", ".");
        valor = Number(valor);
    
        return valor;
    }
    function limparIMC(){
        setAltura("");
        setPeso("");
        setIMC(0);
    }
    
    return (
        <Menu>
            <h1>Calculadora IMC</h1>
            <Valores>
                <Inputs>
                    Altura
                    <input
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    ></input>
                    <button onClick={limparIMC}>Limpar</button>
                </Inputs>
                <Inputs>
                    Peso
                    <input
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    ></input>
                    <button disabled={!(peso && altura)} onClick={calcularIMC}>Calcular</button>
                </Inputs>
            </Valores>
            <Imc>{imc === undefined || imc === 0 ? "IMC" : `Seu IMC é: ${imc}`}</Imc>
        </Menu>
    )
}

const Menu = styled.div`
    width: 100%;
    height: 50%;
    text-align: center;
    h1{
        color: green;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 700;
    }
    button{
        &:hover{
            color: gray;
        }
    }
    input, button{
        background-color: white;
        width: 300px;
        height: 30px;
        border: 1px solid green;
        border-radius: 10px;
        margin: 5px 0px;
    }
`

const Valores = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Inputs = styled.div`
    color: green;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    
`

const Imc = styled.button`
    margin-top: 40px;
    color: green;
`