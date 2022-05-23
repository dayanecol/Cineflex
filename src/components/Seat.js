import styled from "styled-components";

export default function Seat ({name,id,isAvailable,selected,isClicked}){    
    return(
        <>
             <Card isAvailable={isAvailable} selected={selected} onClick={()=>(!isAvailable)?alert("Esse assento não está disponível !"):isClicked(name,id)}>
            {name}
            </Card>
            
        </>
       
    );
}

function ColorBG(isAvailable,selected){
    if (selected){
        return "#8DD7CF";
    }
    else if(isAvailable){
        return "#C3CFD9";
    }
    else{
        return "#FBE192";
    }
}

function ColorBorder(isAvailable,selected){
    if (selected){
        return "#1AAE9E";
    }
    else if(isAvailable){
        return "#7B8B99";
    }
    else{
        return "#F7C52B";
    }
}

const Card = styled.div`
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
    background-color:${({isAvailable,selected})=> ColorBG(isAvailable,selected)};
    border: 1px solid ${({isAvailable,selected})=> ColorBorder(isAvailable,selected)};
    border-radius: 12px;
    cursor:pointer;
`;
