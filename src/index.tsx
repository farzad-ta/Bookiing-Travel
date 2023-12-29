// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import Theme from "theme";
import "./index.css";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  padding: 32px 12vw;
  height: 100vh;
  /* overflow:hidden; */
  /* display:flex; */
  align-items: center;
  justify-content: center;
`;
ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Container>
        <App />
      </Container>
    </Theme>
  </Provider>,
  document.getElementById("root")
);
