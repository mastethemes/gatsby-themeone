import styled from "styled-components"
import { rotateAnimation } from "../styles/animations"
import triangle from "../images/triangle.svg"

export const Title = styled.h1`
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    &:before {
        content: "";
        width: 40px;
        height: 40px;
        background: url(${triangle});
        position: absolute;
        background-size: 40px;
        ${rotateAnimation("4s")};
        left: -60px;
        top: 5px;
    }
`

export const BigTitle = styled.h1`
    font-size: 200px;
    text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

export const BigTitleThin = styled(BigTitle)`
    font-weight: 100;
    font-family: "RalewayLight", sans-serif, serif;
`

export const Subtitle = styled.p`
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`

export const SmallLabel = styled.p`
    font-size: 14px;
    margin: 0;
`
export const MediumLabel = styled.p`
    font-size: 18px;
    display: flex;
    align-items: center;
    margin: 0;
    cursor: pointer;
`
export const BigLabel = styled.p`
    font-size: 60px;
    margin: 10px 0 20px;
    & span {
        margin-top: -10px;
        font-size: 30px;
    }
`
