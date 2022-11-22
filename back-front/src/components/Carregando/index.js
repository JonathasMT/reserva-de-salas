import { Container, Loader } from "./styles";

import carregando from "../../assets/img/carregando.svg";

const Loading = () => {
  return (
    <Container>
        <Loader src={carregando} alt='Loading'/>
    </Container>
  );
};

export default Loading;