import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.firstName) {
      validationErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName) {
      validationErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Registration successful!');
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Registration Form</h2>
      
      {successMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.firstName && <p style={{ color: 'red', fontSize: '13px', margin: '5px 0 0 0' }}>{errors.firstName}</p>}
        </div>
        
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.lastName && <p style={{ color: 'red', fontSize: '13px', margin: '5px 0 0 0' }}>{errors.lastName}</p>}
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '13px', margin: '5px 0 0 0' }}>{errors.email}</p>}
        </div>
        
        <button type="submit" style={{ padding: '10px', marginTop: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
