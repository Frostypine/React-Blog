import './Components.css';
import { Link } from 'react-router-dom';
import ANav from './ANav';

const Footer = () => {
    return (
        <footer className="footer">
            <br />
            <br />
            <ANav /> 
            {/* <button className="admin-button">Admin</button> */}
            <br />
            <br />
            <br />
            <br />
           
        </footer>);
}

export default Footer;