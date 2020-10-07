import React, { Component } from 'react';
import Data from '../data.json';
import './profile.css';

class Profile extends Component {
    render() {
        const index = this.props.match.params.id - 1;
        return (
            <React.Fragment>
                {Data.map(data => {
                    // if (data.id === this.props.match.params.id)
                    return (
                        <div className="profile" key={data.id}>
                            <div className="banner">
                                <h1>{data.title}</h1>
                            </div>
                            <div className="profile-details">
                                <div className="profile-pic">
                                    <span>
                                        <img src={data.profilePicUrl} alt={data.name} />
                                    </span>
                                </div>
                                <div className="name">
                                    <h3>{data.name} <span>({data.designation})</span></h3>
                                </div>
                                <div className="description">
                                    <p>{data.description}</p>
                                </div>
                                <div className="bottom-links">
                                    <div className="url">
                                        <span>
                                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                                {data.website}
                                            </a>
                                        </span>
                                    </div>
                                    <div className="actions">
                                        <span onClick={() => this.props.history.push('/')}>Back to List</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })[index]}
            </React.Fragment>
        )
    }
}

export default Profile;