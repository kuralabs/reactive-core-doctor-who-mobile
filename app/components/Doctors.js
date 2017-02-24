import React, { Component } from 'react'
import { ListView, Modal, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Doctor from '../components/Doctor'
import DoctorCell from '../components/DoctorCell'

import styles from './styles/doctors'

class Doctors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.orderByNumber)
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarItemText}>{'Sort'}</Text>

                    <TouchableOpacity onPress={this.props.orderByName}>
                        <View style={styles.toolbarItem}>
                            <Icon name="sort-alpha-asc" size={20} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.orderByNumber}>
                        <View style={styles.toolbarItem}>
                            <Icon name="sort-numeric-asc" size={20} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
                </View>
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
                    onRequestClose={this.props.showDoctorslist}
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