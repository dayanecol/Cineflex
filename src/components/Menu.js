import Movies from "./Movies";
import styled from "styled-components";

export default function Menu() {

    return (
        <>
            <Header><h1>CINEFLEX</h1></Header>
            <Main>
                <h2>Selecione o filme</h2>
                <Movies />
            </Main>
        </>
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