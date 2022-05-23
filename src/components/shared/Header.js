import styled from "styled-components";

export default function Header(){
     return (
        <Logo><h1>CINEFLEX</h1></Logo>
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