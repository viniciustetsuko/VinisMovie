import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarImg from "../../assets/avatar_placeholder (1).svg"
import { api } from "../../service/api";

export function Profile() {
    const { user,  updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [newpassword, setNewpassword] = useState("");
    const [oldpassword, setOldpassword] = useState("");
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg;
    const [avatar, setAvatar] = useState( avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: newpassword,
            old_password: oldpassword
        };

        const userUpdated = Object.assign(user, updated);

        await updateProfile({user: userUpdated, avatarFile});
    }

    function handleChangeAvatar(e) {
        const file = e.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário"/>
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setOldpassword(e.target.value)}/>
                <Input placeholder="Nova senha " type="password" icon={FiLock} onChange={e => setNewpassword(e.target.value)}/>
                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}