import React, { useState } from 'react';
import Header from './Header';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(''); // New state for country
  const [description, setDescription] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or submit the form data here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Country:', country); // Log country
    console.log('Description:', description);

    // Store the form data in state variable
    setSubmittedData({ name, email, country, description });

    // Clear the form fields
    setName('');
    setEmail('');
    setCountry(''); // Clear country field
    setDescription('');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>XSS Contact Form </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br/>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br/>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <br/>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <br/>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Data:</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Country:</strong> 
              <div dangerouslySetInnerHTML={{ __html: submittedData.country }} />
            </p>
            <p>
              <strong>Description:</strong>{" "}
              <div
                dangerouslySetInnerHTML={{ __html: submittedData.description }}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
