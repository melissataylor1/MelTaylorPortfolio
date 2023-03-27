import React from 'react'
import contact from '../assets/icons/contact.svg'
import linkedinsvg from '../assets/icons/linkedin.svg'
import githubsvg from '../assets/icons/github.svg'


function Contact() {
  return (
    <div className='md:w-full flex flex-col overflow-x-hidden text-slate-50'>
    {/* Section Heading */}
    <header className='sectionheading md:sectionheading-md'>
        <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
        <h2 className='md:animate-slideX2'>Contact</h2>
    </header>
    <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>Contact</h2>
          <p> <a href="mailto:meltee@live.com" class="contact-info text-2xl mt-10"> meltee@live.com</a> </p>
          <p class="contact-info text-2xl mt-10"> 647-521-8593</p>
        <div class="links my-10">

          <a href="https://ca.linkedin.com/in/melissa-taylor-aba356217" target="_blank" class="links">
              <img src={linkedinsvg} alt="linkedin" class="contactimg" />
          </a>
      
          <a href="https://github.com/melissataylor1" target="blank" class="links">
                <img src={githubsvg} alt="github"  class="contactimg"/> 
          </a>


        </div>
      </div>

      <div class="contact-form-wrapper  my-auto">
        <form>
          <div class="form-item">
             <input className="text-slate-900" type="text" name="name" required></input>
              <label className="text-slate-500">Name:</label>
          </div>
          <div class="form-item">
              <input className="text-slate-900" type="text" name="email" required></input>
              <label className="text-slate-500">Email:</label>
          </div>
          <div class="form-item">
              <textarea className="text-slate-900" name="message" required></textarea>
              <label className="text-slate-500">Message:</label>
          </div>
          <button  className="border border-slate-50 text-slate-50 p-3 font-bold text-sm rounded w-1/3 mx-auto my-0 text-center hidden transition-all duration-500  md:block hover:contacthover">Send</button>  
        </form>
      </div>
  </div>
 </section>
    </div>
  )
}

export default Contact;