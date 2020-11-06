import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from '../../layouts/PostMeta/PostMeta';
import './Post.scss';

const Post = (props) => {
    const { title, metaData, text } = props.postData;
    return (
        <div className="post">
            <h1 className="post--title">
                <Link to="/post">{title}</Link>
            </h1>

            <PostMeta metaData={metaData} />
            
            <p className="post--text">{text}</p>
            <Link to="/post" className="btn-more">
                Continue reading <span className="meta-nav">→</span>
            </Link>
        </div>
    );
};

export default Post;