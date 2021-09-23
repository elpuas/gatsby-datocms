const path = require('path')
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: `https://elpuas.com`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-datocms`,
            options: {
                // You can find your read-only API token under the Settings > API tokens
                // section of your administrative area. Make sure to grant both CDA and CMA permissions.
                apiToken: process.env.DATO_API_TOKEN,

                // The project environment to read from. Defaults to the primary environment:
                environment: `main`,

                // If you are working on development/staging environment, you might want to
                // preview the latest version of records instead of the published one:
                previewMode: false,

                // Disable automatic reloading of content when some change occurs on DatoCMS:
                disableLiveReload: false,

                // Custom API base URL (most don't need this)
                // apiUrl: 'https://site-api.datocms.com',

                // Setup locale fallbacks
                // In this example, if some field value is missing in Italian, fall back to English
                // localeFallbacks: {
                // es: ['en'],
                // },
            },
        },
    ]
}