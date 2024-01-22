import { Container } from "./style";

export function Stars({ children,  ...rest}) {
    return (
        <Container type="button"  {...rest}>
            {children}
        </Container>
    )
}