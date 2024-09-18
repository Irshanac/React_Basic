import React, { useState } from 'react';

function Formsv() {
  const [formdata, setformdata] = useState({ name: '', pass: '' });
  const [error, seterror] = useState({ name: '', pass: '' });

  const setname = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const validate = () => {
    let newError = { ...error };
    let isValid = true;

    if (!formdata.name) {
      newError.name = 'Name is required';
      isValid = false;
    } else {
      newError.name = ''; // Clear error if the name is valid
    }

    seterror(newError);
    return isValid;
  };

  const submiting = (e) => {
    e.preventDefault(); // Fix: prevent default form submission
    if (validate()) {   // Call the validate function and check the result
      console.log('Form data submitted:', formdata);
    } else {
      console.log('There was an error');
    }
  };

  return (
    <div>
      <form onSubmit={submiting}>
        <input
          placeholder='Enter name'
          name="name"
          value={formdata.name}
          onChange={setname}
        />
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Formsv;
