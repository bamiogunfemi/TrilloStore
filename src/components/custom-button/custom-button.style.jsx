import styled, { css } from 'styled-components'



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

const getButtonStyles = props => {
  if (props.googleSignIn) {
    return GoogleButton
  }
  return props.inverted ? InvertedButton : ButtonStyles
}
export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 5% 0 5%;
font-size: 15px;

text-transform: uppercase;
font-family: 'Scope One', serif;
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

${getButtonStyles}

`
const InvertedButton = css`

  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover{
    background-color: black;
    color: white;
    border:none;
  }
}
`
const GoogleButton = css`

  background-color:#4285f4 ;
  color: white;

&:hover{
  background-color: #357ae8;
  border: none;
 
}
`
