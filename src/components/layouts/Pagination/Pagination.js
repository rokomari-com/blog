import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = () => {
    return (
        <ul className="pagination justify-content-center">
            <li className="pagination--item">
                <Link to="/">First</Link>
            </li>
            <li className="pagination--item">
                <Link to="/">«</Link>
            </li>
            <li className="pagination--item">
                <Link to="/">1</Link>
            </li>
            <li className="pagination--item">
                <Link to="/">2</Link>
            </li>
            <li className="pagination--item">
                <Link to="/">3</Link>
            </li>
            <li className="pagination--item">
                <Link to="/">»</Link>
            </li>
            <li className="pagination--item">
                <Link to="/">Last</Link>
            </li>
        </ul>
    );
};

export default Pagination;