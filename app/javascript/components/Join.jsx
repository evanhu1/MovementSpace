import React from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
class Create extends React.Component {
    render() {
        return (
        <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src="https://duckofminerva.com/wp-content/uploads/2018/03/main_900-676x451.jpg"
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            Join This Movement
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2"></h5>
                
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first and last name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter your email for updates on this movement" />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Sign Up
              </button>
            </div>
          </div>
          <Link to="/movements" className="btn btn-link">
            Back to Movements
          </Link>
        </div>
      </div>

     )
}
}
export default Create;