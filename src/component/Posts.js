import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {postAction} from '../redux/actions';

class Posts extends React.Component{
    componentDidMount(){
        this.props.postAction();
    }

    render(){
        const renderPosts=this.props.posts.map(post=>{
                return(
                    <div className="item" key={post.id}> 
                        <Link to={`/posts/${post.id}/comments`} style={{color:'black'}}>
                            <div>
                                {post.title}<br/>
                                Post Id : {post.id}
                            </div>
                        </Link>
                    </div>
                );
        });

        return(
            <div className="ui relaxed divided list">{renderPosts}</div>
        )
    }
}

const mapStateToProps=(state)=>{

    return({
        posts:state.posts
    });
}

export default connect(mapStateToProps,{postAction})(Posts);