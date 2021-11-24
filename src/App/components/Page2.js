import './Components.css';
import Article from './Article';
import info from './data';
import Page2Text from './Page1Text';

const Page2 = () => { return (
<div className="mx-auto page">

 <Article 
   image={info[1].art} 
   title={info[1].title} 
   author={info[1].author} 
   art={info[1].clkImg}
   date={info[1].date} 
   />     
<Page2Text  post={info[1].post}  /> 

    <br/><br/><br/><br/>
    </div>);
 }

export default Page2; 