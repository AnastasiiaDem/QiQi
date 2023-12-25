import React, {useState} from 'react'
import {useFormik} from "formik";
import * as Yup from 'yup';
import "../pages/Contacts/Contacts.css";

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  
  const handleSubmit = (e) => {
    console.log(e);
    clearForm();
    onSubmit({
      name,
      email,
      message
    });
  };
  
  const formik = useFormik({
    initialValues: {
      name,
      email,
      message
    },
    onSubmit: (values, actions,) => {
      // handleSubmit(values);
      actions.resetForm();
    },
    
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Message is required")
    }),
  });
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      formik.handleSubmit(e);
      handleSubmit(e);
    }} className="w-[60%] max-md:w-full">
      <div className="mt-4">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"
               placeholder="Name"
               value={name}
               onBlur={formik.handleBlur}
               onChange={(e) => {
                 formik.handleChange(e);
                 setName(e.target.value);
               }}
               required/>
        {formik.errors.name && formik.touched.name &&
          <p className="error" data-role="nameError">{formik.errors.name}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"
               placeholder="email@email.com"
               value={email}
               onBlur={formik.handleBlur}
               onChange={(e) => {
                 formik.handleChange(e);
                 setEmail(e.target.value);
               }}
               required/>
        {formik.errors.email && formik.touched.email && <p className="error" id="emailError">{formik.errors.email}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="3"
          value={message}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.handleChange(e);
            setMessage(e.target.value);
          }}>
          </textarea>
        {formik.errors.message && formik.touched.message &&
          <p className="error" id="message"> {formik.errors.message}</p>}
      </div>
      <button type="submit"
              id='submit'
              className="mt-5 justify-center w-full text-slate-50 text-center text-md bg-neutral-400 py-2 rounded-lg hover:bg-neutral-500"
              disabled={Object.keys(formik.errors).length > 0}>
        Submit
      </button>
    </form>
  )
}
