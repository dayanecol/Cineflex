import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success ({order}){

    const navigate =useNavigate();
    const{title,date,hour,places,name,cpf}=order;
    return (
        <>
            <Main>
                <p>Pedido feito com sucesso!</p>
                
            </Main>
            <Content>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>{title}</p>
                    <p>{date} {hour}</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    <p>{places.map(seat=>`Assento ${seat.name}`)}</p>
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>{name}</p>
                    <p>{cpf}</p>
                </div> 
            </Content>
            <Finish>
                <Button onClick={()=>navigate("/")}>Voltar pra Home</Button>
            </Finish>
            
        </>
    );
}

const Main= styled.div`
    margin-top: 67px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex-direction:column;
    align-items: center;
    letter-spacing: 0.04em;

    p{
        display: flex;
        justify-content:center;
        padding: 40px 125px;
        color: #247A6B;
    }
    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        flex-direction:column;
        align-items: flex-start ;
        letter-spacing: 0.04em;
    }

    
`;

const Content = styled.div`
    margin-left:30px;
    div{
        margin-bottom: 50px;
    }

    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        flex-direction:column;
        align-items: flex-start ;
        letter-spacing: 0.04em;
        margin-bottom:10px;
    }

    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;  
    }
`;

const Finish = styled.div`
    display:flex;
    justify-content:center;
`;

const Button = styled.button`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border:none;
    cursor: pointer;

`;
