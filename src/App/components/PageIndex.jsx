//PageIndex.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 
import info from './data';
import { Link } from 'react-router-dom';

const PageIndex = () => {
    return (
        <>      <br />
        <br />
            <div className="mx-auto pageIndex">

                <ul className="page-list">
                    <li> <h3> Index:</h3> </li>
                    <li><Link to={info[0].link}>{info[0].title}</Link></li>
                    <li><Link to={info[1].link}>{info[1].title}</Link></li>
                    <li><Link to={info[2].link}>{info[2].title}</Link></li>
                </ul>
                <br />
                <br />
            </div>
            <br />
   
            <br />
            <br />
        </>
    );

}

export default PageIndex;