import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from './colors.js'

export const StyledLink = styled(Link)`
    font-size: 24px;
    font-weight: 500;
    padding-left: 57px;
    color: ${colors.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const DivHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LogoHeader = styled.img`
    width: 100%;
    min-width: 145px;
    height: 100%;
    min-height: 47px;
    display: block;
    @media screen and (max-width: 767px){
        width: 145px;
        height: 47px;
    }
`
