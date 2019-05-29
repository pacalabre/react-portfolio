import React from 'react';
import '../css/contact.css';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h3>Contact Me</h3>
            <form  method="POST" action="http://formspree.io/pacalabre@gmail.com">
                <input type="name" name="name" placeholder="Your name"/>
                <input type="email" name="email" placeholder="Your email"/>
                <textarea name="message" placeholder="Your message"></textarea>
                <div>
                    <input type="hidden" name="_next" value="portfolio-form-submit.html" />
                    <button type="submit">Send</button>
                </div>
            </form>                                 
        </section>
    )
}

export default Contact;