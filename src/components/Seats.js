import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Seats(){
    const[seats,setSeats]= useState([]);
    const { idSessao } = useParams();

    useEffect (()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response)=>{
            setSeats(response.data.seats)
        });
    },[]);

    return (
        <>
            <Header>
                <h1>CINEFLEX</h1>
            </Header>
            <Main>
                <h2>Selecione o(s) assento(s)</h2>

            </Main> 
            <Content>
                {seats.length>0 ?
                            
                            seats.map((seat,index)=> <Card key={index+1} id={seat.id} name={seat.name} isAvailable={seat.isAvailable} />
                                )
                            :
                            <h2>Loading...</h2>
                        }
                <div className="status">
                    
                <div>
                    <Seat></Seat>
                    <h3>Selecionado</h3>
                </div>
                <div>
                    <Seat></Seat>
                    <h3>Disponível</h3>
                </div>
                <div>
                    <Seat></Seat>
                    <h3>Indisponível</h3>
                </div>
                        
                        
                        
                </div>
            </Content>
            <footer></footer>
        </>
    );  
}

function Card ({id,name,isAvailable}){
    return (
        <Seat>
            {id}
        </Seat>
    );
}


const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 67px;
    position: fixed;
    left: 0px;
    right: 0;
    top: 0px;
    background-color: #C3CFD9;
    

    h1{
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`;

const Main= styled.div`
    margin-top: 67px;
    

    h2{
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content:center;
        text-align: center;
        letter-spacing: 0.04em;
        padding-top: 40px;
        padding-bottom: 40px;
    }
   
`;

const Seat = styled.div`
    border:none;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    margin: 0 3.5px 20px 3.5px;
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;

`;

const Content = styled.div`
    width:calc(100%-50px);
    padding:0 10px 24px 40px;
    display:flex;

    flex-wrap: wrap;

    h3{
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }

    .status{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:5px;

        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            margin-right:15px;
            margin-left:15px
        }
    }
   
`;