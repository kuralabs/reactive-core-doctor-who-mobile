import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles/doctors';

class Doctors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.doctors)
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

export default Doctors