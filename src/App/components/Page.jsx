//Page.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import ArticleHeader from './ArticleHeader';
//import Page1Content from '../../../rnd/Page1Content';
import PageContent from './PageContent';
import Comments from './Comments'; 

//import info from './data';

const Page = () => { 
   

return (
<div className="mx-auto page page1">

 <ArticleHeader  />     
 {/*  <Page1Content 
post={info[0].body} 
text={info[0].text} 
/>*/}
<PageContent />
<Comments />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page; 