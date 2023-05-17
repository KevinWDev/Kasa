import styled from "styled-components";
import colors from "./colors";


export const ContainerInfosOpen = styled.div`
    width: 100%;
    border-radius: 10px;
    height: 281px;
    border-radius: 10px;
    background-color: ${colors.backgroundGray};
`
export const ContainerInfosClose = styled.div`
    width: 100%;
`
export const BtnInfos = styled.button`
    width: 100%;

    padding: 15.5px 18px 15.5px 20px;
    text-align: left;
    border-radius: 10px;
    background-color: ${colors.primary};
    border: none;
    font-size: 18px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const DivInfos = styled.div`
    padding: 30px 12px 53px 20px;
    color: ${colors.primary};
   list-style-type: none;
`

export const ImgArrow = styled.img`
width: clamp(16px, 2vw, 24px);
height: 14px;
@media screen and (max-width: 991px){
   height: 9px;
}
`

