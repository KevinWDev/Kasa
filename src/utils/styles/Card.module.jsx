import styled from 'styled-components'
import colors from './colors'


export const ContainerPropriete = styled.div`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 25, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-color: ${colors.primary};
  height: 340px;

  @media screen and (max-width: 991px) {
    height: 255px;
  }
`
export const DivContainerPara = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2px 25px 18px;
`
export const ProprieteParagraph = styled.p`
  font-size: 18px;
  /* font-size: clamp(16px, 1.5vw, 18px); */
  font-weight: 500;
  color: white;
`
