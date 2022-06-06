// import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Login() {
  // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  // const [loginUser] = useMutation(LOGIN_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const { data } = await loginUser({
  //       variables: { ...userFormData }
  //     });
  //     console.log(data)
  //     Auth.login(data.login.token);
  //   } catch (err) {
  //     console.error(err);
  //     setShowAlert(true);
  //   }

  //   setUserFormData({
  //     name: '',
  //     email: '',
  //     password: '',
  //   });
  // };

  return (

    <>
      <div><h3 className=" mx-auto d-flex justify-content-center">Welcome to Kernel</h3>
      </div>
      <div><p className=" mx-auto d-flex justify-content-center">trackin the kernels</p>
      </div>

      <div className="row d-flex pt-4">
        <div className="col-md-4 mx-auto">
          <LoginForm />

        </div>
        <div className="col-md-4 mx-auto">
          <SignupForm />
        </div>
      </div>

      {/* initial form code */}
      {/* <div className="row d-flex pt-4">
<div className="col-md-4 mx-auto">

      <form className="justify-content-center">
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Sign in</button>

      </form>
      </div> */}

      {/* <div className="col-md-4 mx-auto">
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="mt-2 btn btn-dark btn-lg btn-block">Register</button>

      </form>
      </div> */}
      {/* </div> */}
    </>
  );
}



export default Login