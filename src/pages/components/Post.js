import React from "react";
import { marked } from "marked";

const Post = ({ article }) => {
    console.log(article)
    const { name, featuredIamge, description } = article.fields
    const postDescription = marked(description)
    return (
        <div className="post">
            <h2 className="title">{name}</h2>
            {featuredIamge && <img className="featuredIamge" src={featuredIamge.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post