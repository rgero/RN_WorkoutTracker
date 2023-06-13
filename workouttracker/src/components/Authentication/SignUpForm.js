import React, {useState} from 'react';
import {Image, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

const lockIcon = require("../../images/lock.png");
const personIcon = require("../../images/person.png");
const emailIcon = require("../../images/email.png");

const SignUpForm = ({headerText, errorMessage, buttonText, onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRentry] = useState("")
    const [displayName, setDisplayName] = useState("");
    const [errMsg, setError] = useState(errorMessage ? errorMessage : "");

    const validateForm = (e) => {
        e.preventDefault();
        if (email === "" || password === "" || displayName === "" || passwordRetype === "")
        {
            setError("Please fill out the form");
        }

        onSubmit({email, displayName, password});
    }

    return (
        <>
            <View style={styles.container} />
            <View style={styles.wrapper}>
                <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                    <Image
                        source={emailIcon}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                    </View>
                    <TextInput
                        placeholder="E-Mail"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                    <Image
                        source={personIcon}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                    </View>
                    <TextInput
                        placeholder="Display Name"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={displayName}
                        onChangeText={setDisplayName}
                    />
                </View>

                <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                        <Image
                                source={lockIcon}
                                style={styles.icon}
                                resizeMode="contain"
                        />
                    </View>
                    <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            value={password}
                            onChangeText={setPassword}
                    />
                </View>

                <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                        <Image
                                source={lockIcon}
                                style={styles.icon}
                                resizeMode="contain"
                        />
                    </View>
                    <TextInput
                            placeholder="Re-enter Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            value={passwordRetype}
                            onChangeText={setPasswordRentry}
                    />
                </View>
                <TouchableOpacity activeOpacity={.5} onPress={() => onSubmit({email, displayName, password})}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
    }
})
export default SignUpForm