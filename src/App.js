import { Adivace, Container, Texto, Divider, Bottom } from "./styles/componetStyles";
import Global from "./styles/global";
import { FaDiceFive } from "react-icons/fa";
import api from "./api";

import { useEffect, useState} from "react";

function App() {
  
  const [quote, setQuote] = useState();
  useEffect(() => {
    getQuoteApi()
  }, []);

const getQuoteApi = () => {
  api
      .get("/advice")
      .then((response) => setQuote(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
}

function handleClick(){
  getQuoteApi()
}

  return (
    <>
      <Container>
        <Global/>
        <Texto>ADVICE #{quote?.slip.id}</Texto>
        <Adivace>"{quote?.slip.advice}"</Adivace>
        <Divider></Divider>
        <Bottom onClick={handleClick}>
          <FaDiceFive size={25} style={{
            backgroundColor : "transparent",
          }} />
        </Bottom>
      </Container>
    </>
  );
}

export default App;
