import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-size: ${({ theme }) => theme.font.size.sm.base};
    direction: ${(props) => (props.isLtr ? 'ltr' : 'rtl')};

    /* font-weight: ${({ theme }) => theme.font.weight["500"]}; */
    /* letter-spacing: -0.6px; */
  }

  /* img {
    display: inline-block;
  } */

  ul {
    list-style: none;
  }

  /* button, input, select,textarea {
    all: unset;
  } */

  a {
    color: inherit;
    text-decoration: none;
  }
`;
