import { useNavigate } from 'react-router-dom';
import { Button, Container } from './styles';

function NotFound() {
    const navegar = useNavigate();
    return(
        <Container>
            <h2>Pagina não encontrada</h2>
            <Button onClick={() => navegar('/')}>
                RETORNAR A PÁGINA INICIAL
            </Button>
        </Container>
    )
}

export default NotFound;