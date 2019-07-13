const config = require("./config/website")

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix

module.exports = {
    /* General Information */
    siteMetadata: {
        siteUrl: config.siteUrl + pathPrefix,
        menuLinks: [
            {
                name: "home",
                link: "/",
                description: "#a8edea → #fed6e3",
                height: 200
            },
            {
                name: "page2",
                link: "/page-2",
                description: "#f5f7fa → #c3cfe2",
                height: 400
            }
        ]
    },
    /* Plugins */
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/images/`,
                name: "images"
            }
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: config.googleAnalyticsID
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleShort,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: "standalone",
                icons: [
                    {
                        src: "/favicons/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/favicons/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        },
        /* Must be placed at the end */
        "gatsby-plugin-offline",
        "gatsby-plugin-netlify",
        "gatsby-plugin-sass",
        "gatsby-plugin-transition-link",
        {
            resolve: "gatsby-plugin-material-ui",
            options: {
                stylesProvider: {
                    injectFirst: true
                }
            }
        }
    ]
}
