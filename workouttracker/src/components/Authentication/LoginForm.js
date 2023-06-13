import React, {useState} from 'react';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import AuthFormStyles from './AuthFormStyles';

const lockIcon = require("../../images/lock.png");
const emailIcon = require("../../images/email.png");

const LoginForm = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <TouchableOpacity activeOpacity={.5} onPress={() => onSubmit({email, password})}>
                    <View style={AuthFormStyles.button}>
                        <Text style={AuthFormStyles.buttonText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5}>
                    <View>
                        <Text style={AuthFormStyles.forgotPasswordText}>Forgot Password?</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={AuthFormStyles.container} />
        </>
    )
}

export default LoginForm