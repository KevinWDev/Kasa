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
// export const ParaDescription = styled.p`
//     padding: 30px 12px 53px 20px;
//     color: ${colors.primary};
// `
// export const KasaToggleButton = styled.button`
//     width: 100%;
//     padding: 15.5px 0 15.5px 20px;
//     text-align: left;
//     border-radius: 10px;
//     background-color: ${colors.primary};
//     border: none;
//     font-size: 18px;
//     color: white;
// `