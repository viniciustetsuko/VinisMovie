import { FiPlus } from 'react-icons/fi'
import { Content, Div, NewMovie } from './style'
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { api } from "../../service/api";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom'

export function Home() {
    const { filtro  } = useAuth();
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies?title=${filtro}`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [filtro])
   
    return (
        <Content>
            <Header/>
            <Section >
                <Div>
                <h2> Meus filmes</h2>
                    <NewMovie to="/new">
                        <FiPlus/>
                        Criar filmes
                    </NewMovie>
                </Div>
                
                {
                        movies.map(movie => (
                              <Movie
                                data={movie}
                                key={String(movie.id)}
                                onClick={() => handleDetails(movie.id)}
                              />  
                        ))
                    
                }
            </Section>
        </Content>
    )
}