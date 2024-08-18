import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { HeaderWidget } from "../widgets/header-widget";
import { MainWidget } from "../widgets/main-widget";
import { GlobalStyles, Container } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyles />
        <HeaderWidget />
        <MainWidget />
      </Container>
    </Provider>
  );
}

export default App;
