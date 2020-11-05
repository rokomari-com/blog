import React from 'react';
import './Post.scss';

const Post = (props) => {
    const { title, metaData, text } = props.postData;
    return (
        <div className="post">
            <h1 className="post--title"><a href="/">{title}</a></h1>
            <ul className="post--meta d-flex justify-content-center">
                <li className="meta-key">posted in
                    <a href="/" className="hyperlink-btn">
                        {metaData.category}
                    </a>
                </li>
                <li className="meta-key">on
                    <a href="/" className="hyperlink-btn">
                        {metaData.date}
                    </a>
                </li>
                <li className="meta-key">by
                    <a href="/" className="hyperlink-btn">
                        {metaData.author}
                    </a>
                </li>
            </ul>
            <p className="post--text">{text}</p>
            <a href="/" className="btn-more">Continue reading <span className="meta-nav">→</span></a>
        </div>
    );
};

export default Post;