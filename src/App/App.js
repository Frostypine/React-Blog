//App blog
import './App.css';
import {  Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LinkIndex/>
       <b> Blog</b>
      </header>

      <Main/>
      
        
    </div>
  );
}

export default App;
 
const Main = () => {return (
  <main>
  <Switch>
  <Route exact path='/'> 
     <Home/> 
  </Route>
  <Route exact path='/about'> 
     <About/> 
  </Route>
  <Route exact path='/contact'> 
     <Contact/> 
  </Route>
  <Route path='/index'> 
  <Index/>
  </Route>
  <Route path='/page1'> 
  <Page1/>
  </Route>
  <Route path='/page2'> 
  <Page2/>
  </Route>
  <Route path='*'> 
        <Error/> 
  </Route>
</Switch>
</main>
    
  ) ; 
}


 
const LinkIndex = () => { return (
    <header className= " linkIndex">
    <nav>
     
      <Link to='/'>Home|</Link>
      <Link to='/about'>About|</Link>
      <Link to='/contact'>Contact|</Link>
      <Link to='/index'>Index</Link>
     
    </nav>
  </header>

); 

}

const Home = () => { return (<p> this is home </p>); }
const About = () => { return (<p> this is about </p>); }
const Contact = () => { return (<p> this is contact </p>); }


const Page1 = () => { return (<p>this is blog page 1 </p>); }
const Page2 = () => { return (<p> this is blog page 2 </p>); }

const Index = () => { return(
    <nav>
    <Link to='/page1'>page 1|</Link>
   <Link to='/page2'>Page 2|</Link>
   </nav>
   );
  
}

const Error = () => {
  return (
     <div>
        <p>Error: Page does not exist!</p>
     </div>
  );
}


