// import sessions from "../data/sessions";

import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";


export default function Sessions() {
    const {idFilme } = useParams();
    const[days,setDays]= useState([]);
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response)=>{
            setDays(response.data.days);
            setMovie(response.data);

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
                {days.length>0 ?
                        
                        days.map(sessao=> <Card weekday={sessao.weekday} date={sessao.date} key={sessao.id} showtimes={sessao.showtimes} />
                            )
                        :
                        <h2>Loading...</h2>
                    }

            </Content>        
            <Footer>
                    <Movie>
                        
                        <div className="cover">
                            <img src={movie.posterURL} alt="cover" />
                        </div>
                    </Movie>
                    <h3>{movie.title}</h3>
            </Footer>
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
                    <Link key={id} to={`/assentos/${time.id}`}>
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
    margin-bottom: 150px;
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
    text-decoration:none;
    color:#FFF;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
`;

const Footer= styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h3{
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
    }
    
`;

const Movie = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    
    .cover{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 64px;
        height: 89px;
        left: 10px;
        bottom: 14px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        cursor:pointer;
        margin-left:10px;
        margin-right:14px;
    }

    img{
        width: 48px;
        height: 72px;
    }

`;