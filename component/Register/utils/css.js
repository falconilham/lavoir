/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    buttonReset: {
        backgroundColor: '#a67c00',
        padding: 10,
        width: 100,
        borderRadius: 30,
    },
    buttonSubmit: {
        backgroundColor: '#a67c00',
        padding: 10,
        width: 100,
        borderRadius: 30,
    },
    boxButton: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: 'white',
        width: '80%',
        marginVertical: 30,
    },
    boxInput: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: 'white',
        width: '80%',
        marginBottom: 10,
    },
    boxInputDate: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%',
        marginHorizontal: 10,
        color: 'white',
        borderWidth: 1,
        marginVertical: 10,
    },
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '65%',
    },
    datePicker: {
        display: 'flex',
        width: '64%',
        borderWidth: 1,
    },
    button: {
        color: 'white',
        backgroundColor: '#DABB56',
        padding: 10,
        borderRadius: 10,
    },
    inputText: {
        borderBottomColor: '#DABB56',
        borderBottomWidth: 1,
        color: 'white',
        width: 200,
        justifyContent: 'space-between',
    },
    font: {
        color: 'white',
        textAlign: 'center',
    },
    fontLabel: {
        color: 'white',
    },
    fontLogo: {
        color: '#DABB56',
        textAlign: 'center',
    },
    errors: {
        color: '#ffdc73',
    },
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
        padding: 10,
    },
    container: {
        backgroundColor: 'black',
        borderWidth: 1,
    },
    logoImage: {
        width: 150,
        height: 150,
    },
    wrapperImage: {
        borderRadius: 90,
        padding: 10,
        overflow: 'hidden',
        alignSelf: 'center',
        marginBottom: 10,
    },
});

export default styles;
