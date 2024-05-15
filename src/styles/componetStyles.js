import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 16px;
    background-color: hsl(217, 19%, 24%);
    max-width: 40vw;
    @media screen and (max-width: 400px){
        max-width: 80vw;
    }
`

export const Adivace = styled.h1`
    background-color: transparent;
    color: hsl(193, 38%, 86%);
    text-align: center;
    font-size: 28px;
    font-weight: 800;
    margin: 32px 16px 16px 16px;
`

export const Texto = styled.h3`
    background-color: transparent;
    color: hsl(150, 100%, 66%);
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: 600;
    margin-top: 32px;
`

export const Divider = styled.div`
    margin-top: 28px;
    background-color: white;
    height: 1px;
    width: 90%;
    margin-bottom: 48px;
`

export const Bottom = styled.button`
    background-color:hsl(150, 100%, 66%) ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 50%;
    border: none;
    margin-bottom: -55px;
    position: relative;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 25px 1px hsl(150, 100%, 66%);
    }
`
