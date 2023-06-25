import '../../App.css'
import ContactMeForm from './ContactMeForm.js';

function Contact() {
  return (
    <div id="Contact" className="contact pt-5">
      <div className='section-heading d-flex justify-content-center'>Contact</div>
      <div className='w-75 mx-auto d-flex justify-content-center text-center section-info'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</div>

      <div>
        <ContactMeForm />
      </div>
    </div>
  );
}

export default Contact;
