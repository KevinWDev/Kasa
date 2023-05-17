import { Rating } from "@mui/material";
import styled from "@emotion/styled";
import colors from "./colors";

export const StyledRating = styled(Rating)`
    pointer-events: none;
    color: ${colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Description = styled.div`
    width: 582px;
    background-color: ${colors.backgroundGray};
    border-radius: 10px;
    
`
