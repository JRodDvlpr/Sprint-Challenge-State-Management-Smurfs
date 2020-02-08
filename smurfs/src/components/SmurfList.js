import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'

// UI Library
import { Card } from 'antd';


class SmurfsList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            
            <div className='smurfCard'>
                { this.props.smurfs.map(smurf => 
                    <Card>
                    <h1>Name: {smurf.name}</h1> 
                    <p>Age: {smurf.age}</p>
                    <p>Size: {smurf.height}</p>
                    </Card>
                )}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({ smurfs: state.smurfs })

export default connect( mapStateToProps, { getSmurfs } )( SmurfsList )