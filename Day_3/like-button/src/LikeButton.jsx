import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeButton.css'

function LikeButton() {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    
    function handleClicks () {
        setIsDisabled(true);

        setLike((currentLiked) => {
            const newLike = !currentLiked;

            setLikeCount(newLike  ? 1 : 0);

            return newLike;
        });

        setTimeout(() => {
            setIsDisabled(false)
        }, 1000);
    };

    return (
        <div className="container">
            <button 
             onClick={handleClicks}
             disabled={isDisabled}
             className={`
                ${like ? 'liked' : 'unliked'}
                ${isDisabled ? '' : ''}
                `}
            >
                <span className="mr-2" role="img" aria-label={like ? 'red heart' : 'white heart'}>
                    {like ? '❤️' : '🤍'}
                </span>
                {like ? 'Liked' : 'Like'}
                {/* <FontAwesomeIcon icon={faHeart} /> */}
            </button>
            <span className="text-lg">
                {likeCount} {likeCount === 1 ? 'like' : 'likes'}
            </span>
        </div>
    )
}

export default LikeButton;