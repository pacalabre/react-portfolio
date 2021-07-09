import React from 'react';
import '../css/contact.css';


const Contact = () => {
    return (
        <div>
            <section className="contact-section" id="contact">
                <h2>Contact</h2>
                <form  method="POST" action="https://formspree.io/pacalabre@gmail.com">
                    <label for="name" className="form-label">name</label>
                    <input id="name" type="name" name="name"/>
                    <label for="email" className="form-label">email</label>
                    <input id="email" type="email" name="email"/>
                    <label for="message" className="form-label">message</label>
                    <textarea id="message" name="message"></textarea>
                    <div className="contact-button-container">
                        <input type="hidden" name="_next" value="portfolio-form-submit.html" />
                        <button className="submit-button" type="submit">Send</button>
                    </div>
                </form>                                 
            </section>
        </div>
    )
}

export default Contact;