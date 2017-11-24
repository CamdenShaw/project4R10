import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text } from 'react-native';

class FavsContainer extends Component {
    render() {
        return (
            <Text>Favs</Text>
        );
    }
}

const mapStateToProps = state => (
    {
        favs: state.favs.favs,
        isLoading: state.favs.isLoading
    }
)
export default connect(mapStateToProps)(FavsContainer);