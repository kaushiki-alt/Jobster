import { Link } from 'react-router-dom'
import ErrorImg from '../assets/images/not-found.svg'
function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={ErrorImg} alt="Error" className='w-fluid max-w-150 block my-8' />
      <h3 className='capitalize'>Ohh! Page Not Found</h3>
      <p className='text-gray-500 capitalize'>We can't seem to find the page you're looking for</p>
      <Link to='/' className='text-primary-500 underline capitalize'>back home</Link>

    </div>
  )
}

export default Error
