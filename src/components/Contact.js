import React, { Component } from 'react'
import './contact.css'

export class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: 0,
            email: '',
            message: ''
        }

        this.onSubmitForm = this.onSubmitForm.bind(this)

    }

    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    getName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    getEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    getPhone = (e) => {
        this.setState({
            phone: e.target.value,
        })
    }

    getMsg = (e) => {
        this.setState({
            message: e.target.value,
        })
    }


    render() {
        return (
            <div className="contactComponent">
                <h3>Tell me more aboout your project, or we can<br />just schedule a meeting</h3>
                {/* <form className="contact-form" onSubmit={this.onSubmitForm}>
                    <div className="half-form">
                        <input type="text" placeholder="name" className="form-control-half contact__input"
                            value={this.state.name}
                            onChange={this.getName} />
                        <input type="tel" placeholder="phone"
                            className="form-control-half contact__input"
                            onSubmit={this.getPhone} />
                    </div>
                    <div>
                        <input type="email" placeholder="email" className="form-control contact__input"
                            onChange={this.getEmail} />
                    </div>
                    <div>
                        <textarea rows="10" placeholder="About your project"
                            className="form-control txt "
                            onChange={this.getMsg} />
                    </div>
                    <button type="submit" className="contact-btn"
                    >Send</button>
                </form> */}

                <form name="contact v1" method="post" onSubmit="submit" netlify>

                    <input type="hidden" name="form-name" value="contact v1" />
                    <div className="half-form">
                        <input type="text" placeholder="name" className="form-control-half contact__input"

                        />
                        <input type="tel" placeholder="phone"
                            className="form-control-half contact__input"
                        />
                    </div>
                    <div>
                        <input type="email" placeholder="email" className="form-control contact__input"
                        />
                    </div>
                    <div>
                        <textarea rows="10" placeholder="About your project"
                            className="form-control txt "
                        />
                    </div>
                    <button type="submit" className="contact-btn"
                    >Send</button>
                </form>
            </div>
        )
    }
}

export default Contact
