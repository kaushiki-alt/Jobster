import logo from '../assets/images/logo.svg'
const Logo = ({classname}: {classname?: string | undefined}) => {
return <img src={logo} alt='jobify' className={classname} />;}

export default Logo;
