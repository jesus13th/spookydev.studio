import React from 'react';
import './css/blog.css';

interface IBlog {
    title:string;
    url:string;
    description:string;
    images:string;
}

const Blog: React.FC<IBlog> = ({title, url, description, images}) => {
    return (
        <div className="blog">
            <a href={url}>
                <div className="blog-content">
                    <img src={process.env.PUBLIC_URL + images} alt="" />
                    <div className='blog-data'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Blog;