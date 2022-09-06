import Button from '@mui/material/Button';
import React, { useState } from 'react'
import './loginform.css'
const LoginForm = () => {




    const [registration, setRegistration] = useState({
        email: "",
        password: ""
    })
    const [records, setRecords] = useState([])


    const formSubmit = (event) => {

        event.preventDefault()


        if (registration.email && registration.password) {

            const newRecord = { ...registration }

            setRecords([...records, newRecord])

            alert(`Your Email is ${registration.email} Your Password is ${registration.password}`)
        } else {
            alert(`please enter your details`)
        }
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setRegistration({ ...registration, [name]: value })

    }
    return (
        <>

            <form onSubmit={formSubmit}>

                <div className='cover'>
                    <h1>Login</h1>


                    <input
                        id="email"
                        autoComplete='off'
                        type="text"
                        name='email'
                        value={registration.email}
                        onChange={handleInput}
                        placeholder='Enter Your Email' />





                    <input
                        id="password"
                        autoComplete='off'
                        type="password"
                        name="password"
                        value={registration.password}
                        onChange={handleInput}
                        placeholder='Enter Your Password' />

                    <a href="#" className='forget'>forget password?</a>


                    <Button type="submit" variant="contained">
                        Login
                    </Button>

                    <p className='text'>Or login using </p>

                    <div className="altLogin">

                        <div className='facebook'></div>
                        <div className='google'></div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default LoginForm;
