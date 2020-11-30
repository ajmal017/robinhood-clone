import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

function NotificationCard(props) {
    return (
        <div className="newsfeed_market_container">
            <p>{props.title} 
            <CloseIcon className="closeIcon" />
            </p>
            <h4>{props.message}</h4>

            <a href="http://" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    )
}

export default NotificationCard;
