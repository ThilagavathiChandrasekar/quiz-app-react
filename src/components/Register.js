import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { FaUserLock, FaLocationArrow, FaMailBulk, FaUserAlt} from "react-icons/fa";


function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Card style={{ width: '32rem'} } className='card'>
        <Card.Body>
      <Row className="mb-3">
      <div>
        <h1 className='signup'>
          <Spinner animation="grow" variant="warning" size='md' />
          Sign Up 
          <Spinner animation="grow" variant="warning" size='md' />
        </h1>
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
        <div>
        <FaUserAlt />
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Darsh"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a username.
            </Form.Control.Feedback>
          </InputGroup>
          </div>
        </Form.Group>
        </div>

        <div>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label> <FaMailBulk /> Email</Form.Label>
          <Form.Control type="email" placeholder="ddarsh@gmail.com"  required />
          <Form.Control.Feedback type="invalid">
            Please Enter a Email.
          </Form.Control.Feedback>
        </Form.Group>
        </div>

        <div>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
         <Form.Label> <FaUserLock /> Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="xxxx"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </div>
        
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
             <Form.Label> <FaLocationArrow /> City</Form.Label>
          <Form.Control type="text" placeholder="City" required defaultValue={'Theni'} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
         <Form.Label> State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type="submit"> Submit form</Button>
      </Card.Body>
    </Card>
    </Form>
  );
}

export default Register;