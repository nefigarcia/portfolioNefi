import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {InfoProvider} from './components/context';

/*ready(()=>{
    window.app=new App();
    window.app.init();
});*/
ReactDOM.render(
<InfoProvider>
<Router>
    <App/>
</Router>
</InfoProvider>,
document.getElementById('root')
);
serviceWorker.unregister();