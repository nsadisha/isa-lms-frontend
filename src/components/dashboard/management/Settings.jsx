import { useState } from "react";
import managementStaffService from "../../../service/ManagementStaffService";

function Settings({token, callback}) {
    let passwordValue = '';
    let invalidEmailErrorMsg = 'Please enter a valid email address.';
    const [emailErrMsg, setErrMsg] = useState(invalidEmailErrorMsg)

    function handleAssignMember(e) {
        e.preventDefault()
        let data = createDataObjectForm(e.target)

        if (!isPasswordValid(data.password) || !isConfirmPasswordValid(data.password, data.cPassword) || !isEmailValid(data.email)) {
            console.log("Please check your fields again!");
            return;
        }
        managementStaffService.assignNewMember(token, data)
        .then(res => {
            clearEverything(e)
            callback();

        }).catch(err => {
            setErrMsg(err.response.data.message)
            e.target.email.classList.remove('is-valid')
            e.target.email.classList.add('is-invalid')
            console.log(err.response.data);
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
            cPassword: form.cpassword.value,
            role: form.role.value
        };
    }

    function clearEverything(e) {
        e.target.fname.value = "";
        e.target.lname.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.cpassword.value = "";

        e.target.email.classList.remove('is-valid');
        e.target.password.classList.remove('is-valid');
        e.target.cpassword.classList.remove('is-valid');
    }

    return (
        <div>
            <form onSubmit={handleAssignMember}>
                <h4 className="mb-3">Assign new staff member</h4>
                <div className="row">
                <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="first-name" className="form-label">First name</label>
                            <input type="text" className="form-control" id="first-name" name='fname' required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="last-name" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="last-name" name='lname' required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' onChange={handleEmailField} required />
                            <div id="passwordFeedback" className="invalid-feedback">
                                {emailErrMsg}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={handlePasswordField} required />
                            <div id="passwordFeedback" className="invalid-feedback">
                                Password must contain at least 8 characters.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="confirm-password" className="form-label">Confirm password</label>
                            <input type="password" className="form-control" id="confirm-password" name='cpassword' onChange={handleConfirmPasswordField} required />
                            <div id="cpasswordFeedback" className="invalid-feedback">
                                Does not match with the password you entered!
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="role" value='MANAGEMENT_STAFF' />
                    <div className="col-md-12">
                        <div className="mb-3">
                            <button type="submit" className="gradiant-btn r-50">Assign</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Settings;