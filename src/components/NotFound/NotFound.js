import React from 'react';
import { Badge } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <h1>
                Page Not Found <Badge bg="danger"> 404 </Badge>
            </h1>
        </div>
    );
};

export default NotFound;