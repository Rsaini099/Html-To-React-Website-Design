import React from "react";

function Sign_Form() {
    return (
        <>
        

            <form className="modal-content animate" action="" method="post">
                <div className="container">
                    
                    <div className="imgcontainer">

                        <img src="/images/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>


                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />


                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <button type="submit">Login</button>


                    {/* <div className="container" >
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> */}
                </div>
            </form>
        </>
    );
}
export default Sign_Form;