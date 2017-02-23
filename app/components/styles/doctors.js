import { StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    cell: {
        alignItems: 'center',
        margin: 10,
        width: 100,
        height: 100
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
    thumbnail: {
        height: 100,
        width: 100
    }
});