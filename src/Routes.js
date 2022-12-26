import React from 'react';
import { Route} from 'react-router-dom';
import App from './App';
import home from './components/Home';
import Login from './components/Login';

export default(
<Route path ="/" component={App}>
    <Route path="/login" component={Login}/>
    <Route path="/home" component={home}/>
</Route>

);