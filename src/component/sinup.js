import { Button } from "react-bootstrap"
import { Field, Form } from "react-final-form"
import { Link, useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap';
const Singin = () => {
    const navigate = useNavigate()
    const getdata = localStorage.getItem("users");
    const handleSubmit = (values, form) => {
        const getUserList = JSON.parse(localStorage.getItem("users"));
        if (getdata && getdata.includes(values.Email)) {
            alert("Please log in with another email");
            form.change('Email', '');
        } else {
            if (getdata) {
                localStorage.setItem('users', JSON.stringify([values, ...getUserList]));
                navigate('/')
            } else {
                localStorage.setItem("users", JSON.stringify([values]));
                navigate('/')
            }
        }
    };
    const initialValues = {
        firstName: "",
        LastName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    }
    const validate = (values) => {
        const errors = {}
        var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!values.firstName) {
            errors.firstName = 'Required'
        }
        if (!values.LastName) {
            errors.LastName = 'Required'
        }
        if (!values.Email) {
            errors.Email = 'Required'
        }

        if (!values.Password) {
            errors.Password = 'Required'
        }
        if (values.Password && !regularExpression.test(values.Password)) {
            errors.Password = "invalid password"
        }

        if (!values.ConfirmPassword) {
            errors.ConfirmPassword = 'Required'
        }
        else if (values.ConfirmPassword !== values.Password) {
            errors.ConfirmPassword = 'not match'
        }
        return errors

    }

    return (
        <div className="singup">
            <Card className="cardalign">
                <Card.Body>
                    <h1 className="onmobile">singup</h1>

                    <Form
                        onSubmit={handleSubmit}
                        validate={validate}
                        initialValues={initialValues}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>

                                <Field name="firstName">
                                    {({ input, meta }) => (
                                        <>
                                            <label></label>
                                            <div className='inputaligndiv'>
                                                <input {...input} type="text" placeholder="Frist Name" className='inputalign' />
                                                <div className='error'>{meta.error && meta.touched && <span className='text-danger error'>{meta.error}</span>}</div>
                                            </div>
                                        </>
                                    )}
                                </Field><Field name="LastName">
                                    {({ input, meta }) => (
                                        <>
                                            <label></label>
                                            <div className='inputaligndiv'>
                                                <input {...input} type="text" placeholder="Last Name" className='inputalign' />
                                                <div className='error'>{meta.error && meta.touched && <span className='text-danger'>{meta.error}</span>}</div>
                                            </div>
                                        </>
                                    )}
                                </Field><Field name="Email">
                                    {({ input, meta }) => (
                                        <>
                                            <label></label>
                                            <div className='inputaligndiv'>
                                                <input {...input} type="email" placeholder="Email" className='inputalign' />
                                                <div className='error'>{meta.error && meta.touched && <span className='text-danger'>{meta.error}</span>}</div>
                                            </div>
                                        </>
                                    )}
                                </Field><Field name="Password">
                                    {({ input, meta }) => (
                                        <>
                                            <label></label>
                                            <div className='inputaligndiv'>
                                                <input {...input} type="password" placeholder="Password" className='inputalign' />
                                                <div className='error'>{meta.error && meta.touched && <span className='text-danger'>{meta.error}</span>}</div>
                                            </div>
                                        </>
                                    )}
                                </Field><Field name="ConfirmPassword">
                                    {({ input, meta }) => (
                                        <>
                                            <label></label>
                                            <div className='inputaligndiv'>
                                                <input {...input} type="password" placeholder="Confirm Password" className='inputalign' />
                                                <div className='error'>{meta.error && meta.touched && <span className='text-danger'>{meta.error}</span>}</div>
                                            </div>
                                        </>

                                    )}
                                </Field>
                                <Button type="submit" value="send" onSubmit={() => handleSubmit()} >
                                    Submit
                                </Button>
                                <div><Link to="/">
                                    Already Have an Account
                                </Link>

                                </div>

                            </form>

                        )} />
                </Card.Body>
            </Card>

        </div>
    )
}

export default Singin
