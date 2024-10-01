import styled from "styled-components";

export const GusserWrapper = styled.div`
 display: flex;
 flex-direction: column;
 margin: 24px 48px;
 padding: 8px;
`

export const InputWrapper= styled.div`
 height:24px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 24px;
`

export const Input = styled.input`
display:flex;
height:30px;
left:20%;
position:relative;
text-align: center;
width: 60%;
`

export const Label = styled.label`
display:flex;
font-size:24px;
font-family: Arial, Helvetica, sans-serif;
padding:16px;
justify-content:center;
`

export const ButtonWrapper= styled.div`
display:flex;
justify-content:center;
`

export const Button = styled.button`
height:30px;
width:80px;
color:white;
cursor:pointer;
background-color:#80669d;
`

export const GameDetails = styled.div`
display:flex;
flex-direction:column;
font-family: Arial, Helvetica, sans-serif;
`

export const PreviousGuess = styled.div`
display:flex;
justify-content: center;
margin: 24px 12px 0 12px;
`

export const GuessValue = styled(PreviousGuess)`
margin: 24px 12px 0 12px;
` 

export const GuessCount= styled(GuessValue)`
margin:24px 12px;
`