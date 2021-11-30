import './Components.css';
import Article from './Article';
import info from './data';
import Page3Content from './Page1Content';

const Page3 = () => { return (
<div className="mx-auto page page3">

 <Article 
   image={info[2].art} 
   title={info[2].title} 
   author={info[2].author} 
   art={info[2].clkImg}
   date={info[2].date} 
   />     
<Page3Content  post={info[2].post}  />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page3; 