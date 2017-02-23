import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListView, View } from 'react-native'
import { orderByName, orderByNumber, selectDoctor, showDoctorslist } from '../core-module/actions'
import Doctors from '../components/Doctors'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
    let doctors = state.doctors.doctors;

    return {
        doctors: doctors,
        doctorsDataSource: ds.cloneWithRows(doctors),
        showDoctor: state.doctors.showDoctor,
        doctor: state.doctors.doctor
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        orderByName,
        orderByNumber,
        selectDoctor,
        showDoctorslist
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);