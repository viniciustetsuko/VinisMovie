import { Container, Form, Background } from "./style";
import { Input } from '../../components/Input'
import {  FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { api } from "../../service/api";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Please fill all inputs!");
    }

    api.post("/users", { name, email, password})
    .then(() => {
      alert("User registered successfully!");
      navigate("/");
    })
    .catch( error => {
      if (error.response) {
        alert(error.response.data.message);
      }else {
        alert("Unable to register user");
      }
    });
  }

    return (
      <Container>
        <Form>
            <h1>Tetsu`s Movie</h1>
            <p>Aplicação para acompanhar tudo o que assistir.</p>
            <h2>Crie sua conta</h2>

            <Input placeholder="Nome" type="text" icon={FiUser}  onChange={e => setName(e.target.value)}/>
            <Input placeholder="E-mail" type="text" icon={FiMail}  onChange={e => setEmail(e.target.value)}/>
            <Input placeholder="Senha" type="password" icon={FiLock}  onChange={e => setPassword(e.target.value)}/>

            <Button title="Cadastrar" onClick={handleSignUp}/>

            <Link to="/">
            <FaArrowLeftLong/>
                Voltar para o Login
            </Link>
            
        </Form>

        <Background/>
      </Container>  
    )
}