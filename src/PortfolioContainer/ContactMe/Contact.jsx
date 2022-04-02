// emailjs & react emailjs
import React from 'react'
import './Contact.css'
import {FaRegEnvelope} from 'react-icons/fa'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vldd75h', 'template_fx5ulql', form.current, 'HRaICiFVMVmNHb9mm')
    e.target.reset()
  };

  return (
    <section id='contact' className='contact__style'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>

        <div className='contact__items'>
          <article className='contact__item-details'>
            <FaRegEnvelope className="contact__icon"/>
            <h3>Email</h3>
            <h5>alvinchinch0503@gmail.com</h5>
            <a href="mailto:alvinchinch0503@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className='contact__item-details'>
            <FaFacebookMessenger className="contact__icon"/>
            <h3>Messenger</h3>
            <h5>alvinchinch0503@gmail.com</h5>
            <a href="https://m.me/" target="_blank">Send A Message</a>
          </article>

          <article className='contact__item-details'>
            <FaWhatsapp className="contact__icon"/>
            <h3>WhatsApp</h3>
            <h5>+60-104620499</h5>
            <a href="https://api.whatsapp.com/send?phone=+60104620499" target="_blank">Send A Message</a>
          </article>
        </div>
          
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name='message' rows="7" placeholder="Your Message" required> </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact