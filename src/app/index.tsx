import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { HeaderWidget } from "../widgets/header-widget";
import { MainWidget } from "../widgets/main-widget";
import { GlobalStyles, Content } from "./styles";
import { Container } from "../shared/ui/container";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <>
          <HeaderWidget />
          <Content>
            <MainWidget />
          </Content>
        </>
      </Container>
    </Provider>
  );
}

export default App;
