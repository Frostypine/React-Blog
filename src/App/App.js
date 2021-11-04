//App blog
//Route Exercise 
import './App.css';
import {  Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Routing Exercise

      <LinkIndex/>
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
    <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page1'>Page 1</Link></li>
        <li><Link to='/page2'>Page 2</Link></li>
    
      </ul>
    </nav>
  </header>

); 

}

const Home = () => { return (<p> this is home </p>); }

const Page1 = () => { return (<p>this is page 1 </p>); }
const Page2 = () => { return (<p> this is page 2 </p>); }

const Error = () => {
  return (
     <div>
        <p>Error: Page does not exist!</p>
     </div>
  );
}


