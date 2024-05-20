import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css';
import { useState } from 'react';

const Inqueryform =  () =>{
    const[formData,setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      checkMeOut: false
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };
  
    console.log(handleChange)
    
    
 

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(e.preventDefault);

     
      console.log(formData);
    };


    return (
      <Form onSubmit={handleSubmit}>
        <h2>Place A Query</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
           <Form.Control
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact no</Form.Label>
          <Form.Control
          type="tel"
          placeholder="Phn no."
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          name="checkMeOut"
          checked={formData.checkMeOut}
          onChange={handleChange}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>      
    );
  };
  
  export default Inqueryform;