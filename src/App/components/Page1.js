import './Components.css';
import Article from './Article';
import Page1Text from './Page1Text';
import info from './data';

const Page1 = () => { return (
<div className="mx-auto page">

 <Article 
   image={info[0].art} 
   title={info[0].title} 
   author={info[0].author} 
   date={info[0].date} 
   />     
<Page1Text  post={info[0].post}  />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page1; 