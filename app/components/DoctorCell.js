import React, { Component } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

import styles from './styles/doctors'

class DoctorCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let doctor = this.props.doctor;

        return (
            <View style={styles.cell}>
                <TouchableHighlight
                    onPress={() => { this.props.onSelectDoctor(doctor) }}>
                    <View style={styles.cell}>
                        <Image
                            source={{ uri: doctor.image }}
                            style={styles.thumbnail}
                        />
                        <Text style={styles.cellTitle}>{doctor.actor}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default DoctorCell