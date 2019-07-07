const path = require(`path`)
const productPages = require("./json/places.json")

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const template = path.resolve("./src/templates/product.js")

    productPages.forEach(p => {
        createPage({
            path: p.url,
            component: template,
            context: p
        })
    })
}
