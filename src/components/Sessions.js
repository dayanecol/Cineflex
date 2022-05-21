// import sessions from "../data/sessions";

import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";


export default function Sessions() {
    const {idFilme } = useParams();
    const[movie,setMovie]= useState([]);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response)=>{
            setMovie(response.data.days);
        }) ;
        
    },[]);
      

    return (
        <>
            <Header>
                <h1>CINEFLEX</h1>
            </Header>
            <Main>
                <h2>Selecione o horário</h2>

            </Main>
            <Content>
                {movie.length>0 ?
                        
                        movie.map(sessao=> <Card weekday={sessao.weekday} date={sessao.date} key={sessao.id} showtimes={sessao.showtimes} />
                            )
                        :
                        <h2>Loading...</h2>
                    }

            </Content>        
                  
                    
               
            
            <footer></footer>
        </>
    );
}


function Card({weekday,date,showtimes}) {
    return (
        <Agenda>
            <div className="date">
                <p>{`${weekday} - ${date} `}</p>
            </div>
            <div className="hours">
                {showtimes.map((time,id)=> {
                    return(
                    <Link key={id} to={`/assentos/${id}`}>
                        <Button className="time">{time.name}</Button>
                    </Link>
                    );
                }
                    
                    )}
            </div>
            
        </Agenda>
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


const Content = styled.div`
    width:100%;
    // position: absolute;
    // left:0;
    // top:0;
    // margin: 170px 0px 120px 23px;

`;

const Agenda = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    p{

        padding: 0;
    }

    .date{
        width: 100%;
        
        display: flex;
        align-items: flex-start;
        justify-content: left;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

    }

    .hours{
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

`;

const Button= styled.button`
    margin: 22px 4px;
    border:none;
    width: 83px;
    height: 43px;
    left: 23px;
    top: 227px;
    background-color: #E8833A;
    border-radius: 3px;
    cursor:pointer;
`;
