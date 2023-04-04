import React from 'react';

import "./css/style1.css"
import Sign_Form from '../Component/Sign_Form';






function Signin() {

  // const [isShown, setIsShown] = useState(false);
  // const handleForm = event => {
  //     // 👇️ toggle shown state
  //     setIsShown(current => !current);

  //   };
  //   const [isVisible, setIsVisible] = useState(true);

  // const handleForm = event => {
  //   // 👇️ toggle visibility
  //   setIsVisible(current => !current);
  // };
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }

  function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }


  return (
    <>
      <div className="signup_form">

        <h2 className="heading_center">Patient's / Doctor's Login Form</h2>

        <div className="container">
          <div className='section_divided'>
            <h1>Sign In</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <div className="S_button"><a onClick={myFunction}>Signin For Patient</a></div>
            <div id="form" className="S_button"><a onClick={myFunction2}>Signin For Doctor</a></div>
            <hr />
          </div>

          <div id="myDIV">
            <Sign_Form />
          </div>

          <div id="myDIV2">
            <Sign_Form />
          </div>

        </div>
      </div>
    </>
  );
}
export default Signin;