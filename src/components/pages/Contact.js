import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setText('');
    setEmail('');
  };

  return (
    <div className>
      <div className="card bg-info text-dark h-100 shadow p-3 m-5 rounded">
      <h1 className="p-5">Contact</h1>

      <form className="form px-5">
        <div className='mb-3'>
        <label for="userName" className="form-label fs-3">Name</label>
        <input
          className="form-control"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        </div>
        <div className='mb-3'>
        <label for="email" className="form-label fs-3">Email</label>
        <input
          className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        </div>
        <div className='mb-3'>
        <label for="textarea" className="form-label fs-3">Message</label>
        <textarea
          className="form-control"
          value={text}
          name="text"
          onChange={handleInputChange}
          type="text"
          placeholder='Message'
        />
        </div>
        
        {errorMessage && (
        <div>
          <p className="error-text fs-4">{errorMessage}</p>
        </div>
      )}
        <div className='mb-3'>
        <button className="btn btn-primary fs-4" type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      
      </div>
    </div>
  );
}
