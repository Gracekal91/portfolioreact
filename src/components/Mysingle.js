import React, { Component } from 'react'

export class Mysingle extends Component {
    componentDidMount() {
        this.props.getId(this.props.match.params.id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Mysingle



