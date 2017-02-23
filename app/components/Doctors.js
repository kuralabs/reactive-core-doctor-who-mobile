import React, { Component } from 'react'
import { ListView, Modal, Text, TouchableHighlight, View } from 'react-native'

import Doctor from '../components/Doctor'
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

                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.showDoctor}
                >
                    <Doctor
                        doctor={this.props.doctor}
                        closeModal={this.props.showDoctorslist}
                    />
                </Modal>
            </View>
        )
    }
}

export default Doctors