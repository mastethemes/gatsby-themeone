import React from "react"
import { Spring } from "react-spring/renderprops"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import styled from "styled-components"

const SpringChild = styled.div`
    height: 100vh;
    overflow: hidden;
`

const CustomSpring = ({ children }) => {
    return (
        <TransitionState>
            {({ transitionStatus, exit, entry }) => {
                const mount = ["entering", "entered"].includes(transitionStatus)
                const seconds = mount ? entry.length : exit.length

                return (
                    <Spring
                        // to={{
                        //     transform: `translateY(${mount ? 0 : "100px"})`,
                        //     opacity: mount ? 1 : 0
                        // }}
                        from={{
                            opacity: 0,
                            transform: "translate3d(100%,0,0)"
                        }}
                        to={{
                            opacity: 1,
                            transform: "translate3d(0,0,0)"
                        }}
                        // enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                        leave={{
                            opacity: 0,
                            transform: "translate3d(-50%,0,0)"
                        }}
                        // config={{
                        //     duration: seconds * 1000
                        // }}
                    >
                        {props => (
                            <SpringChild style={props}>{children}</SpringChild>
                        )}
                    </Spring>
                )
            }}
        </TransitionState>
    )
}

const SpringLink = ({ to, children }) => (
    <TransitionLink
        to={to}
        exit={{ length: 1 }}
        entry={{ length: 1 }}
        className="page-link"
    >
        {children}
    </TransitionLink>
)

export { CustomSpring, SpringLink }
