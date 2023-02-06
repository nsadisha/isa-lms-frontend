import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/AuthService";

function Register() {
    const navigate = useNavigate();
    let passwordValue = '';
    let duplicateEmailErrorMsg = 'This email address is already in use!';
    let invalidEmailErrorMsg = 'Please enter a valid email address.';
    const [emailErrMsg, setErrMsg] = useState(invalidEmailErrorMsg)

    function handleRegister(e) {
        e.preventDefault()
        let data = createDataObjectForm(e.target)

        if (!isPasswordValid(data.password) || !isConfirmPasswordValid(data.password, data.cPassword) || !isEmailValid(data.email)) {
            console.log("Please check your fields again!");
            return;
        }
        authService.register(data).then(res => {
            console.log(res);
            navigate('/login')
        }).catch(err => {
            setErrMsg(duplicateEmailErrorMsg)
            e.target.email.classList.remove('is-valid')
            e.target.email.classList.add('is-invalid')
            console.log(err);
        })
    }

    function isEmailValid(email) {
        // eslint-disable-next-line
        let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/
        return regEx.test(email)
    }
    function isPasswordValid(password) {
        passwordValue = password;
        return password.length > 7;
    }
    function isConfirmPasswordValid(password, cPassword) {
        return cPassword === password
    }

    const handlePasswordField = (e) => {
        if (isPasswordValid(e.target.value)) {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        } else {
            e.target.classList.add('is-invalid')
        }
    }

    function handleConfirmPasswordField(e) {
        if (isConfirmPasswordValid(passwordValue, e.target.value)) {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        } else {
            e.target.classList.add('is-invalid')
        }
    }

    function handleEmailField(e) {
        setErrMsg(invalidEmailErrorMsg)
        if (isEmailValid(e.target.value)) {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        } else {
            e.target.classList.add('is-invalid')
        }
    }

    function createDataObjectForm(form) {
        return {
            first_name: form.fname.value,
            last_name: form.lname.value,
            email: form.email.value,
            password: form.password.value,
            cPassword: form.cPassword.value,
            role: form.role.value
        };
    }

    return (
        <div className="container login">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-6 col-lg-5">
                    <div className='login-div'>
                        <h1 className='caption mb-5'>Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputFname" className="form-label">First name</label>
                                <input type="text" className="form-control" id="exampleInputFname" name='fname' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputLname" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="exampleInputLname" name='lname' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name='email'
                                    onChange={handleEmailField}
                                    required />
                                <div id="passwordFeedback" className="invalid-feedback">
                                    {emailErrMsg}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name='password'
                                    onChange={handlePasswordField} />
                                <div id="passwordFeedback" className="invalid-feedback">
                                    Password must contain at least 8 characters.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
                                <input type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name='cPassword'
                                    onChange={handleConfirmPasswordField} />
                                <div id="cpasswordFeedback" className="invalid-feedback">
                                    Does not match with the password you entered!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="role" id="inlineRadio1" value="STUDENT" required />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Student</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="role" id="inlineRadio2" value="TEACHER" required />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Teacher</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="role" id="inlineRadio3" value="MANAGEMENT_STAFF" required />
                                    <label className="form-check-label" htmlFor="inlineRadio3">Management Staff</label>
                                </div>
                            </div>
                            <button type="submit" className="btn gradiant-btn w-100">Submit</button>
                        </form>
                        <div data-text="or" className="divider w-100 my-5"></div>
                        <p className='text-center'>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;