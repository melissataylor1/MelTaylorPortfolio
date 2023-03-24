import React from 'react'
import Links from './partials/Links'
import contact from '../assets/icons/contact.svg'


function Contact() {
  return (
    <div className='md:w-full flex flex-col overflow-x-hidden text-slate-50'>
    {/* Section Heading */}
    <header className='sectionheading md:sectionheading-md'>
        <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
        <h2 className='md:animate-slideX2'>Contact</h2>
    </header>
    <div className='flex flex-col items-center overflow-hidden'>
    <h1 className='text-center mt-12 sm:text-6xl text-5xl font-heading md:animate-slideXL'>Get in touch</h1>
    <div className='w-full h-[800px] flex flex-col justify-evenly items-center sm:text-2xl text-xl overflow-x-hidden'>
      <div className={'contact'}>

          <form class="form">
              <h2>Contact Me</h2>
              <p type="Name:"><input placeholder="Your name"></input></p>
              <p type="Email:"><input placeholder="Email here"></input></p>
              <p type="Message:"><input placeholder="Your message here."></input></p>
              <button>Send Message</button>
          </form>
                <div className='md:animate-slideX3 overflow-x-hidden'>
                    <Links />
                </div>
            </div>
</div>
</div>
    </div>
  )
}

export default Contact;