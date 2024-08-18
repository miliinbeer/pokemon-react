import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { HeaderWidget } from "../widgets/header-widget";
import { GlobalStyles, Container} from "./styles";


function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyles />
        <HeaderWidget />
      </Container>
    </Provider>
  );
}

export default App;
