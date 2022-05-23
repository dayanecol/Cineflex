import Movies from "./Movies";
import axios from "axios";
import { useState,useEffect } from "react";
import styled from "styled-components";

export default function Menu() {

    const [movies,setMovies]= useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise
            .then(response=>{
                setMovies(response.data);
        })
            .catch(err=>{
                setError(true);
        })
    },[]);

    return (
            <Main>
                <h2>Selecione o filme</h2>
                {!error ? null: <h2>ERRO!</h2>}
                <Movies movies={movies}/>
            </Main>
    );
}

const Main= styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;