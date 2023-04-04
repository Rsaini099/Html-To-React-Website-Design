import React from "react"
import "./css/style1.css"

function Signup_p() {
    return (
        <>
            <div className="signup_form">

                <h2 className="heading_center">Patient Signup Form</h2>





                <form className="modal-content" action="">
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <label htmlFor="text"><b>Full Name</b></label>
                        <input type="text" placeholder="Enter Full Name" name="F_name" required />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label htmlFor="text"><b>Mobile Number</b></label>
                        <input type="text" placeholder="Enter Mobile Number" name="mobile" required />

                        <label htmlFor="text"><b>Gender</b></label><br />
                        <input type="radio" id="html" name="fav_language" value="HTML" />&nbsp;
                        <label for="html">Male</label>&nbsp;&nbsp;
                        <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;
                        <label for="css">Female</label>&nbsp;&nbsp;
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />&nbsp;
                        <label for="javascript">Other</label><br />

                        <label htmlFor="text"><b>Age </b></label><br />
                        <input type="radio" id="age1" name="age" />&nbsp;
                        <label for="age1">0 - 17</label>&nbsp;&nbsp;
                        <input type="radio" id="age2" name="age" />&nbsp;
                        <label for="age2">18 - 54</label>&nbsp;&nbsp;
                        <input type="radio" id="age3" name="age" />&nbsp;
                        <label for="age3">55+</label><br />

                        <label htmlFor="text"><b>Choose a Service:</b></label>&nbsp;&nbsp;
                        <select name="cars" id="cars">
                        <option value="volvo">Select</option>
                            <option value="volvo">Service 1</option>
                            <option value="saab">Service 2</option>
                            <option value="opel">Service 3</option>
                            <option value="audi">Service 4</option>
                        </select><br/>

                        <label htmlFor="text"><b>Address</b></label>
                        <input type="text" placeholder="Enter Your Address" name="address" required />

                        <label htmlFor="text"><b>City</b></label>
                        <input type="text" placeholder="Enter Your City" name="city" required />

                        <label htmlFor="text"><b>State</b></label>
                        <input type="text" placeholder="Enter Your State" name="state" required />

                        <label htmlFor="text"><b>Pincode</b></label>
                        <input type="text" placeholder="Enter Your Pincode" name="pincode" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>

                        <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

                        <div className="clearfix">

                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>




        </>
    );
}
export default Signup_p;

