import React from 'react';
import { connect } from 'react-redux';


import {commentAction} from '../redux/actions'


class Comments extends React.Component{
    
    componentDidMount(){
        // console.log(this.props)
        this.props.commentAction(this.props.match.params.id)
        // console.log(this.props.comments)
    }
    render(){

        const renderComments=()=>{
            if(this.props.comments){
                return this.props.comments.map(comment=>{
                    return(
                        <div className="item" key={comment.id}>
                            Post Id :{comment.postId}<br/>
                            {comment.name}<br/>
                            {comment.email}
                        </div>
                    );
                })
            }
        }
        
        return(
            <div className="ui relaxed divided list">
                {renderComments()}
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return({
        comments:state.comments[ownProps.match.params.id]
    });
};

export default connect(mapStateToProps,{commentAction})(Comments);