import { StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    cell: {
        alignItems: 'center',
        margin: 5,
        height: 180,
        width: 150,
    },
    cellTitle: {
        color: Colors.text.highlight.light,
        fontSize: 16,
        fontWeight: 'bold'
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