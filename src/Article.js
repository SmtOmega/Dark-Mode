import React from 'react'
import moment from 'moment'


const Article = ({title, date, snippet, length}) => {
    return (
        <article>
            <h2>{title}</h2>
            <div className="article-info">
                <span>{moment(date).format("dddd Do YYYY")},</span>
                <span> {length}min read</span>
            </div>
            <p>{snippet}</p>
        </article>
    )
}

export default Article