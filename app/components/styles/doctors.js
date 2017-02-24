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
        backgroundColor: Colors.background.ligth,
        flex: 1,
        marginTop: 20,
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
    },
    toolbar: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: Colors.background.light,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center'
    },
    toolbarItem: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    toolbarItemText: {
        color: Colors.text.primary.light,
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10
    }
});