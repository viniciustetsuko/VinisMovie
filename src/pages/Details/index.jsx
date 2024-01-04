import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Avatar, Container, Content } from "./style";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Link to='/'>
            <FaArrowLeftLong />
            Voltar
          </Link>

          <div>
            <h1>Karate kid</h1>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <Avatar>
            <img
              src='https://github.com/viniciustetsuko.png'
              alt='foto de perfil'
            />
            <p> Por Vinicius Tetsuko</p>
            <CiClock1 size={16} />
            <p>04/01/2024 ás 08:00</p>
          </Avatar>

          <Section>
            <Tags title='açao' />
            <Tags title='drama' />
            <Tags title='luta' />
          </Section>

          <p>
            O filme, dirigido por Harald Zwart (que não fez ou faria nada tão
            bom novamente), já tem início com um plano que encontra o jovem Dree
            (Smith) arrastando uma grande mala em um quarto vazio, enquanto
            observa melancólico o marco da porta onde estão sinalizadas as
            diferentes alturas que teve enquanto viveu ali. Simples assim
            descobrimos que o menino está se mudando da casa em que cresceu, e o
            título do filme só surge, de maneira quase cômica, quando ele tenta
            exercitar a língua do país para o qual está indo com o passageiro do
            seu lado no avião, que, apesar de ser de etnia asiática, afirma:
            “cara, eu sou de Los Angeles”, gerando uma decepção no menino, o que
            resume a sua trajetória ao longo da história. Arrastado para a China
            pela mãe (Taraji P. Henson), pois ela foi transferida para lá a
            trabalho, Dree não demora a encontrar problemas para se adaptar ao
            novo lar. Não só a língua é uma barreira, como também alguns garotos
            que passam a implicar e a persegui-lo moral e fisicamente, tanto por
            ele ser americano como pelo fato de estar fazendo amizade com a bela
            Meiying (Wenwen Han), adorada por um deles. É aí que o pequeno e
            deslocado imigrante recorre ao Sr. Han (Jackie Chan), responsável
            pela manutenção dos apartamentos em que mora, e também um insuspeito
            mestre nas artes do kung fu. Han passa então a fazer com que Dree
            exercite diversas tarefas manuais, tentando ensiná-lo que o kung fu
            está na humildade de extrair aprendizado de qualquer atividade no
            dia a dia.
          </p>

          <p>
            Grande parte do sucesso de Karate Kid se deve à dinâmica entre Smith e Chan. Enquanto o primeiro consegue variar, com impressionante habilidade, entre a extrema extroversão e a tristeza e raiva incontidas, o segundo baseia sua performance em um tom monocórdio e uma proposital inexpressividade, que não só condizem com o passado de seu personagem – revelado em uma cena dramática e plasticamente belíssima – como também ajudam a ressaltar os momentos em que o Sr. Han realmente expressa algum sentimento, como preocupação, tristeza ou a nostalgia ao revisitar um lugar que não via há muitos anos. As diferenças entre Dree e Han e suas respectivas fragilidades é o que acaba tornando sua amizade tão especial para o espectador, que consegue identificar neles duas figuras imperfeitas e multifacetadas, capazes de arrogância e frieza, mas também de admiração mútua – além disso, é difícil não torcer por personagens que conseguem arrancar risadas tão gostosas. Já Taraji P. Henson, mesmo que em um papel menor, também diverte como a mãe do garoto, tão empolgada com o novo lugar, e ao mesmo tempo desolada pela tristeza do filho. Tudo em uma trama que poderia facilmente ser retratada com o típico timing de produções para entreter a família e apenas isso. Mas que, felizmente, rompendo expectativas, ganha um olhar mais atento aqui.
          </p>

          <p>
            Primeiramente, o longa se apresenta na belíssima razão de aspecto 2.35:1, um formato de tela longo ao qual historicamente se associam filmes mais “sérios”. A isso se soma uma dessaturação da imagem, provavelmente aplicada na pós-produção pelo diretor de fotografia, Roger Pratt, que busca um efeito que vai justamente na contramão dos blockbusters enlatados, que tendem a ser tão coloridos quanto conseguem. Por fim, Zwart e Pratt juntam esforços e preferem aqui e ali a câmera na mão, o que cria uma sensação de maior realismo e contrasta com momentos de beleza ímpar, como o que foca em Dree observando uma encantadora de serpentes na beira de um enorme precipício. E é particularmente bela a sequência passada em um teatro de sombras, que encontra mais tarde uma rima visual encantadora em um diálogo catártico entre o protagonista e o Sr. Han.
          </p>
        </Content>
      </main>
    </Container>
  );
}
