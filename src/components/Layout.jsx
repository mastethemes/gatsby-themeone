import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/global"
import SEO from "./SEO"
import Menu from "./Menu"
import "typeface-cantata-one"
import "typeface-open-sans"

const Layout = ({ children }) => {
    const { site } = useStaticQuery(
        graphql`
            query SiteQuery {
                site {
                    siteMetadata {
                        menuLinks {
                            link
                            name
                        }
                    }
                }
            }
        `
    )

    return (
        <>
            <SEO />
            <GlobalStyle />
            <Menu menu={site.siteMetadata.menuLinks} />
            {children}
        </>
    )
}

export default Layout
