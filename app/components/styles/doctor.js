import { StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    closeButton: {
        color: Colors.text.primary.light,
        fontSize: 18,
        fontWeight: 'bold'
    },
    header: {
        color: Colors.text.highlight.dark,
        fontFamily: 'FiraSans-Bold',
        fontSize: 50,
        fontWeight: 'bold'
    },
    headerWrapper: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    modal: {
        backgroundColor: Colors.background.primary,
        flex: 1,
        opacity: 0.9,
        padding: 40
    },
    title: {
        color: Colors.text.highlight.dark,
        fontFamily: 'FiraSans-Bold',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        color: Colors.text.primary.light,
        fontFamily: 'FiraSans-Light',
        fontSize: 16,
        paddingBottom: 20,
        paddingTop: 5
    },
    thumbnail: {
        height: 75,
        width: 75
    },
    toolbar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});