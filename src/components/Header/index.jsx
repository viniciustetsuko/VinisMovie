import { Profile } from "./Profile";
import { Input } from "../../components/Input";
import { Container, Search } from "./style";



export function Header() {
    return (
        <Container>
            <h1>VinisMovies</h1>
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            <Profile/>
        </Container>
    )
}