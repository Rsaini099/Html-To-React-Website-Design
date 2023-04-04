
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';



function Header() {
    const navigate = useNavigate();

    const homePage = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const aboutPage = useCallback(() => {
        navigate("/about");
    }, [navigate]);
    const servicePage = useCallback(() => {
        navigate("/services")
    }, [navigate]);
    const contectPage = useCallback(() => {
        navigate("/contect")
    }, [navigate]);
    const doctorPage = useCallback(() => {
        navigate("/doctor")
    }, [navigate]);
    const doctorSPage = useCallback(() => {
        navigate("/doctor_single")
    }, [navigate]);
    const appoinmentPage = useCallback(() => {
        navigate("/appoinment")
    }, [navigate]);
    const signinPage = useCallback(() => {
        navigate("/signin")
    }, [navigate]);
    const signupPage = useCallback(() => {
        navigate("/signup")
    }, [navigate]);


    return (
        <div>

            <div id="top">


                <div className="header-top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item"><a link="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>contect@medexpertz.com</a></li>
                                    <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <a link="tel:+23-345-67890">
                                        <span>Call Now : </span>
                                        <span className="h4">823-4565-13456</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0 buton">
                                    <a onClick={signinPage}>Signin</a>
                                    <a onClick={signupPage}>Signup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" onClick={homePage}>
                            <img src="images/logo.png" alt="logo" className="img-fluid" />
                        </a>

                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
                            aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icofont-navigation-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a className="nav-link" onClick={homePage}>Home</a></li>
                                <li className="nav-item"><a className="nav-link" onClick={aboutPage}>About</a></li>
                                <li className="nav-item"><a className="nav-link" onClick={servicePage}>Services</a></li>

                                {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" link="department.html" id="dropdown02" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down"></i></a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                            <li><a className="dropdown-item" link="department.html">Departments</a></li>
                                            <li><a className="dropdown-item" link="department-single.html">Department Single</a></li>

                                            <li className="dropdown dropdown-submenu dropright">
                                                <a className="dropdown-item dropdown-toggle" link="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                                <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                                                    <li><a className="dropdown-item" link="index.html">Submenu 01</a></li>
                                                    <li><a className="dropdown-item" link="index.html">Submenu 02</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                        <li><a className="dropdown-item" onClick={doctorPage}>Doctors</a></li>
                                        <li><a className="dropdown-item" onClick={doctorSPage}>Doctor Single</a></li>


                                        {/* <li className="dropdown dropdown-submenu dropleft">
                                                <a className="dropdown-item dropdown-toggle" link="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                                <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                    <li><a className="dropdown-item" link="index.html">Submenu 01</a></li>
                                                    <li><a className="dropdown-item" link="index.html">Submenu 02</a></li>
                                                </ul>
                                            </li> */}
                                    </ul>
                                </li>

                                {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" link="blog-sidebar.html" id="dropdown05" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                            <li><a className="dropdown-item" link="blog-sidebar.html">Blog with Sidebar</a></li>
                                            <li><a className="dropdown-item" link="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li> */}

                                <li className="nav-item"><a className="nav-link" onClick={contectPage}>Contact</a></li>
                                <li className="nav-item"><a className="nav-link" onClick={appoinmentPage}>Appoinment</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Header;
