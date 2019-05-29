import React from 'react';
import '../css/contact.css';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h2>Contact</h2>
            <form  method="POST" action="http://formspree.io/pacalabre@gmail.com">
                <input type="name" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <textarea name="message" placeholder="Message"></textarea>
                <div>
                    <input type="hidden" name="_next" value="portfolio-form-submit.html" />
                    <button type="submit">Send</button>
                </div>
            </form>                                 
        </section>
    )
}

export default Contact;