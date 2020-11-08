import React from 'react';
import PageNotFound from './../../../assets/images/404.png';

const NotFound = () => {
    console.log(PageNotFound);
    return (
        <img src={PageNotFound} alt="Page Not Found" className="img-fluid" />
    );
};

export default NotFound;