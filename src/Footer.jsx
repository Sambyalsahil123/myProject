import React from 'react'

const Footer = () => {
    const changeYear = new Date().getFullYear();

    return (
        <div>
            <footer className='bg-light text-center'>
                <p>© copyright {changeYear} </p>
            </footer>
        </div>
    )
}

export default Footer
