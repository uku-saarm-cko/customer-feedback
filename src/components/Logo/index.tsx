import {ReactComponent as Logo} from '../../assets/img/logo.svg';

const HeaderLogo = () => (
    <a className="App-logo"
       href="https://checkout.com"
       target="_blank"
       rel="noopener noreferrer">
        <Logo fill="#fff" stroke="#fff"/>
    </a>
);

export default HeaderLogo