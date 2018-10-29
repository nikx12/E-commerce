import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Reducers/Store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path = "/" component = {App} />
            {/* <Route path = "/" component = {ImageSlider} /> */}
        </div>
 </BrowserRouter>
</Provider> , document.getElementById('root'));

registerServiceWorker();
