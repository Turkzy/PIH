import React from 'react'


const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <div className='contact-info'>
                <div className='contact-info-left'>
                    <h2>Contact Information</h2>
                    <p>National Development Company</p>
                    <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
                    <p><ion-icon name="mail-sharp"></ion-icon>Email: innovation@ndc.gov.ph</p>
                    <p><ion-icon name="call-sharp"></ion-icon>Phone: 8840-4838 to 47</p>
                    <p><ion-icon name="location-sharp"></ion-icon>Address: 116 Tordesillas, Salcedo Village, Makati, Philippines</p>
                </div>
                <div className='contact-info-right'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' placeholder='Your Name' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' placeholder='Your Email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>    
                            <textarea id='message' name='message' placeholder='Your Message' required></textarea>
                        </div>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact