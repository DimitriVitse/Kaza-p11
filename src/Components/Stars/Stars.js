import React from 'react';
import FilledStarSVG from '@/Assets/Images/components/FilledStar.svg';
import EmptyStarSVG from '@/Assets/Images/components/EmptyStar.svg';

const StarRating = ({ initialRating }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                    key={value}
                    filled={value <= initialRating}
                />
            ))}
        </div>
    );
};

const Star = ({ filled }) => {
    const starSVG = filled ? FilledStarSVG : EmptyStarSVG;

    return (
        <img
            className="star"
            src={starSVG}
            alt={filled ? 'Filled Star' : 'Empty Star'}
        />
    );
};

export default StarRating;

