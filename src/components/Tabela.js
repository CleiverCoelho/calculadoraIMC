import styled from "styled-components"

export default function Tabela({objClassificacao, classificaoIMC, setClassificacaoIMC}){
    return (
    <TextoTabela>
        <Classificao>
            <TituloIndice>
                <td>IMC</td>
                <td>Classificação</td>
                <td>Grau</td>
            </TituloIndice>
            {objClassificacao.map( (obj) => {
                let textoClassificacao = "";
                if(obj.min === null){
                    textoClassificacao = "Menor que " + obj.max;
                }else if(obj.min === undefined){
                    textoClassificacao = "Maior que " + obj.max;
                }else{
                    textoClassificacao = "Entre " + obj.min + " e " + obj.max;
                }
                return(
                    <Indice key={obj.classificacao} color={obj.classificacao === classificaoIMC? obj.cor : ""}>
                        <td>{textoClassificacao}</td>
                        <td>{obj.classificacao}</td>
                        <td>{obj.grau}</td>
                    </Indice>
            ) })}
        </Classificao>
    </TextoTabela>
    )
}

const TextoTabela = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Classificao = styled.table`
    border: none;
    border-radius: 5px;
    text-align: center;
    tr{
        width: 300px;
        height: 50px;
        color: ${(props) => props.color}
    }
    td{
        width: 300px;
        height: 30px;
        border: 1px solid rgba(2, 2, 2, 0.08);
    }
`

const Indice = styled.tr`
    background: ${(props) => props.color};
`

const TituloIndice = styled.tr`
    background: rgba(0, 128, 0, 0.6);
`