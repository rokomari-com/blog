import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePagination.scss';

const SinglePagination = () => {
    return (
        <ul className="single__pagination justify-content-between">
            <li className="single__pagination--item">
                <h4>PREVIOUS POST</h4>
                <Link to="/" className="hyperlink-btn">
                    <span className="meta-nav">←</span> Adding A Personal Touch To Your Web Design
                </Link>
            </li>
            <li className="single__pagination--item">
                <h4 className="text-post">NEXT POST</h4>
                <Link to="/" className="hyperlink-btn">
                    How To Build Long-Term Client Relationships <span className="meta-nav">→</span>
                </Link>
            </li>
        </ul>
    );
};

export default SinglePagination;