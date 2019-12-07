import styled, { css } from 'styled-components'

const InvertedButton = css`

  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover{
    background-color: black;
    color: white;
    border:none;
  }

`;

const ButtonStyles = css`
background-color: black;
color: white;
border:none;
&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

`

const googleSignIn = css`

  background-color:#4285f4 ;
  color: white;

&:hover{
  background-color: #357ae8;
  border: none;
 
}
`

const getButtonStyles = props => {
  if (props.googleSignIn) {
    return googleSignIn
  }
  return props.inverted ? InvertedButton : ButtonStyles
}
export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Scope One', serif;
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;


&:hover{
  background-color:white;
  color:black;
  border:1px solid black;

}
${getButtonStyles}

`

