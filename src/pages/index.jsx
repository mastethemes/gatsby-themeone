import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import { BigTitle, Subtitle } from "../elements/Titles"

import bg1 from "../images/bg_1.jpg"

const Bg = styled.div`
    background-image: url(${bg1});
`

const Index = () => (
    <>
        <Layout>
            <Bg className="zoomin">
                <BigTitle>
                    Hello, <br /> I'm John Doe.
                </BigTitle>
                <Subtitle>
                    I'm creating noice web experiences for the next generation of consumer-facing
                    companies.
                </Subtitle>
            </Bg>
        </Layout>
    </>
)

export default Index
