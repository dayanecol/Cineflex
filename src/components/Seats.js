import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Seat from "./Seat";
import Form from "./Form";

export default function Seats ({checkOut}){
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const { idSessao } = useParams();
    const[seats,setSeats]= useState([]);
    const [selectedSeat,setSelectedSeat]=useState([]);
    const [name,setName] =useState("");
    const [cpf,setCpf] = useState("");
    const [movie,setMovie]=useState([]);
    const[day,setDay]= useState([]);
    const[hour,setHour]=useState([]);

    function submitData(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
        console.log(`ids: ${selectedSeat.map(seat=>seat.id)},
        name: ${name},
        cpf: ${cpf}`);
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",{
            ids: selectedSeat.map(seat=>seat.id),
            name: name,
            cpf: cpf
        });

        promise.then(response=>{
            checkOut({
                title: movie.title,
                date: day.date,
                hour:hour,
                places: selectedSeat,
                name:name,
                cpf:cpf
            })
            navigate("/sucesso");
        })

        setName("");
        setCpf("");
      }

    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise
            .then((response)=>{
                setSeats(response.data.seats);
                setMovie(response.data.movie);
                setDay(response.data.day);
                setHour(response.data.name);
            })
            .catch(err=>{
                setError(true);
            })
    },[]);

    function Switch(name,id){
            
            if(!selectedSeat.some(seat=>seat.id===id)){
                setSelectedSeat([...selectedSeat,{name,id}]);
            }
            else{
                setSelectedSeat(selectedSeat.filter(seat =>seat.id !== id));
            }
        }

    return (
        <>
            <Main>
                <h2>Selecione o(s) assento(s)</h2>
            </Main> 
            <Content>
                <Places>
                    {!error ? null: <h2>ERRO!</h2>}
                    {seats.length>0 ?
                                
                                seats.map((seat,index)=>{
                                    return <Seat 
                                        key={index+1} 
                                        id={seat.id} 
                                        name={seat.name} 
                                        isAvailable={seat.isAvailable} 
                                        selected={selectedSeat.some(item=>item.id===seat.id)} 
                                        isClicked={(name,id)=>Switch(name,id)}
                                    />
                                })
                                :
                                <h2>Loading...</h2>
                            }
                </Places>
                <Status>
                    <div>
                        <Card className="selected"></Card>
                        <h3>Selecionado</h3>
                    </div>
                    <div>
                        <Card className="available"></Card>
                        <h3>Disponível</h3>
                    </div>
                    <div>
                        <Card className="notAvailable"></Card>
                        <h3>Indisponível</h3>
                    </div>
                </Status>
                <Form 
                    name={name}
                    setName={setName}
                    cpf={cpf}
                    setCpf={setCpf}
                    submitData={submitData}
                />
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

const Places=styled.div`
    width:calc(100%-50px);
    padding:0 10px 0px 40px;
    display:flex;
    flex-wrap: wrap;
  
`;

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
    width: 24px;
    height: 24px;
    border-radius: 17px;
    cursor:pointer;
`;

const Status = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:5px;

    .selected{
        
        background-color:  #8DD7CF;
        border: 1px solid #1AAE9E;
    }

    .notAvailable{
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }

    .available{
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
    }

    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-right:15px;
        margin-left:15px
    }

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