import { StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    cell: {
        alignItems: 'center',
        margin: 5,
        width: 150,
        height: 150
    },
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        paddingTop: 40
    },
    grid: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modal: {
        backgroundColor: Colors.background.dark,
        flex: 1,
        opacity: 0.9
    },
    thumbnail: {
        height: 150,
        width: 150
    }
});