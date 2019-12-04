import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
cursor: pointer;
padding: 10px 15px;  
`


export const HeaderContainer = styled.div`
height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
height: 70%;
width: 70px;
padding: 25px;
`
export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
export const OptionLink = styled(Link)`
${OptionContainerStyles}`

export const OptionDiv = styled.div`
${OptionContainerStyles}`
