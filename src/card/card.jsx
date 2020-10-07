import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../component/comment';
import Like from '../component/like';
import Message from '../component/message';
import './card.css';
import Data from '../data.json';

class Card extends Component {
    render() {
        let abc = Data;
        abc.push({
            "id": 5,
            "name": "Monika",
            "title": "Learning Backend? It is the development tool for designers.",
            "description": "It’s a pretty small feature compared to all the huge stuff Jetpack can do, like improve your site’s search, back it up, and protect it.",
            "website": "python.com",
            "profilePicUrl": "https://infocomhouse.com/profile-images/jp.jpg",
            "companyLogo": "https://picsum.photos/200",
            "designation": "Python Developer"
        });
        // console.log(abc)

        return (
            <React.Fragment>
                {Data.map(data => {
                    return (
                        <div className="card" key={data.id}>
                            <div className="card-header">
                                <h3 className="content">{data.title}</h3>
                                <div className="co-logo">
                                    <img src={data.companyLogo} alt="Company logo" />
                                </div>
                                <div className="profile-card">
                                    <Link to={`/profile/${data.id}`}>
                                        <label>{data.name}</label>
                                        <span>
                                            <img src={data.profilePicUrl} alt={data.name} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-description">
                                <strong>{data.title}</strong>
                                <p>{data.description}</p>
                                <span>{data.website}</span>
                            </div>
                            <div className="card-option">
                                <Comment />
                                <Like />
                                <Message />
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Card;