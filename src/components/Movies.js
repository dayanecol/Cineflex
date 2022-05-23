import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movies({movies}){   
    return (            
        <Movie>
            {movies.length>0?
                movies.map((movie,index)=> <Cover key={index+1} image={movie.posterURL} id={movie.id}/>)
                :
                <h2>Loading...</h2>
            }
        </Movie>
    );
} 

function Cover ({image,id}){
    return (
        <Link to={`/sessoes/${id}`} >
            <div className="cover">
                <img src={image} alt="cover" />
            </div>
        </Link>  
    );
}

const Movie = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 25px;
    
    .cover{
        display: flex;
        width: 145px;
        height: 209px;
        left: 30px;
        top: 169px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        padding: 8px;
        margin: 16px;
        cursor:pointer;
    }

    img{
        width: 129px;
        height: 193px;
    }

`;




