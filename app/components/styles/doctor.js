import { StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    closeButton: {
        color: Colors.text.primary.light,
        fontSize: 18,
        fontWeight: 'bold'
    },
    modal: {
        backgroundColor: Colors.background.dark,
        flex: 1,
        opacity: 0.9,
        padding: 40
    },
    title: {
        color: Colors.text.highlight.dark,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        color: Colors.text.primary.light,
        fontSize: 16,
        paddingBottom: 20,
        paddingTop: 5
    },
    toolbar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});