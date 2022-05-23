import styled from "styled-components";

export default function Form({name,setName,cpf,setCpf,submitData}) {
    return (
        <Card>
            <form onSubmit={submitData}>
                <div><label htmlFor="name">Nome do comprador:</label></div>
                <div><input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Digite seu nome..."
                    required
                    onChange={(e) => setName(e.target.value)}
                /></div>
                <div><label htmlFor="cpf">CPF do comprador:</label></div>
                <div> <input
                    type="number"
                    id="cpf"
                    value={cpf}
                    placeholder="Digite seu CPF..."
                    required
                    onChange={(e) => setCpf(e.target.value)}
                /></div>
                <Button>
                    <button type="submit">Reservar assento(s)</button>
                </Button>
            </form>
        </Card>
    );
}


const Card = styled.div`
    display:flex;
    flex-direction:column;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    margin-top:42px;
    input{
        width: 327px;
        height: 51px;
        left: 24px;
        top: 497px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom:7px;
        margin-top:3px;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color:#AFAFAF;
        padding:18px;
    }
    
`;

const Button= styled.div`
    display:flex;
    justify-content:center;
    margin-top:50px;

    button{
        border:none;
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border-radius: 3px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content:center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        cursor: pointer;
    }
`;