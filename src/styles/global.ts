
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
      --White: hsl(0, 0%, 100%);
      --LightGray: hsl(212, 45%, 89%);
      --GrayishBlue: hsl(220, 15%, 55%);
      --DarkBlue: hsl(218, 44%, 22%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }
`









