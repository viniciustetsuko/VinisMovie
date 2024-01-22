import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './style'

export function MovieItem({ isNew, value, onClik, ...rest}) {
    return (
        <Container isnew={isNew}>
            <input type='text' value={value} readOnly={!isNew} {...rest}></input>
            <button type='button' onClick={onClik} className={isNew ? 'button-add' : 'button-delete'}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}