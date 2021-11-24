import './Components.css';
import Article from './Article';
import info from './data';
import Page3Text from './Page1Text';

const Page3 = () => { return (
<div className="mx-auto page">

 <Article 
   image={info[2].art} 
   title={info[2].title} 
   author={info[2].author} 
   art={info[2].clkImg}
   date={info[2].date} 
   />     
<Page3Text  post={info[2].post}  />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page3; 