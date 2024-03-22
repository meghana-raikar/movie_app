import React from 'react'
import './blogCard.css'

const BlogCard = ({blog}) => {
  return (
    <div className="blog col-xl-4-center mb-4">
        <article>
            <div className="post-img">
                <img src={blog.thumbnail} alt="" className="img-fluid" />
            </div>

            <p className="post-category">{blog.category}</p>

            <h2 className="title">
                <a href='#'>{blog.title}</a>
            </h2>

            <div className="d-flex align-items-center">
                <img src={blog.author.image} alt="" className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                    <p className="post-author-list">{blog.author.name}</p>
                    <p className="post-data">
                        <time dateTime='2024-04-01'>{blog.date}</time>
                    </p>
                </div>
            </div>
        </article>
    </div>
  )
}

export default BlogCard