import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!value) {
      setError(`${name} is required`);
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) alert('Form submitted successfully');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onBlur={handleChange} />
        <input name="email" placeholder="Email" onBlur={handleChange} />
        <textarea name="message" placeholder="Message" onBlur={handleChange}></textarea>
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
