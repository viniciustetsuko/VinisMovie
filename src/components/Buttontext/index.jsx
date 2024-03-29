import { Container } from "./style";


export function ButtonText({children, title, ...rest}) {
    return (
        <Container type="button"  {...rest}>
            {title}
            {children}
        </Container>
    )
}