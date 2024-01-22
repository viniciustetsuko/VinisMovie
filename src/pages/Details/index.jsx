import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Avatar, Container, Content } from "./style";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import avatarImg from "../../assets/avatar_placeholder (1).svg"

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg;
  const [rating, setRating] = useState([]);
  const navigate = useNavigate();

  function HandleBack() {
    navigate(-1)
  }

  useEffect(() =>{
    if(data){
      setRating([...Array(data.rating ?? 1).keys()]);
    }
  }, [data]);

  useEffect(() => {
    async function FetchMovies() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    FetchMovies()
  }, []);
  return (
    <Container>
      <Header />

    {
      data &&
      <main>
        <Content>
          <button onClick={() => HandleBack()}>
            <FaArrowLeftLong />
            Voltar
          </button>

          <div>
            <h1>{data.title}</h1>
            {
              rating && rating.map((index) => (
                <FaStar key={String(index)}/>
              ))   
            }
          </div>

          <Avatar>
            <img
              src={avatarUrl}
              alt={user.name}
            />
            <p> {user.name}</p>
            <CiClock1 size={26} />
            <p>{data.created_at}</p>
          </Avatar>

        {
          data.movies_tags &&
          <Section>
          {
            data.movies_tags.map(tag => (
              <Tags
              title={tag.name}
              key={String(tag.id)}
              />
            ))
            
          }
          </Section>
        }

          <p>{data.description}</p>
        </Content>
      </main>
    }
    </Container>
  );
}
