import React, { Component } from 'react';

class Like extends Component {
    state = {
        like: 0,
        liked: false,
        disabled: false
    }

    handleLike = () => {
        this.setState({ like: this.state.like + 1, liked: !this.state.liked });
        if (this.state.like === 0) {
            this.setState({ disabled: true })
        }
    }


    render() {
        return (
            <React.Fragment>
                <button className="like" onClick={this.handleLike} disabled={this.state.disabled}>{this.state.like}</button>
            </React.Fragment>
        )
    }
}

export default Like;