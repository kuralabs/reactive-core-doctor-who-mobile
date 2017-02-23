import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    getDoctors, orderByName, orderByNumber, selectDoctor
} from '../core-module/actions'
import Doctors from '../components/Doctors'

const mapStateToProps = (state) => {
    return state.doctors
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDoctors,
        orderByName,
        orderByNumber,
        selectDoctor
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);