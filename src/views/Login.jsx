import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import authService from '../service/AuthService';
import localStorageService from '../service/LocalStorageService';

import '../assets/css/login.scss';

function Login({ title }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    function hadndleLogin(e) {
        e.preventDefault()

        let email = e.target.email.value;
        let password = e.target.password.value;

        authService.login(email, password).then(data => {
            localStorageService.setToken(data.token);
            localStorageService.setEmail(data.user.email);
            localStorageService.setRole(data.user.role);

            navigate('/')
        }).catch(err => {
            setError(getErrorMessageFromError(err));
            e.target.email.classList.add('is-invalid');
            e.target.password.classList.add('is-invalid');
        })
    }

    function getErrorMessageFromError(err) {
        return err.response !== undefined ? err.response.data.message : "Email or password is incorrect....";
    }

    useEffect(() => {
        if (localStorageService.isSigned()) {
            navigate('/')
        }

        setEmail(localStorageService.getEmail())
        document.title = title;
    }, [title, navigate]);

    return (
        <div className="container login">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-6 col-lg-4">
                    <div className='login-div'>
                        <h1 className='caption mb-5'>Login</h1>
                        <form onSubmit={hadndleLogin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name='email' defaultValue={email} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name='password' required />
                                <div id="passwordFeedback" className="invalid-feedback">
                                    {error}
                                </div>
                            </div>
                            <button type="submit" className="btn gradiant-btn w-100">Submit</button>
                        </form>
                        <div data-text="or" className="divider w-100 my-5"></div>
                        <p className='text-center'>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;