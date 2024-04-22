import React from 'react'
import Form from 'react-bootstrap/Form';
import { enviroment } from '../enviroment';
import { useNavigate } from 'react-router-dom';


const apiUrl = enviroment.apiUrl

function Register() {
    const navigate = useNavigate()
    let successMessage = ''
    let errorMessage = ''
    let internalError = ''
    let contactError = ''
    const initialValues = { f_name: "", contact: "", email: "", password: "", confirmPassword: "", position: "L", ref_id: "" }
    const [formValues, setFormvalues] = React.useState(initialValues)
    const [formErrors, setFormErrors] = React.useState({})
    const [isSubmit, setIsSubmit] = React.useState(false)
    const [posts, setPosts] = React.useState([]);

    let showErrors = false;
    const [err, setErr] = React.useState(false);

    function handelChange(e) {
        const { name, value } = e.target
        console.log(e.target)
        setFormvalues({ ...formValues, [name]: value })
        setIsSubmit(true)
    }

    function handelSubmit(e) {
        e.preventDefault()
        setFormErrors(validates(formValues))
    }

    function validates(values) {
        console.log('values', values)
        const errors = {};
        // const regex = /^[^\s@]+''; 
        if (!values.email) {
            errors.email = 'Please enter your email.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter a valid email address.'
        }
        if (!values.password) {
            errors.password = 'Please enter your password.'
        } if (!values.confirmPassword) {
            errors.confirmPassword = 'Please Re-Enter your password.'
        } if (!values.contact) {
            errors.contact = 'Please enter your contact number.'
        } if (values.password != values.confirmPassword) {
            errors.confirmPassword = 'Password do not match.'
        } if (!values.f_name) {
            errors.f_name = 'Please enter your full name.'
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

            fetch(`${apiUrl}users/userRegistratios`, requestOptions)
                .then((res) => res.json(console.log()))
                .then((data) => {
                    setPosts(data)
                    // posts.message      
                    if (data.status === 1) {
                        navigate('/login')
                    } else {
                        console.log('posts',posts)
                        // resError = posts.message
                        showErrors = true
                        console.log('showErrors',showErrors)
                        setErr(true)
                        console.log('setErr',err)
                        setTimeout(function () {
                            setErr(false)
                            console.log('setErr',err)
                        }, 5000);
                    }
                })
                .catch((err) => {
                    console.log('err', err.message);
                });
        }
    }, [formErrors])

    React.useEffect( () => {
        if(showErrors){
            setTimeout(function () {
                showErrors = false
                console.log('showErrors',showErrors)
            }, 5000);
        }
    } , [showErrors])

    return (
        <div className="hold-transition login-page">
            <div className="login-box customloginbox">
                <div className="login-logo">
                    <a href="#"><b>Registration</b></a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Register a new membership</p>

                        <Form onSubmit={handelSubmit} >
                            <div className={"input-group " + (formErrors.f_name ? '' : 'mb-3')}>
                                <input type="text" className="form-control" placeholder="Full Name" name="f_name" value={formValues.f_name} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa-solid fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger">{formErrors.f_name} </p>

                            <div className={"input-group " + (formErrors.email ? '' : 'mb-3')}>
                                <input type="email" className="form-control" placeholder="Email" name="email" value={formValues.email} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger">{formErrors.email} </p>

                            <div className={"input-group " + (formErrors.contact ? '' : 'mb-3')}>
                                <input type="text" className="form-control" placeholder="Mobile" name="contact" value={formValues.contact} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa-solid fa-mobile-screen"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger">{formErrors.contact} </p>

                            <div className={"input-group " + (formErrors.password ? '' : 'mb-3')}>
                                <input type="password" className="form-control" placeholder="Password" name="password" value={formValues.password} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa-solid fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger">{formErrors.password} </p>

                            <div className={"input-group " + (formErrors.confirmPassword ? '' : 'mb-3')}>
                                <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={formValues.confirmPassword} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa-solid fa-key"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger">{formErrors.confirmPassword} </p>

                            <div className={"input-group " + (formErrors.ref_id ? '' : 'mb-3')}>
                                <input type="text" className="form-control" placeholder="Refarel ID" name="ref_id" value={formValues.ref_id} onChange={handelChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa-solid fa-user-plus"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger">{formErrors.ref_id} </p>

                            <div className="radio regisradio">
                                <label >
                                    <input type="radio" name="position" for="left" value='L' onChange={handelChange} defaultChecked /> Left
                                </label>
                                <label >
                                    <input type="radio" name="position" for="right" value='R' onChange={handelChange} /> Right
                                </label>
                            </div>
                            <p className="text-danger">{formErrors.position} </p>

                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label for="remember">Remember Me</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Registration</button>
                                </div>
                            </div>
                           <p>{err   ? 'TRUE' : 'FALSE'}</p>
                            { err ? (posts.status === 1 ? <span className='text-success text-center'>{posts && posts.message ? posts.message : ''}</span> : <span className='text-danger text-center'>{posts && posts.message ? posts.message : ''}</span> ) : '' }
                            <span className='text-danger text-center'>{err ? ( posts && posts.error && (posts.error).indexOf('contact') != -1 ? 'Contact number already exist. Please try with different contact number' : 'Email address already exist. Please try with different email address') : ''}</span>
                        </Form>
                        <p className="mb-1">
                            <a href={'/login'}>I already have a membership</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
