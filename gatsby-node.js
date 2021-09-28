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
    const createBlogPage = new Promise((resolve, reject) => {
        try {
            graphql(`
                {
                    allDatoCmsArticle(sort: {fields: meta___createdAt, order: DESC}) {
                        totalCount
                        edges {
                            node {
                            excerpt
                            featureImage {
                                alt
                                gatsbyImageData
                            }
                            title
                            slug
                            categories {
                                slug
                                categoryTitle
                            }
                            }
                        }
                    }
                }
            `).then( res => {
                const blog = res.data.allDatoCmsArticle.edges;
                const totalPages = res.data.allDatoCmsArticle.totalCount
                let size = 1
                let start = 0

                let groupedBlog = Array.from(Array(Math.ceil(totalPages / size)))
                groupedBlog = groupedBlog.map( () => {
                    const group = blog.slice( start, start + size)
                    start += size;
                    return group
                })

                groupedBlog.forEach((group, index) => {
                    const blog = index + 1;
                    createPage({
                        path:`/blog/${blog}`,
                        component: path.resolve('./src/templates/blog.js'),
                        context: { groupedBlog, group, blog }
                    })
                })
                resolve();
            })

        } catch (error) {
            reject(error);
        }
    } )

    // eslint-disable-next-line
    return Promise.all([createBlogsPosts, createPostPage, createBlogPage]);
};