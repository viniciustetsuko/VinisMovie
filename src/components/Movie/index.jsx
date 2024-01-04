import { Container } from "./style";
import { Tags } from "../../components/Tags";
import { FaStar } from "react-icons/fa";

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      
      <p>
        Um garoto de 12 anos chamado Dre Parker se muda para a China com a mãe e
        se vê em um terra estranha. Ele sabe um pouco de caratê, mas suas
        habilidades não são o bastante para enfrentar o valentão da escola,
        Cheng. Dre faz amizade com o Sr. Han, um mestre das artes marciais, que
        lhe ensina os segredos do kung fu na esperança de que o garoto possa
        derrotar Cheng e, quem sabe, conquistar o coração da linda Mei Ying.
      </p>
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
