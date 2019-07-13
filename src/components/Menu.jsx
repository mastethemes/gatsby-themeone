import React, { useState, useRef } from "react"
import { useSpring, useChain, animated, useTrail, config } from "react-spring"
import styled from "styled-components"

const Burger = styled(animated.div)`
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 9999;
    background: #fff;
`

const Container = styled(animated.div)`
    position: absolute;
    width: 0;
    height: 100vh;
    z-index: 999;
    display: grid;
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-gap: 25px;
    padding: 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
    will-change: width, height;
`
const Item = styled(animated.div)`
    width: 100%;
    font-size: 36px;
    padding: 20px;
    will-change: transform, opacity;
`

const Menu = ({ menu = [] }) => {
    const [open, setOpen] = useState(false)

    const springRef = useRef()
    const { size, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: "0%" },
        to: { size: open ? "100%" : "0%" }
    })

    const transRef = useRef()
    const trail = useTrail(open ? menu.length : [], {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 100 : -600,
        from: { opacity: 0, x: -600 }
    })

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

    return (
        <>
            <Burger onClick={() => setOpen(opn => !opn)} />
            <Container style={{ ...rest, width: size }}>
                {trail.map(({ x, ...rest2 }, index) => {
                    return (
                        <Item
                            key={menu[index].name}
                            style={{
                                ...rest2,
                                transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
                            }}
                        >
                            {menu[index].name}
                        </Item>
                    )
                })}
            </Container>
        </>
    )
}

export default Menu
