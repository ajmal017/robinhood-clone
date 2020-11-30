import React from 'react';
import './css/NewsFeed.css';
import LineGraph from './LineGraph';
import NotificationCard from './NotificationCard';
import Timeline from './Timeline';
import { Avatar, Chip } from '@material-ui/core';



const popularTopics = ["Technology", "Upcoming Earnings", "Crypto", "Pharmacy", "Cannabis", "Index ETFs", "Oil & Energy"]

function NewsFeed() {
    return (
        <div className="newsfeed">

            <div className="newsfeed_container">
                <div className="newsfeed_chart_container">
                    <div className="newsfeed_portfolio">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed_chart">
                        <LineGraph />

                        <Timeline />

                        <div className="buying_power">
                            <h4>Buying Power</h4>
                            <h4>$44.30</h4>
                        </div>

                        <NotificationCard
                            title="Markets Closed"
                            message="Happy Thanksgiving! Enjoy the day off."
                        />

                        <div className="popular_list_container">
                            <div className="popular_list_header">
                                <h1>Popular Lists</h1>
                                <p>Show More</p>
                            </div>

                            <div className="popular_list_badges">
                                {popularTopics.map((topic) => (
                                    <Chip
                                        className="topic_badge"
                                        label={topic}
                                        avatar={<Avatar>{topic.charAt(0)}</Avatar>}
                                    />
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewsFeed;
