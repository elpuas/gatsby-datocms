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

    // eslint-disable-next-line
    const createPostPage = new Promise((resolve, reject) => {
        try {
            graphql(`
            {
                allDatoCmsPage {
                    edges {
                        node {
                        slug
                        }
                    }
                }
            }
            `).then( res => {
                const pages = res.data.allDatoCmsPage.edges;
                pages.map( ( { node: page } ) => {
                    const { slug } = page;
                    createPage( {
                        path: `/${slug}`,
                        component: path.resolve('./src/templates/page.js'),
                        context: {
                            slug,
                        },
                    } );
                });
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });

    // eslint-disable-next-line
    return Promise.all([createBlogsPosts, createPostPage]);
};