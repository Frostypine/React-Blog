import './Components.css';
import Article from './Article';
import info from './data';

const Page2 = () => { return (
<div className="mx-auto page">

 <Article 
   image={info[1].art} 
   title={info[1].title} 
   author={info[1].author} 
   date={info[1].date} 
   post={info[1].post} 
   />     

    <br/><br/><br/><br/>
    </div>);
 }

export default Page2; 