import * as React from 'react'
import { Link } from 'gatsby'

export default function Pagination( { pagination } ) {
    return (
        <ul>
            {
                pagination.map((x, index) => {
                    const page = index + 1
                    return (
                        <li key={index}><Link to={`/blog/${page}`} activeClassName="active">{index + 1}</Link></li>
                    )
                })
            }
        </ul>
    )
};
