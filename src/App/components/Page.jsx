import './Components.css';
import Article from './Article';
import PageContent from './PageContent';
import info from './data';

const Page = (int) => { return (
<div className="mx-auto page page1">

 <Article 
   image={info[int].art} 
   title={info[int].title} 
   author={info[int].author} 
   art={info[int].clkImg}
   date={info[int].date} 
   />     
<PageContent  
post={info[int].post} 
post={info[int].text} 
/>

    <br/><br/><br/><br/>
    </div>);
 }

export default Page; 