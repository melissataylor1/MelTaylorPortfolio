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
    <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>Contact</h2>
          <p> <a href="mailto:meltee@live.com" class="contact-info"> meltee@live.com</a> </p>
          <p class="contact-info"> 647-521-8593</p>
        <div class="links">

          <a href="https://ca.linkedin.com/in/melissa-taylor-aba356217" target="_blank" class="links">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAd1JREFUaEPtmY1NwzAUhL9OAEwAGwATABMAEwAbwATABLABMAFsUJgAmADYgA1AJ9mSFT0njuraiWRLlarGje/e3/nZC2Y+FjPHTyNQ24PNA1P2wAlwDexVBvkNXAEvFo6+EPoCdiqD98t/APtjCfxNBLyHYRq7zwONQGYPZvHAJ3AJvDpwh8A9sJsZbHK4jw2howC8X0QklnMhECNcIl+yhNDsCagWqyaHQ0L3PpcQEvhTQOqoIaF7LqTWWULIG/rXfdksYPkmZKGRn4Lw8b8rjM6CSbeGV86BbeDN6YZCUOGoEqz/6/nBgDezhFCKDlgLSfge3SeGUyQeekhUJaBK1a1eFtYbt4WvqsSrdHkqCgqvDYNBVQ+E+aJc+DFyyc9R43I8RQJ3biPosV1EciIWRlU9ENvwbQFeUzwx7XZFtjuqEohZNaWqZRWylAUtS6mEhlrhQaW8bxIEpAOWUDUC6+jIYkrcPJAsz26i1SamxGzzQOSQoKoOtCoE9mXM2Cokmbeaeh1u+aFtQ3fouXXKnfK+rEI20DSt9XGWHFgrwhIt5awIqDNS8zGFoUNl86aoL4l1xaRtcImT5z4jqXtTso++YpqC5QcxrNKAD768xIRGoISV+9ZoHqjtgX+XdJAxobEL7gAAAABJRU5ErkJggg==" alt="linkedin" class="contactimg" />
          </a>
              
          <a href="https://meltaylor.myportfolio.com/work" target="blank" class="links">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA8tJREFUaEPtmY2RTUEQhc9GgAgQASJABIgAESACRIAIEAEiQASIABEgAuqruqN6z+uZ2/e+n7Vqu+rVq3137kyf/jnT3XukUy5Hp1x/nQE4aQ/u0gNXJd2SxPel6Tvi+yzpm6QPkj5K4u+tZVsAKPpA0u1J6SUKAeatpBcTsCXv/l27FsB5SY8lPVx16uZLzyU9lfRz6X5rAGDtl5IAsUtB+fuTV8r7LgXwbIHV302hhTKvJN0taoU3HhXXlmkUa2N1rO/ya3L9xfCA38iPFhK8T9LGNTzDgOeSPQEMiNmQqnrgTUd5EpDDPpkSHI4lo9yQ9N5+uybp3kQEjoN9CamhVACgCEwT5ct0MFb1598HjASFXg8bYQCIAOpF4St2TnveBTEHgJDB+q481mzu/WEJjdVQJhP3AntcnvYizADoIO6MEnsEgA2/mnJYPirvAD32MxDuhQg4AxFBbuw3AuDMkSnna2ZdPoUehNCEMCQXmgCCSy4md3ffHgAYBOtHyRLTw+fmFAajxENB3osCgFhakBdQdhRCDWDHpAegkpgknrPPXE61wykhqJuaZMZB2Ui73NRPqgCwPl5okiUm9BdDIV5cIw/wzN/NQsTXAAgvzHqgaln3UmqhDhI/g+oUcnD5bT94qKU3MW6iUGvS23zEJnMe4HlUDqa5kLzkZ2yEWhazHp89y/rmlQSOOpK0kfMB4KWDG3MjTDMAJCYubtJTzBkoZYmBKyoG8IvPKTcNIY+7Sjgccs0xo2ceOAOwZ3f8/x5wduglsd+Uh0hiislIMGkSH4pGKyy2ikZP4iIjbTJCWXWRVUsJB7qklHB+73Vxq0oJrOHxve9iLisEvZhLQVbL6awSdE/16pmMVSvltFfEi8rpakOD0rFz2qgWO3fCXGhs3dBwrreLWW9asaRj8D7aQwPjUY/Fyd/ilpJDs96UO4J7oVWNpabDEDAbirV/VI4zeR65fjgomGsBs7FKBJH1t6OyOgvNFnaZ8mBfPVZphssGW4CAmfj2UIO7AZGJr23NEh6hiT92y06j9+EEfM4DTYnecBZwKOHDr8wL2WiRDovGPVPy9dQ7D2vDKgDci7LZhDkOcNth0C6hEZ+RmHFQwFqeZ2N6lAfUzoa7o3DqWSgmZxaGlfdmK/OqB+JGJDYhlY3FZw8cLIBtYDWouSxrADSKpRbyqXX5YFuIt9hvNmT8gLUA2j7ENLGKV+IUrQKECwxP8tkYGVY2YM22AOI5UCBMwwdgPianGWn/ZoVq/4l/s1YNtbd1u/TA3pQcbXwG4ETMHg79A37MAUDTHoJNAAAAAElFTkSuQmCC" alt="Portfolio"  class="contactimg"/>
          </a>

      
          <a href="https://github.com/melissataylor1" target="blank" class="links">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA4BJREFUaEPtmY+RjEEQxd9FgAgQASJABIgAESACRIAIuAgQASJABIgAEVC/qhk1O9PT09/s7Kmr2q7aut39dnr69Z/XPXMnOudycs7t1xHA/47gyghcl3RT0i1JVyTxuZQvkn5J+phen1aA3xfARUmPJD1IRm+x6bukd5JeSeL9lMwCwPCnkh5P7doueiPpSYrQJpUzAO5Kei0JECuF9AIEYMKyFcCLhV7vGQmAh1EEWwDgdXL9LIRCvxdJqSiAszQ+OwgQt0feigB4lgp2pOsQz4fpNAIAp38wLDtNxcZz0urypPW/kx7oFHKAkmuhHrqF7QGAZT53+J3QEuIsgHgp6UL64quRv+i7lp5jOJFlTRaa3zcDAOx0tVcPHgAvdax1GEj3LYFZgSFquSvXz/90IknETQLpAcAYvNHj+lHqTWaUegDQRxSajt0zhA4L5/fkUoTiJlB4ABg5ms7fA0Du18NYaU9dAxO2NkvYj317gveJwo5YAHrFlBe+T4yxwuhaB0VtMVH+XeM4CwDFQuPqiZmLi9BQc3g6s1mt9nlir3/fWwA8LxzS+9koOP9+xyHN/hYAaJCDiSWNBxZ5vlRDQ3vb0Qv93iifbQXAgEXXPKT0un/ec8dmCwD8TyFb4rb1Raj2BkCYcssfFtEio6MpxO+GEfBqwGwmi0F4I8yPOju21kBTRIuNRx01dqejl5sMUmyaRll46D7w03FKiEY9GkN3dzJcEI3R4YlDfzmCm1eLdEPPC9h5qFmIw5N320EPII3dFOKhV8g855BBTxjN/tGgkNc0L8/4poAbSip2q+chFmN0Ta+0fbrz7M0a/YYLsshtR5M+HoDs5TxUwQx4HA/xvh41CCvR4C+FBlhLWA/DMDrjdW9kL9dzBAVso9c7WdWHGozL1xwYazU7zsIjo0bpaQHvzmCjo2HdlTMD5bNvPfZGRo0Ry9UASF/2M6M6AmCdknIf4Bm0Ryrka3M+R+rBOzrWAFzGGwFAWV3QuR6iDGP9LgrALNwIjdab1occPqN8ViIAQg0zEoFsZA2CVOG73FhgCTaNyAhAyPgRjVqGjM7LUYd4AIZpM5NC5RqKlwZm0eg+AGAbHLSpu0c3tKJBn+BVXuxG9ZURoEmRijDYZolu6CnGa3kU2JnVnUV4ma6M4Zv+pVTrXAFgs9dWLjgCWOnNGV3HCMx4beWav4uArjFD7/JYAAAAAElFTkSuQmCC" alt="github"  class="contactimg"/> 
          </a>

          <a href="mailto:meltee@live.com" class="links">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbtJREFUaEPtWdFNwzAQfZ0AmABG6AbABowAE8AGlA1gAtiAEYBNYALoBKAnxZIb7CSXu3PkyPmplF7e+b13d27cDSq/NpWvH43A0g42B5oDSgVWW0JXAG4BbAEcK0WyePwdwAMAfh5cKQe4+FeLrA4Yl30SKQJkee6Q3ALyA8BFDJQi8GuRyQnjB8CJlMAXgFOnBY3BpnIfiD7FATLedU09ltDy+6cu7/dQ304hEGJYey8F3KDq11Gz9kta7ED8AEeqpxtBddZ6uEwJBFBrN/qqx1WjJvBv9nboVm6kVI+FetP2AJ9/7HbC2FqtG0OqU5x7AHeJqSDugYDxCeAmtZ13PzckvTGm+jOAs8xIm00g4GncmKt6du+aMkZTQsxxQ6O6OQGJG4yN53q8mKFaz22K6hLqA4+5wfhc8w/VejECU9zQqu5WQhI3GMsNcI7qxQjk3JhT68VLKOcG72tVL+5ATj2L++ZTyGJREoxGQKKWR2xzwENVCWZzQKKWR2zVDuz7Z7WrPFqs/nCXdUsSfKHm8fqRRyELMXmoy3fuScfrQuxlw1f7D82ysgqyNwcEYrmENgdcZBWAVu/AH05fbDEPw5WiAAAAAElFTkSuQmCC" alt="email"  class="contactimg"/>
          </a>

        </div>
      </div>

      <div class="contact-form-wrapper">
        <form>
          <div class="form-item">
             <input type="text" name="name" required></input>
              <label>Name:</label>
          </div>
          <div class="form-item">
              <input type="text" name="email" required></input>
              <label>Email:</label>
          </div>
          <div class="form-item">
              <textarea class="" name="message" required></textarea>
              <label>Message:</label>
          </div>
          <button>Send</button>  
        </form>
      </div>
  </div>
 </section>
    </div>
  )
}

export default Contact;