import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textareas";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <FaArrowLeftLong/>
                            Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="input">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                        <Textarea placeholder="Observaçõs"/>

                    <Section title="Marcadores">
                    <div className="tags">
                        <MovieItem value="Red Crescer é uma fera"/>
                        <MovieItem value="" isNew placeholder="Novo marcador"/>
                    </div>
                    </Section>

                    <div className="buttons">

                        <Button title="Excluir filme"/>
                        <Button classNam="salvar" title="Salvar Alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}