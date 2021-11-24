import info from './data';
import { Link } from 'react-router-dom';

const PageIndex = () => {
    return (
        <>
            <div className="mx-auto pageIndex">

                <ul>
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );

}

export default PageIndex;