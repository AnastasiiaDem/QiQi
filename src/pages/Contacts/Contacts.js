import React from 'react';
import './Contacts.css';
import ContactForm from "../../components/ContactForm";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function Contacts() {
  
  const handleSubmit = (e) => {
    console.log(e, "Form submitted!");
    alert("Message sent!");
  };
  
  useScrollToTop();
  
  return (
    <div
      className="flex justify-between items-center gap-[5rem] py-20 px-16 mt-[5rem] bg-white max-md:gap-4 max-md:flex-col max-md:px-8">
      <div className="flex flex-col mt-[-2rem] text-center w-[40%] max-md:mt-0 max-md:w-full max-md:ml-0">
        <h4 className="text-3xl font-bold max-md:w-full">
          Get in touch
        </h4>
        <div className="text-md mt-8 max-md:w-full max-md:mt-4 max-md:text-sm">
          <p>We're happy to answer any questions or concerns you may have.</p>
          <p className="mt-2">Please fill out the form and a customer service representative will contact you.</p>
        </div>
      </div>
      
      <ContactForm onSubmit={handleSubmit}/>
    </div>
  )
}
