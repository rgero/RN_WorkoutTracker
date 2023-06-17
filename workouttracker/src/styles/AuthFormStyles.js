import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
        width: null,
        height: null
    },
    container: {
        flex: 1,
    },
    wrapper: {
        paddingHorizontal: 15,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        backgroundColor: "transparent"
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
      iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d73352"
    },
    icon: {
        width: 20,
        height: 20,
    },
    button: {
        backgroundColor: "#d73352",
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18
    },
    forgotPasswordText: {
        color: "#FFF",
        backgroundColor: "transparent",
        textAlign: "center"
    },
    errorMessage: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
    errorView: {
        height: 40,
        marginTop: 20
    }
})