import React from 'react'
import {Container} from '@material-ui/core'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from '../src/components/navBar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'



export default function App() {

 
    return (
        <div>
         <BrowserRouter>
           <Container maxWidth="lg">
              <Navbar/>
              <Switch>
                  <Route path ="/" exact component={Home} />
                  <Route path ="/auth" exact component={Auth} />
              </Switch>
            </Container>
         </BrowserRouter>
         
        </div>
    )
}