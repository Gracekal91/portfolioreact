import React, { Component } from 'react'
import './contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className="contactComponent">
                <h3>Tell me more aboout your project, or we can<br />just schedule a meeting</h3>
                <form className="contact-form">
                    <div className="half-form">
                        <input type="text" placeholder="name" className="form-control-half" />
                        <input type="tel" placeholder="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control-half" />
                    </div>
                    <div>
                        <input type="email" placeholder="email" className="form-control" />
                    </div>
                    <div>
                        <textarea rows="10" placeholder="About your project" className="form-control txt" />
                    </div>
                    <button type="submit" className="contact-btn">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact
