import React, { Component } from 'react'
import { ListView, View } from 'react-native'

import DoctorCell from '../components/DoctorCell'

import styles from './styles/doctors'

class Doctors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.grid}
                    dataSource={this.props.doctorsDataSource}
                    renderRow={
                        (doctor) => {
                            return (
                                <DoctorCell
                                    doctor={doctor}
                                    onSelectDoctor={this.props.selectDoctor}
                                />
                            )
                        }
                    }
                />
            </View>
        )
    }
}

export default Doctors