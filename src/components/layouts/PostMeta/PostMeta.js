import React from 'react';
import { Link } from 'react-router-dom';
import './PostMeta.scss';

const PostMeta = (props) => {
    const { category, date, author } = props.metaData;
    return (
        <ul className="meta-data">
            <li className="meta-key">posted in
                <Link to="/" className="hyperlink-btn">
                    { category }
                </Link>
            </li>
            <li className="meta-key">on
                <Link to="/" className="hyperlink-btn">
                    { date }
                </Link>
            </li>
            <li className="meta-key">by
                <Link to="/" className="hyperlink-btn">
                    { author }
                </Link>
            </li>
        </ul>
    );
};

export default PostMeta;