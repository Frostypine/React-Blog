import './Components.css';
import Article from './Article';
import PageContent from './Page1Content';
import info from './data';

const Page = () => { return (
<div className="mx-auto page page1">

 <Article 
   image={info[0].art} 
   title={info[0].title} 
   author={info[0].author} 
   art={info[0].clkImg}
   date={info[0].date} 
   />     
<PageContent  post={info[0].post}  />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page; 