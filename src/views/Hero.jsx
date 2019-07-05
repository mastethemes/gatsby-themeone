import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48}  left="10%" top="20%" />
        <SVG icon="hexa" width={48}  left="60%" top="70%" />
        <SVG icon="box" width={6} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16}  left="80%" top="10%" />
        <SVG icon="triangle" width={12}  left="90%" top="50%" />
        <SVG icon="circle" width={16}  left="70%" top="90%" />
        <SVG icon="triangle" width={16}  left="30%" top="65%" />
        <SVG icon="cross" width={16}  left="28%" top="15%" />
        <SVG icon="circle" width={6}  left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8}  left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24}  left="5%" top="70%" />
      <SVG icon="circle" width={6}  left="4%" top="20%" />
      <SVG icon="circle" width={12}  left="50%" top="60%" />
      <SVG icon="upDown" width={8}  left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24}  left="40%" top="80%" />
      <SVG icon="triangle" width={8}  left="25%" top="5%" />
      <SVG icon="circle" width={64}  left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64}  left="5%" top="90%" />
      <SVG icon="box" width={6}  left="10%" top="10%" />
      <SVG icon="box" width={12}  left="40%" top="30%" />
      <SVG icon="hexa" width={16}  left="10%" top="50%" />
      <SVG icon="hexa" width={8}  left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
