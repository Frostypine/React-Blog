import './Components.css';
import Article from './Article';
import info from './data';

const Page3 = () => { return (
<div className="mx-auto page">

 <Article 
   image={info[2].art} 
   title={info[2].title} 
   author={info[2].author} 
   date={info[2].date} 
   post={info[2].post} 
   />     

    <br/><br/><br/><br/>
    </div>);
 }

export default Page3; 