
import Form from 'react-bootstrap/Form';
import React from 'react'
import { enviroment } from '../enviroment';
import { fetchData } from '../services/apiService'
import { useNavigate } from 'react-router-dom';

const url = process.env.REACT_APP_API_URL
const apiUrl = enviroment.apiUrl

function Login() {
    const navigate = useNavigate()

    let resError = ''
    let success = ''
    function getData() {
        console.log('function data', resError)
    }
    const initialValues = { email: "", password: "" }
    // function validateForm() {console.log(count++)}
    const [formValues, setFormvalues] = React.useState(initialValues)
    const [formErrors, setFormErrors] = React.useState({})
    const [isSubmit, setIsSubmit] = React.useState(false)
    const [posts, setPosts] = React.useState([]);
    function handelChange(e) {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value })
        setIsSubmit(true)
    }

    function handelSubmit(e) {
        e.preventDefault()
        setFormErrors(validates(formValues))
    }

    function validates(values) {
        const errors = {};
        // const regex = /^[^\s@]+'';
        if (!values.email) {
            errors.email = 'Email is required'
        } if (!values.password) {
            errors.password = 'Password is required'
        }
        return errors;
    }

    React.useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const requestOptions = {
                method: "POST", // Specify the request method
                headers: { "Content-Type": "application/json" }, // Specify the content type
                body: JSON.stringify(formValues) // Send the data in JSON format
            };

            fetch(`${apiUrl}users/login`, requestOptions)
                .then((res) => res.json(console.log()))
                .then((data) => {
                    setPosts(data)
                    if (data.status === 1) {
                        // success = posts.message
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('data', data.data)
                        navigate('/')
                    } else {
                        resError = posts.message
                    }
                })
                .catch((err) => {
                    console.log('err', err.message);
                });
        }
    }, [formErrors])

    return (
        <div className="hold-transition login-page">
            <div className="login-box customloginbox">
                <div className="login-logo">
                    <b>Sign In</b>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session  </p>
                        <Form onSubmit={handelSubmit}>
                            <div className={"input-group " + (formErrors.email ? '' : 'mb-3')}>
                                <input type="email" className="form-control" name="email" placeholder="Email" value={formValues.email} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-danger mb-2'>{formErrors.email}</p>

                            <div className={"input-group " + (formErrors.password ? '' : 'mb-3')}>
                                <input type="password" className="form-control" name="password" placeholder="Password" value={formValues.password} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-danger mb-2'>{formErrors.password}</p>
                            {posts.status === 1 ? <span className='text-success'>{posts.message}</span> : <span className='text-danger'>{posts.message}</span>}
                            <div className="input-group mb-3">
                                <img src="./assets/img/cap.jpg" alt="google" />
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary btn-block"  >Sign In</button>
                                </div>
                            </div>
                        </Form>

                        <p className="mb-1">
                            <a href={'/'}>I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href={'/register'} className="text-center">Register a new membership</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
