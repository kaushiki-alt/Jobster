import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import landingImg from '../assets/images/main.svg'

function Landing() {
    return (
        <main>
            <nav className='w-fluid h-nav flex items-center'>
                <img src={logo} alt="logo"/>
            </nav>
            <div className="grid items-center mb-1 min-h-nav lg:grid-cols-2 lg:gap-12">
                <div>
                    <h1 className='font-bold'>Job
                        <span className=' text-primary-500'>Tracking</span> app
                    </h1>
                    <p className='max-w-md text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit corrupti ut assumenda labore dolore cum dolorem mollitia! Quod ab ipsam quas eligendi possimus.</p>
                    <Link to='/register' className='btn btn-hero'>Register/Login</Link>
                </div>
                <img src={landingImg} alt="job hunt" className='lg:img hidden lg:block' />
            </div>
        </main>
    )
}

export default Landing
