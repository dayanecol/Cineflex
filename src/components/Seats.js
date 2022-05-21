import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Seats(){
    const[seats,setSeats]= useState([]);
    const { idSessao } = useParams();
    const [name,setName] =useState("");
    const [cpf,setCpf] = useState("");
    const [movie,setMovie]=useState([]);
    const[day,setDay]= useState([]);
    const[hour,setHour]=useState([]);

    function submitData(event) {
        // modifique esta função para que a página não seja recarregada
        event.preventDefault();
    
        alert("Mensagem enviada com sucesso!");
        setName("");
        setCpf("");
      }

    useEffect (()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response)=>{
            setSeats(response.data.seats);
            setMovie(response.data.movie);
            setDay(response.data.day);
            setHour(response.data.name);

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
                <Places>
                    {seats.length>0 ?
                                
                                seats.map((seat,index)=> <Card key={index+1} number={index+1} id={seat.id} name={seat.name} isAvailable={seat.isAvailable} />
                                    )
                                :
                                <h2>Loading...</h2>
                            }
                </Places>
                
                <Status>
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
                </Status>
                <Form>
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

                </Form>
            </Content>
            <Footer>
                    <Movie>
                        
                        <div className="cover">
                            <img src={movie.posterURL} alt="cover" />
                        </div>
                    </Movie>
                    <div>
                        <h3>{movie.title}</h3>
                        <h3>{`${day.weekday} - ${hour} `}</h3>
                    </div>
            </Footer>
        </>
    );  
}

function Card ({id,name,isAvailable}){
    return (
        <Seat>
            {name}
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

const Places=styled.div`
    width:calc(100%-50px);
    padding:0 10px 24px 40px;
    display:flex;
    flex-wrap: wrap;
  
`;

const Content = styled.div`
    width:calc(100%-10%);
    margin-bottom: 150px;
    display:flex;
    flex-direction:column;

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
`;

const Status = styled.div`
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

`;

const Form = styled.div`
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
    }
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