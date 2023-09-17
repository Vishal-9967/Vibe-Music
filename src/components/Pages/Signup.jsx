import React,{ useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/Signup.css';
import { Link,  useHistory } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';
// ABHI CSS Baki Hai aur Responsiveness........................

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values)); 
    // getting error.....
  if(errors.name==="" && errors.email==="" && errors.password==="" ){
axios.post('http://localhost:8081/signup', values)
.then(res => {
  history.push('/login');
})
.catch(err=> console.log(err));
  }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      {/* BOOTSTRAP............ */}
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="name"
              name="name"
              onChange={(e) => setValues({ name: e.target.value })}
              className="form-control rounded-0"
              placeholder="Enter Your Name"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setValues({ email: e.target.value })}
              className="form-control rounded-0"
              placeholder="Enter Email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setValues({ password: e.target.value })}
              className="form-control rounded-0"
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button className="btn btn-success w-100 ">Sign up</button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;

