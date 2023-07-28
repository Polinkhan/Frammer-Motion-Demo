import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RootRouter from "./App/Router/RootRouter";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
