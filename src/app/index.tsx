import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { HeaderWidget } from "../widgets/header-widget";
import { GlobalStyles, Container, Main, Buttons, Info } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyles />
        <HeaderWidget />
        <Main>
          <Buttons></Buttons>
          <div>
            <Info></Info>
          </div>
        </Main>
      </Container>
    </Provider>
  );
}

export default App;
