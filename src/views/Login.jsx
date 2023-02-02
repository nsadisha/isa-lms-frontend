import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.scss'

function hadndleLogin(e) {
    e.preventDefault()
    let email = e.target.email.value;
	let password = e.target.password.value;
	console.log(email, password);
}

function Login(props) {
    useEffect(() => {document.title = props.title;})

    return (
        <div className="container login">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div>
                        <h1 className='caption mb-5'>Login</h1>
                        <form onSubmit={hadndleLogin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name='email' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
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