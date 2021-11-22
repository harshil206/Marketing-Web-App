import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import App from './component/App';
import Comments from './component/Comments';
import Posts from './component/Posts';
import MarketingForm from './component/MarketingForm';

const Navigator=()=>{
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={App}/>
                    <Route path="/posts" exact component={Posts}></Route>
                    <Route path="/posts/:id/comments" exact component={Comments}></Route>
                    <Route path="/marketing" exact component={MarketingForm}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Navigator;