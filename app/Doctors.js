import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import doctorsApp from './core-module/reducers'
import DoctorsList from './containers/DoctorsList'

const store = createStore(doctorsApp)

class Doctors extends Component {
    render() {
        return (
            <Provider store={store}>
                <DoctorsList/>
            </Provider>
        );
    }
}

export default Doctors;