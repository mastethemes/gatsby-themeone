import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Divider } from "../elements/Dividers"
import Content from "../elements/Content"
import { UpDown, UpDownWide } from "../styles/animations"
import SVG from "../components/SVG"

const Wrapper = styled.div``

const Hero = ({ children, offset }) => (
    <>
        <Content speed={0.4} offset={offset}>
            <Wrapper>{children}</Wrapper>
        </Content>
    </>
)

export default Hero

Hero.propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number.isRequired
}
