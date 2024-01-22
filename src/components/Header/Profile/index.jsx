import { ContainerP } from "./style";
import { useAuth } from "../../../hooks/auth";
import { useNavigate } from "react-router-dom";
import avatarImg from "../../../assets/avatar_placeholder (1).svg"
import { api } from "../../../service/api";

export function Profile() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg;
  const navigate = useNavigate();

  function handleLogout() {
    signOut();
    navigate("/");
  }

  return (
    <ContainerP to='/profile'>
      <div>
        <strong>{user.name}</strong>
        <button onClick={ handleLogout }>Sair</button>
      </div>
      
      <img src={avatarUrl} alt='foto de perfil' />
    </ContainerP>
  );
}
