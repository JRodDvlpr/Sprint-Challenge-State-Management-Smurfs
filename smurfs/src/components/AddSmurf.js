import React, { Component } from 'react';

//Connect
import { connect } from 'react-redux'

//Component
import { addSmurf } from '../actions'
 
// CSS UI 
import { Input } from 'antd';

class AddSmurf extends Component {

    constructor (props) {
        super(props)
        this.state = {
            age: '',
            height: '',
            name: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        alert("a new smurf has entered the vilage!")
        this.setState({
            age: '',
            name: '',
            height: '',
        })
    }

    render() {
        return (
            
            <form className="form" onSubmit={this.submitHandler}>
                <Input type="text" name='name' value={this.state.name} onChange={this.inputHandler} placeholder='Smurf Name' />
                <Input  type="number" name='age' value={this.state.age} onChange={this.inputHandler} placeholder='Smurf Age' />
                <Input type="text" name='height' value={this.state.height} onChange={this.inputHandler} placeholder='Smurf Height' />
                <button>Add Smurf</button>
            </form>
           
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf : addSmurf}) (AddSmurf)
