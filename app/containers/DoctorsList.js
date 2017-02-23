import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListView, View } from 'react-native'
import { orderByName, orderByNumber, selectDoctor } from '../core-module/actions'
import Doctors from '../components/Doctors'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
    let doctors = state.doctors.doctors;

    return {
        doctors: doctors,
        doctorsDataSource: ds.cloneWithRows(doctors)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        orderByName,
        orderByNumber,
        selectDoctor
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);