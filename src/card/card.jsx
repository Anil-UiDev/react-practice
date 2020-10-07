import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../component/comment';
import Like from '../component/like';
import Message from '../component/message';
import './card.css';
import Data from '../data.json';

class Card extends Component {
    render() {

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