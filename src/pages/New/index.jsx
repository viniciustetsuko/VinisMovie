import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textareas";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { api } from "../../service/api";


export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {

        try {
            if (!title) {
                return alert("Please fill the title field.")
            }

            if (newTag) {
                return alert("You left a tag in the field to add, but didn't click add. Click to add or leave the field empty.")
            }
            const isNotaValided = rating >= 0 && rating <= 5;
            
            if (!isNotaValided) {
                return alert("The film's rating must be between 0 and 5")
            }

            await api.post("/movies", {
                title,
                description,
                rating,
                tags
            })

            alert("Added new movie successfully!");
            navigate(-1);

        } catch(error) {
            if (error.response) {
                alert(error.response.data.massege);
            }else {
                alert("Unable to add movie.")
            }
        }
    }

    async function handleRemoveMovie() {
        const confirm = window.confirm("Are you sure you want to remove this movie?");
        if (confirm) {
            await api.delete(`/movies/${params.id}`);
            navigate(-1)
        } 
    }

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
                        <Input placeholder="Título" onChange={e => setTitle(e.target.value)}/>
                        <Input
                            valeu={rating}
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                        <Textarea placeholder="Observaçõs" onChange={e => setDescription(e.target.value)}/>

                    <Section title="Marcadores">
                    <div className="tags">
                    {
                        tags.map((tag, index) => (

                           <MovieItem
                                key={String(index)}
                                value={tag}
                                onClik={() => handleRemoveTag(tag)}
                           /> 
                        ))
                         
                    }
                       
                        <MovieItem
                            value={newTag}
                            isNew
                            placeholder="Nova Tag"
                            onChange={e => setNewTag(e.target.value)}
                            onClik={handleAddTag}
                        />
                    </div>
                    </Section>

                    <div className="buttons">

                        <Button title="Excluir filme" onClick={handleRemoveMovie} />
                        <Button className="salvar" title="Salvar Alterações" onClick={handleNewMovie}/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}