import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import styles from './styles/doctor'

class Doctor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let doctor = this.props.doctor;

        return (
            <View style={styles.modal}>
                <View>
                    <Text style={styles.title}>{'Who Played Him:'}</Text>
                    <Text style={styles.text}>{doctor.actor}</Text>
                    <Text style={styles.title}>{'When:'}</Text>
                    <Text style={styles.text}>{doctor.when}</Text>
                    <Text style={styles.title}>{'Memorable Gadget/Item of Clothing:'}</Text>
                    <Text style={styles.text}>{doctor.gadget}</Text>
                    <Text style={styles.title}>{'Reason for Regeneration:'}</Text>
                    <Text style={styles.text}>{doctor.regeneration}</Text>
                    <Text style={styles.title}>{'Three Recommended Stories:'}</Text>
                    <Text style={styles.text}>{doctor.stories}</Text>
                    <Text style={styles.text}>{doctor.description}</Text>
                </View>
            </View>
        )
    }
}

export default Doctor