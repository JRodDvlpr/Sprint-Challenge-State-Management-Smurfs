import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'

class SmurfsList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                { this.props.smurfs.map( smurf => smurf.name )}
            </div>
        )
    }
}

const mapStateToProps = state => ({ smurfs: state.smurfs })

export default connect( mapStateToProps, { getSmurfs } )( SmurfsList )