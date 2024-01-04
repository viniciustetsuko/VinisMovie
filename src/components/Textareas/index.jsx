import { Container } from "./stye";


export function Textarea({ value, ...rest }) {
    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}