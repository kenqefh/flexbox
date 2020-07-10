import React from 'react'

const Article = ({ title, content }) => {
    return (
        <div className='article'>
            <h2>{title}</h2>
            <p>{content}</p>
            <hr />
        </div>
    )
}

export default Article;