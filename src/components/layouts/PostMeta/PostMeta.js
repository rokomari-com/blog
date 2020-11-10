import React from 'react';
import './PostMeta.scss';

const PostMeta = (props) => {
    const { category, date, author } = props.metaData;
    return (
        <ul className="meta-data">
            <li className="meta-key">posted in
                    <a href="/" className="hyperlink-btn">
                    { category }
                </a>
            </li>
            <li className="meta-key">on
                    <a href="/" className="hyperlink-btn">
                    { date }
                </a>
            </li>
            <li className="meta-key">by
                    <a href="/" className="hyperlink-btn">
                    { author }
                </a>
            </li>
        </ul>
    );
};

export default PostMeta;