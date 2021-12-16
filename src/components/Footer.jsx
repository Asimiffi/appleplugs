import React from 'react'

const Footer = () => {
    return (
        <section id='footer' className='p-5'>
            <h3>Made by Nicer.</h3>
            <p>(A parody of the good folks at Apple.)</p>
            <p>@nicerstudio</p>
            <p> If this made you chuckle, sign up to get an email when we make other cool stuff.</p> 
            <input type="text" placeholder='Your email id'/> &nbsp;
            <button>Subscribe</button>
        </section>
    )
}

export default Footer
