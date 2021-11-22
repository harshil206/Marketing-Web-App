import React from "react";
import { connect } from "react-redux";
import {textChange, onFormSubmit} from '../redux/actions/index'


class Marketing extends React.Component {

    onChange = (label, value) => {
        const processedValue = value.target.value
        this.props.dispatch(textChange(processedValue, label));
    } 

    onClick = (e) => {
        e.preventDefault()
        onFormSubmit(this.props.client)
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <div className="ui header">Clients Regestration</div>
               <form className="ui form item">
                   Client Id <input placeholder="1" onChange={this.onChange.bind(this, "clientNo")}/> <br/>
                   Name <input placeholder="Enter name" onChange={this.onChange.bind(this, "name")}/> <br/>
                   address1 <input placeholder="Enter Add" onChange={this.onChange.bind(this, "address1")}/> <br/>
                   address2 <input placeholder="Enter Add" onChange={this.onChange.bind(this, "address2")}/> <br/>
                   city <input placeholder="Enter City" onChange={this.onChange.bind(this, "city")}/> <br/>
                   pincode <input placeholder="Enter pincode" onChange={this.onChange.bind(this, "pincode")}/> <br/>
                   state <input placeholder="Enter State" onChange={this.onChange.bind(this, "state")}/> <br/>
                   bal_due <input placeholder="Enter BalanceDue" onChange={this.onChange.bind(this, "balanceDue")}/><br/><br/>
                   <button className="ui primary button" onClick={this.onClick}>Submit</button>
               </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        client: state.marketing.client
    }
}


export default connect(mapStateToProps)(Marketing);