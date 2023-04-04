import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/style1.css"

function Signup_d() {
    const navigate = useNavigate();
    const signup_pPage = useCallback(()=>{
        navigate("/signup_p")
      },[navigate]);
      const signup_dPage = useCallback(()=>{
        navigate("/signup_d")
      },[navigate]);
    return (
        <>
            <div className="signup_form">

<h2 className="heading_center">Signup Form</h2>





<form className="modal-content" action="">
    <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
       <div className="S_button"><a onClick={signup_pPage}>Signup For Patient</a></div>
       <div className="S_button"><a onClick={signup_dPage}>Signup For Doctor</a></div>
    </div>
</form>
</div>




        </>
    );
}
export default Signup_d;