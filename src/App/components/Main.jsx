
import {  Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageIndex from './PageIndex';
import Page from './Page';

// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';

import Error from './Error';


const Main = () => {return (
    <main>
    <Switch>
    <Route exact path='/'> 
       <Home/> 
    </Route>
    <Route  path='/about'> 
       <About/> 
    </Route>
    <Route  path='/contact'> 
       <Contact/> 
    </Route>
    <Route path='/index'> 
    <PageIndex/>

    </Route>
    <Route path='/page/:index'> 
    <Page/>
    </Route>
    {/* 
    <Route path='/page2'> 
    <Page2/>
    </Route>
    <Route path='/page3'> 
    <Page3/> 
    </Route>*/}

    <Route path='*'> 
          <Error/> 
    </Route>
  </Switch>
  </main>
      
    ) ; 
  }


  export default Main; 
  
  