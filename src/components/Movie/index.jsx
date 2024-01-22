import { Container } from "./style";
import { Tags } from "../../components/Tags";
import { FaStar } from "react-icons/fa";
import { Stars } from "../Stars";
import { useEffect, useState } from 'react'


export function Movie({ data, ...rest }) {
  const [rating, setRating] = useState([]);

  useEffect(() =>{
      setRating([...Array(data.rating ?? 1).keys()]);
  }, []);

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

    <Stars>
      {
        rating && rating.map((index) => (
          <FaStar key={String(index)}/>
        ))   
      }
      </Stars>
      
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tags key={tag.name} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
