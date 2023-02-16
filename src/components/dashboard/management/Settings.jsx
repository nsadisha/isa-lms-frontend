import { useState } from "react";
import Toast from "../../Toast"
import managementStaffService from "../../../service/ManagementStaffService";
import { isEmailValid, isPasswordValid, isConfirmPasswordValid } from "../../../service/FormValidationService";
import { createDataObjectForm } from "../../../service/FormHelperService";

function Settings({ token, callback }) {
    let passwordValue = '';
    let invalidEmailErrorMsg = 'Please enter a valid email address.';
    const [emailErrMsg, setErrMsg] = useState(invalidEmailErrorMsg)
    const [showToast, setShowToast] = useState('false');

    function handleAssignMember(e) {
        e.preventDefault()
        let data = createDataObjectForm(e.target)

        if (!isPasswordValid(data.password) || !isConfirmPasswordValid(data.password, data.cPassword) || !isEmailValid(data.email)) {
            console.log("Please check your fields again!");
            return;
        }
        managementStaffService.assignNewMember(token, data)
            .then(res => {
                setShowToast('true')
                clearEverything(e)
                callback();

            }).catch(err => {
                console.log(err);
                setErrMsg(err.response.data.message)
                e.target.email.classList.remove('is-valid')
                e.target.email.classList.add('is-invalid')
                console.log(err.response.data);
            })
    }

    const handlePasswordField = (e) => {
        passwordValue = e.target.value;
        if (isPasswordValid(passwordValue)) {
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

    function clearEverything(e) {
        e.target.fname.value = "";
        e.target.lname.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.cPassword.value = "";

        e.target.email.classList.remove('is-valid');
        e.target.password.classList.remove('is-valid');
        e.target.cPassword.classList.remove('is-valid');
    }

    return (
        <div>
            <form onSubmit={handleAssignMember}>
                <h4 className="mb-4 mt-3">Assign new staff member</h4>
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
                            <input type="password" className="form-control" id="confirm-password" name='cPassword' onChange={handleConfirmPasswordField} required />
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

            <Toast
                title='✅ ISA LMS'
                message='New staff member successfully added.'
                time='Now'
                show={showToast}
                onDismissed={() => { setShowToast('false') }} />
        </div>
    );
}

export default Settings;