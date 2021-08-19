import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NewsLetter.css'


export class NewSletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="form">
                    <h2 style={{ textAlign: "left" }}>Subscribe to Our News Letter</h2>
                </div>
                <div>
                    <form>
                        <div>
                            <input placeholder="email Address" type="email" className="newsletter__input" />
                            <button type="submit" className="newsletter__btn">subscribe</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default NewSletter
