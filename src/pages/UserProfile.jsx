import React from 'react'
import { enviroment } from '../enviroment';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const apiUrl = enviroment.apiUrl
let submitted = false;

function UserProfile() {
    const [posts, setPosts] = React.useState([]);
    const [userData, setUserData] = React.useState([]);

    const navigate = useNavigate()

    React.useEffect(() => {
        const requestOptions = {
            method: "GET", // Specify the request method
            headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem('token') }, // Specify the content type
        };

        fetch(`${apiUrl}users/userDetails/${localStorage.getItem('data')}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.data[0])
                if (data.status === 1) {
                    console.log('initialValues',initialValues)
                    if (data && data.data && !data.data.length) {
                        navigate('/login')
                    }
                } else {
                    // resError = posts.message
                    // <Redirect to='/login' />
                    navigate('/login')
                }
            })
            .catch((err) => {
                navigate('/login')
                console.log('err', err);
            });

    }, [])

    const initialValues = { 
        f_name: posts.f_name, 
        contact: posts.contact, 
        email: posts.email, 
        position: posts.position, 
        ref_id: posts.ref_id 
    }


    function handelSubmit(e){

    }

    React.useEffect(() => {
        if(submitted){
            const requestOptions = {
                method: "POST", // Specify the request method
                headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem('token') }, // Specify the content type
                body: JSON.stringify()
            };
    
            fetch(`${apiUrl}users/userDetails/${localStorage.getItem('data')}`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data)
                    if (data.status === 1) {
                        if (data && data.data && !data.data.length) {
                            navigate('/login')
                        }
                    } else {
                        navigate('/login')
                    }
                })
                .catch((err) => {
                    navigate('/login')
                    console.log('err', err);
                });
    
        }
        
    }, [])


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1 className="pagheader">
                    User Profile
                </h1>

            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="box-body box-profile custom-profilebox">
                                <img className="profile-user-img img-responsive img-circle" src="./assets/img/user2-160x160.jpg"
                                    alt="User profile picture" />
                                <h3 className="profile-username text-center custom-color">{posts.f_name}</h3>
                                <p className="text-muted text-center">{posts.email}</p>
                                <p className="text-center customId">ID: {posts.user_id}</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Form onSubmit={handelSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputtext1">Full Name</label>
                                            <input type="text" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputtext2">Last Name</label>
                                            <input type="text" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail3">Email Address</label>
                                            <input type="email" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail4">Mobile Number</label>
                                            <input type="text" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail4">City</label>
                                            <input type="text" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group customselect">
                                            <label for="exampleInputEmail4">State</label>
                                            <select className="form-control select2" style={{width: '100%'}}>
                                                <option selected="selected">Select State</option>
                                                <option value="AP">Andhra Pradesh</option>
                                                <option value="AR">Arunachal Pradesh</option>
                                                <option value="AS">Assam</option>
                                                <option value="BR">Bihar</option>
                                                <option value="CT">Chhattisgarh</option>
                                                <option value="GA">Gujarat</option>
                                                <option value="HR">Haryana</option>
                                                <option value="HP">Himachal Pradesh</option>
                                                <option value="JK">Jammu and Kashmir</option>
                                                <option value="GA">Goa</option>
                                                <option value="JH">Jharkhand</option>
                                                <option value="KA">Karnataka</option>
                                                <option value="KL">Kerala</option>
                                                <option value="MP">Madhya Pradesh</option>
                                                <option value="MH">Maharashtra</option>
                                                <option value="MN">Manipur</option>
                                                <option value="ML">Meghalaya</option>
                                                <option value="MZ">Mizoram</option>
                                                <option value="NL">Nagaland</option>
                                                <option value="OR">Odisha</option>
                                                <option value="PB">Punjab</option>
                                                <option value="RJ">Rajasthan</option>
                                                <option value="SK">Sikkim</option>
                                                <option value="TN">Tamil Nadu</option>
                                                <option value="TG">Telangana</option>
                                                <option value="TR">Tripura</option>
                                                <option value="UT">Uttarakhand</option>
                                                <option value="UP">Uttar Pradesh</option>
                                                <option value="WB">West Bengal</option>
                                                <option value="AN">Andaman and Nicobar Islands</option>
                                                <option value="CH">Chandigarh</option>
                                                <option value="DN">Dadra and Nagar Haveli</option>
                                                <option value="DD">Daman and Diu</option>
                                                <option value="DL">Delhi</option>
                                                <option value="LD">Lakshadweep</option>
                                                <option value="PY">Puducherry</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail4">Address</label>
                                            <input type="text" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="exampleInputEmail4">Pin</label>
                                            <input type="text" className="form-control normal" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-primary mainbtn" style={{marginTop: '12px'}}>Seve
                                            Changes</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserProfile
