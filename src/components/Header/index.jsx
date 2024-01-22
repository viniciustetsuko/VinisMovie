import { Profile } from "./Profile";
import { Input } from "../../components/Input";
import { Container, Search } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const { setFilto  } = useAuth();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return (
        <Container>
            <button onClick={goToHome}>
                <h1>VinisMovies</h1>
            </button>
            <Search>
                <Input placeholder="Pesquisar pelo título" onChange={e => setFilto(e.target.value)}/>
            </Search>
            <Profile/>
        </Container>
    )
}