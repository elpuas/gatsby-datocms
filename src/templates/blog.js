import * as React from "react";
import * as styles from '../styles/pages/blog.module.css'
import BlockCards from "../components/structures/block-card";
// import cx from 'classnames';
import Layout from "../components/structures/layout";
import Pagination from "../components/bricks/pagination";

// markup
const BlogPage = ( { pageContext } ) => {
    const {
        groupedBlog,
        group
    } = pageContext

    return (
        <>
        <Layout>
        <article className={styles.blogArticle}>
            { group.map( (node, index) => {
                const obj = Object.entries(node);
                const content = obj[0][1];
                return (
                    <BlockCards {...content} key={index} />
                )
            } ) }
            <section>
                <Pagination pagination={groupedBlog} />
            </section>
        </article>
        </Layout>
        </>
    )
}

export default BlogPage
