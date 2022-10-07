import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from './Schemas/index';
import './index.css'

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
}


const App = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
        }
    })
    // console.log(errors);
    return (
        <>
            <div className="container">
                <div className="model">
                    <div className="model-container">
                        <div className="model-left">
                            <h1 className="model-title">Welcome</h1>
                            <p className="model-desc">
                                To the Sahil Thakur website for programmers.
                            </p>


                            <form onSubmit={handleSubmit}>
                                <div className="input-block">
                                    <label htmlFor="name" className='input-label'>name
                                    </label>
                                    <input type="name" autoComplete='off'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name'
                                        value={values.name}
                                        onChange={handleChange} />
                                    {errors.name && touched.name ? <p className='ErrorMSG'>{errors.name}</p> : null}


                                    <div className="input-block">
                                        <label htmlFor="email" className='input-label'>Email</label>
                                        <input type="text"
                                            autoComplete='off'
                                            name='email'
                                            id='email'
                                            placeholder='Enter Your Email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? <p className='ErrorMSG'>{errors.email}</p> : null}

                                    </div>


                                    <div className="input-block">
                                        <label htmlFor="password" className='input-label'>Password</label>
                                        <input
                                            type="password"
                                            autoComplete='off'
                                            name='password'
                                            id='password'
                                            placeholder='Enter Your Password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {errors.password && touched.password ? <p className='ErrorMSG'>{errors.password}</p> : null}

                                    </div>


                                    <div className="input-block">
                                        <label htmlFor="confirm_password" className='input-label'>Confirm Password</label>
                                        <input type="password"
                                            autoComplete='off'
                                            name='confirm_password'
                                            id='confirm_password'
                                            placeholder='Enter Your Password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirm_password}
                                        />
                                        {errors.confirm_password && touched.confirm_password ? <p className='ErrorMSG'>{errors.confirm_password}</p> : null}
                                    </div>


                                    <div className="modal-buttons">
                                        <a href="#" className=''>
                                            Want to register using Gmail ?
                                        </a>
                                        <button className='input-button' type='submit'>
                                            Registraction
                                        </button>
                                    </div>


                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App