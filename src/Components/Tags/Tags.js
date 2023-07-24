import React from 'react';

const Tags = ({ tags }) => {
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li key={index} className="tag">{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;
