import React from 'react';
import './SinglePagination.scss';

const SinglePagination = () => {
    return (
        <ul className="single__pagination justify-content-between">
            <li className="single__pagination--item">
                <h4>PREVIOUS POST</h4>
                <a href="/" className="hyperlink-btn"><span class="meta-nav">←</span> Adding A Personal Touch To Your Web Design</a>
            </li>
            <li className="single__pagination--item">
                <h4 style={{ textAlign: 'right' }}>NEXT POST</h4>
                <a href="/" className="hyperlink-btn">How To Build Long-Term Client Relationships <span class="meta-nav">→</span></a>
            </li>
        </ul>
    );
};

export default SinglePagination;