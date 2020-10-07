import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card';

class CardContainer extends Component {
    render() {
        return (
            <div className="social-card-section">
                <h1>Social Cards</h1>
                <Card />
                <Link to='/form'>Add New Profile</Link>
            </div>
        )
    }
}

export default CardContainer;