import { Container, Loader } from "./styles";

import loading from "../../assets/img/loading.svg";

const Loading = () => {
  return (
    <Container>
        <Loader src={loading} alt='Loading'/>
    </Container>
  );
};

export default Loading;