import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="form">
                <form>
                    <input type="email" />
                </form>
            </div>
        )
    }
}

export default Form
