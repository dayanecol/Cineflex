import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    
    return (
        <>
            <Return>
                <Button onClick={() => navigate(-1)}>
                    Voltar
                </Button>
            </Return>
            <Logo>
                <h1>CINEFLEX</h1>
            </Logo>
        </>
    );
}



const Logo = styled.div`
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

const Return = styled.div`
    
    left: 10px;
    top: 10px;
    position:fixed;
    z-index:1;
    

`;

const Button= styled.button`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    width: 70px;
    height: 25px;
    background-color: #E8833A;
    border-radius: 3px;
    border:none;
    cursor:pointer;

`;