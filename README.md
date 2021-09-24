# A Gatsby Blog Theme with DatoCMS

## 🚀 Quick start

1.  **Clone the Repo.**

    Use the terminal to clone the repo.

    ```shell
    # clone the repo
    https://github.com/elpuas/gatsby-datocms.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory install packages and start it up.

    ```shell
    cd gatsby-datocms/
    npm install && gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Theme Structure**

```shell
├── .storybook
└── src
|  ├── components
|     ├── atoms
|     ├── blocks
|     └── molecules
|  ├── fonts
|  ├── functions
|  ├── hooks
|  ├── images
|  ├── pages
|  ├── stories
|  ├── styles
|    ├── atoms
|    ├── blocks
|    ├── molecules
|    ├── pages
|    ├── templates
|  └── templates
```

5.  **DatoCMS**
To Connect your dato API, is very simple, just create a env file `.env.example`

```shell
DATO_API_TOKEN=YOUR_API_KEY
```

6.  **Create Pages**
To create pages dynamically based on your models, you will need to update `gatsby-node.js` with your model, as an example:

```js
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // eslint-disable-next-line
    const createBlogsPosts = new Promise((resolve, reject) => {
        try {
            graphql(`
            {
                allDatoCmsArticle {
                    edges {
                        node {
                        slug
                        }
                    }
                }
            }
            `).then( res => {
                const posts = res.data.allDatoCmsArticle.edges;
                posts.map( ( { node: post } ) => {
                    const { slug } = post;

                    createPage({
                        path: `/blog/${slug}`,
                        component: path.resolve('./src/templates/blog-post.js'),
                        context: {
                            slug,
                        },
                    });
                });
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
```
Here we are creating pages based on the model `Article`, the GraphQL endpoint will be `allDatoCmsArticle`.

This theme uses `gatsby-source-datocms` [visit the documentation](https://www.gatsbyjs.com/plugins/gatsby-source-datocms/) All the options.

7.  **Storybook**
      This theme uses [storybook](https://storybook.js.org/), for documenting components. this is very handy when styling a component

      ```shell
      npm run storybook
      ```

8.  **Gatsby Documentation**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

9.  **DatoCMS Documentation**
    - [Documentation](https://www.datocms.com/docs)

    - [Content Modeling](https://www.datocms.com/docs/content-modelling)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
