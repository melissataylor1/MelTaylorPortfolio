import React from "react";
import react from "../assets/icons/react.svg";
import contact from "../assets/icons/contact.svg";
import linkedinsvg from "../assets/icons/linkedin.svg";
import githubsvg from "../assets/icons/github.svg";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden text-slate-50 h-screen justify-between">
      {/* Section Heading */}
      <header className="sectionheading md:sectionheading-md">
        <img
          src={contact}
          alt="User icon on a book"
          className="hidden md:block md:heading-icon md:animate-slideX"
        />
        <h2 className="md:animate-slideX2">Contact</h2>
      </header>

      <div className="overflow-y-auto  border-dashed border-2 border-white rounded-lg p-10 mx-3 lg:py-36 2xl:mx-36">
        <div className="lg:grid lg:grid-cols-2 space-evenly">
          <div class="lg:col-span-1">
            <h2 class="contact-links-h2 text-5xl text-center">Contact</h2>{" "}
            <a href="mailto:meltee@live.com">
              {" "}
              <p className="text-center text-xl mt-10">meltee@live.com</p>
            </a>{" "}
            <p class="text-center text-xl my-5"> 647-521-8593</p>
            <div className="flex justify-center px-5 py-5">
              <a
                href="https://ca.linkedin.com/in/melissa-taylor-aba356217"
                target="blank"
                className="px-5 "
              >
                <img src={linkedinsvg} alt="linkedin" class="contactimg" />
              </a>

              <a
                href="https://github.com/melissataylor1"
                target="blank"
                className="px-5 "
              >
                <img src={githubsvg} alt="github" class="contactimg" />
              </a>
            </div>
          </div>

          <div className="py-6 lg:mx-5 lg:py-0 lg:mx-1 lg:col-span-1 mx-auto max-w-7xl lg:max-w-lg justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 border-y border-neutral-500 py-5 ">
        <p className=" text-center text-sm ">
          Made with ❤️ and React{" "}
          <img
            className="w-4 inline self-center"
            src={react}
            alt="User icon on a book"
          />{" "}
          <p className="italic inline">by Mel Taylor</p>
        </p>
      </div>
    </div>
  );
}

export default Contact;
