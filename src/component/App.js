import React from 'react'
import { Link } from 'react-router-dom';

const App =()=>{
        return(
            <div>
                <Link className="ui primary button" to="/posts">Posts</Link>
                <Link className="ui primary button" to="/marketing">MarketingData</Link>
            </div>
        );
    
}

export default App;