import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();
  const [success, setSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nzu36fr', 'template_w08r0iv', form.current, {
        publicKey: 'wMO8VjMthUko8Sn8g',
      })
      .then(
        () => {
          setSuccess(true)
          setInterval(() => {
            setSuccess(false)
          }, [3000])
          
        },
        (error) => {
          setIsError(true)
          setInterval(() => {
            setIsError(false)
          }, [3000])
          console.log("Failed!!", error)
        },
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-4 bg-w rounded shadow">

        <div className="mb-4 ">
          <label className="block text-xl font-normal mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full px-3 py-2 border rounded bg-white bg-opacity-5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="w-full px-3 py-2 border rounded bg-white bg-opacity-5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 text-scrollbar resize-none border rounded bg-white bg-opacity-5"
            maxLength={255}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="px-4 py-2 w-full text-xl hover:ring-white hover:ring-1 bg-black text-white rounded">
            Send
          </button>
        </div>
      </form>
      { success &&
        <div className='w-auto relative bottom-14 md:bottom-0 bg-green-500 bg-opacity-50 text-sm md:text-xl transition-all duration-100 text-center py-0 h-12 md:h-10 border-t-8 md:border-t-4 border-green-600 animation'>Message Sent Successfully!!! Thank You For Contacting </div>
      }
      
      { isError &&
        <div className='w-auto relative bottom-14 md:bottom-0 bg-red-100 bg-opacity-80 text-lg md:text-xl transition-all duration-100 text-center text-red-500 font-semibold leading-4 py-auto h-12 md:h-10 border-t-8 md:border-t-4 border-red-600 animation'>Failed to Sent message, please try again later!!!</div>
      }
    </>
  );
};

export default ContactForm;
