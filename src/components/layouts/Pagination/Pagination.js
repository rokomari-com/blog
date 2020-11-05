import React from 'react';
import './Pagination.scss';

const Pagination = () => {
    return (
        <ul className="pagination justify-content-center">
            <li className="pagination--item">
                <a href="/">First</a>
            </li>
            <li className="pagination--item">
                <a href="/">«</a>
            </li>
            <li className="pagination--item">
                <a href="/">1</a>
            </li>
            <li className="pagination--item">
                <a href="/">2</a>
            </li>
            <li className="pagination--item">
                <a href="/">3</a>
            </li>
            <li className="pagination--item">
                <a href="/">»</a>
            </li>
            <li className="pagination--item">
                <a href="/">Last</a>
            </li>
        </ul>
    );
};

export default Pagination;