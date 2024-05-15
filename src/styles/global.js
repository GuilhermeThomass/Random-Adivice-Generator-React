import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'poppins',sans-serif;
        background-color:hsl(218, 23%, 16%);
    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }


`;

export default Global;