import React from 'react'
// Logo SVG's
import githubsvg from '../../../../assets/icons/github.svg'
import linkedinsvg from '../../../../assets/icons/linkedin.svg'

    const links = [
        {
            name: "GitHub",
            url: "https://github.com/melissataylor1",
            icon: githubsvg,
            color: "#F48024"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/melissa-taylor-aba356217/",
            icon: linkedinsvg,
            color: "#F48024"
        }
    
      ]
      function Links() {
        const linkCards = links.map((link, index) => {
            return (
                <a className={`sm:w-[375px] w-[200px] border m-4 rounded hover:scale-[1.02] hover:border-[${link.color}] transition-all`} href={link.url} target='_blank' rel="noreferrer">
                    <div className='flex items-center justify-between p-4'>
                        <img className='w-6' src={link.icon} alt={link.name} />
                        <p className='text-lg'>{link.name}</p>
                    </div>
                </a>
            )
        })
        
        return (
            <div className='flex flex-col justify-center items-center overflow-x-hidden'>
                {linkCards}
            </div>
        );
    }
    
    export default Links;