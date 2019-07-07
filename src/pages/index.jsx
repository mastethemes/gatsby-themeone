import React from "react"
import styled from "styled-components"

import { Parallax } from "react-spring/renderprops-addons.cjs"

// Components
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"

// Elements
import Inner from "../elements/Inner"
import { Title, BigTitle, Subtitle } from "../elements/Titles"

// Views
import Hero from "../views/Hero"
import Projects from "../views/Projects"
import About from "../views/About"
import Contact from "../views/Contact"

import avatar from "../images/avatar.jpg"

const ProjectsWrapper = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1200px) {
        grid-gap: 3rem;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
`

const AboutHero = styled.div``

const Avatar = styled.img``

const AboutSub = styled.span``

const AboutDesc = styled.p``

const ContactText = styled.p``

const Footer = styled.footer``

const Index = () => (
    <>
        <Layout>
            <Parallax pages={5}>
                <Hero offset={0}>
                    <BigTitle>
                        Hello, <br /> I'm John Doe.
                    </BigTitle>
                    <Subtitle>
                        I'm creating noice web experiences for the next generation of
                        consumer-facing companies.
                    </Subtitle>
                </Hero>
                <Projects offset={1}>
                    <Title>Projects</Title>
                    <ProjectsWrapper>
                        <ProjectCard
                            title="Freiheit"
                            link="https://www.behance.net/gallery/58937147/Freiheit"
                            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                        >
                            This project is my entry to Adobe's #ChallengeYourPerspective contest.
                        </ProjectCard>
                        <ProjectCard
                            title="Harry Potter"
                            link="https://www.behance.net/gallery/52915793/Harry-Potter"
                            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                        >
                            I entered the DOCMA 2017 award with this Harry Potter inspired image.
                        </ProjectCard>
                        <ProjectCard
                            title="Tomb Raider"
                            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
                            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                        >
                            Recreation of a Tomb Raider Wallpaper (Fan Art)
                        </ProjectCard>
                        <ProjectCard
                            title="Eagle"
                            link="https://www.behance.net/gallery/38068151/Eagle"
                            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
                        >
                            A fantasy image manipulation relocating the habitat of wild animals.
                        </ProjectCard>
                    </ProjectsWrapper>
                </Projects>
                <About offset={3}>
                    <Title>About</Title>
                    <AboutHero>
                        <Avatar src={avatar} alt="John Doe" />
                        <AboutSub>
                            The English language can not fully capture the depth and complexity of
                            my thoughts. So I'm incorporating Emoji into my speech to better express
                            myself. Winky face.
                        </AboutSub>
                    </AboutHero>
                    <AboutDesc>
                        You know the way you feel when you see a picture of two otters holding
                        hands? That's how you're gonna feel every day. My mother cried the day I was
                        born because she knew she’d never be prettier than me. You should make me
                        your campaign manager. I was born for politics. I have great hair and I love
                        lying. Captain? The kids want to know where Paulie the Pigeon is. I told
                        them he got sucked up into an airplane engine, is that all right?
                    </AboutDesc>
                </About>
                <Contact offset={4}>
                    <Inner>
                        <Title>Get in touch</Title>
                        <ContactText>
                            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other
                            platforms: <a href="https://dribbble.com/LekoArts">Dribbble</a> &{" "}
                            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
                        </ContactText>
                    </Inner>
                    <Footer>
                        &copy; 2019 by Gatsby Starter Portfolio Cara.{" "}
                        <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
                            Github Repository
                        </a>
                        . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
                    </Footer>
                </Contact>
            </Parallax>
        </Layout>
    </>
)

export default Index
