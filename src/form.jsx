import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted');
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="heading">Heading</label>
                        <input type="text" name="heading" id="heading" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" />
                    </div>
                    <div className="form-group">
                        <button type="button">Save</button>
                    </div>
                </form>
                <div>
                    <label>{this.state.name}</label>
                </div>
            </div>
        )
    }
}

export default Form;