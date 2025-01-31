import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch('https://getform.io/f/bgdddyma', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        } else {
          alert('Form submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div
      name='contact'
      className='w-full md:h-screen bg-gradient-to-b from-gray-900 to-black p-4 text-white pt-20' // Added pt-20 for navbar padding
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-1/2'
          >
            {/* Name Input */}
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-gray-500'
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
            )}

            {/* Email Input */}
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-gray-500'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )}

            {/* Message Textarea */}
            <textarea
              name='message'
              rows={10}
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleChange}
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-gray-500'
            />
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
            )}

            {/* Submit Button */}
            <button
              type='submit'
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;