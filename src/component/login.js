import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Form, Field } from 'react-final-form'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


function Login() {
    const getdata = localStorage.getItem('users')
    const navigate = useNavigate()
    console.log(getdata, '12345678')
    const gettoken = Cookies.get('token') 
    console.log(gettoken, 'wertui')

    const onsubmit = ((value) => {
        if (getdata) {
            let list = JSON.parse(getdata)
            let user = list.find(item => item.Email === value.Email)
            if (user) {
                if (user.Password === value.password) {
                    delete user.Password
                    delete user.ConfirmPassword
                    document.cookie = `token=${JSON.stringify(user)}`

                    navigate('/Home')
                } else {
                    alert('wrong password')
                }
            } else {
                alert('no user found')
            }
        }
        else {
            // alert("new user")
            navigate('/')
        }


    })
    useEffect(() => {
        if (gettoken) {
            navigate('/home')
        }
     
    }, [])


    return (<>
        <div className="login_bg">
            <div className='logindiv'>
                <Card className='cardalign'>
                    <Card.Body>
                        <div className=''><h1>Login</h1></div>
                        <Form
                            onSubmit={onsubmit}
                            validate={values => {
                                const errors = {}
                                if (!values.Email) {
                                    errors.Email = '*'
                                }
                                if (!values.password) {
                                    errors.password = '*'
                                }

                                return errors
                            }}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="maininputdiv">
                                        <Field name="Email">
                                            {({ input, meta }) => (
                                                <>
                                                    <div className='d-flex'>
                                                        <label className='onRequired'>Email</label>
                                                        <div className='error ms-1'>{meta.error && meta.touched && <span className='text-danger'>{meta.error}</span>}</div>
                                                    </div>
                                                    <div className='inputaligndiv'>
                                                        <input {...input} type="text" placeholder="Email" className='inputalign' />

                                                    </div>
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                    <Field name="password">
                                        {({ input, meta }) => (
                                            <>
                                                <div className='d-flex'>
                                                    <label>Password</label>
                                                    <div className='error ms-1'>{meta.error && meta.touched && <span className='text-danger'>{meta.error}</span>}</div>
                                                </div>
                                                <div className='inputaligndiv'>
                                                    <input {...input} type="password" placeholder="Password" className='inputalign' />

                                                </div>

                                            </>
                                        )}
                                    </Field>
                                    <div className="buttons">
                                        <button type="submit" disabled={submitting}>
                                            Submit
                                        </button>

                                    </div>
                                    <a href="/singup">New User?</a>
                                </form>
                            )}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>

    </>

    );
}

export default Login;