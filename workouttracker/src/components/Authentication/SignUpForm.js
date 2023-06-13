import React, {useState} from 'react';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import AuthFormStyles from './AuthFormStyles';

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
            <View style={AuthFormStyles.container} />
            <View style={AuthFormStyles.wrapper}>
                <View style={AuthFormStyles.inputWrap}>
                    <View style={AuthFormStyles.iconWrap}>
                    <Image
                        source={emailIcon}
                        style={AuthFormStyles.icon}
                        resizeMode="contain"
                    />
                    </View>
                    <TextInput
                        placeholder="E-Mail"
                        style={AuthFormStyles.input}
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={AuthFormStyles.inputWrap}>
                    <View style={AuthFormStyles.iconWrap}>
                    <Image
                        source={personIcon}
                        style={AuthFormStyles.icon}
                        resizeMode="contain"
                    />
                    </View>
                    <TextInput
                        placeholder="Display Name"
                        style={AuthFormStyles.input}
                        underlineColorAndroid="transparent"
                        value={displayName}
                        onChangeText={setDisplayName}
                    />
                </View>

                <View style={AuthFormStyles.inputWrap}>
                    <View style={AuthFormStyles.iconWrap}>
                        <Image
                                source={lockIcon}
                                style={AuthFormStyles.icon}
                                resizeMode="contain"
                        />
                    </View>
                    <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={AuthFormStyles.input}
                            underlineColorAndroid="transparent"
                            value={password}
                            onChangeText={setPassword}
                    />
                </View>

                <View style={AuthFormStyles.inputWrap}>
                    <View style={AuthFormStyles.iconWrap}>
                        <Image
                                source={lockIcon}
                                style={AuthFormStyles.icon}
                                resizeMode="contain"
                        />
                    </View>
                    <TextInput
                            placeholder="Re-enter Password"
                            secureTextEntry
                            style={AuthFormStyles.input}
                            underlineColorAndroid="transparent"
                            value={passwordRetype}
                            onChangeText={setPasswordRentry}
                    />
                </View>
                <TouchableOpacity activeOpacity={.5} onPress={() => onSubmit({email, displayName, password})}>
                        <View style={AuthFormStyles.button}>
                            <Text style={AuthFormStyles.buttonText}>Sign Up</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SignUpForm