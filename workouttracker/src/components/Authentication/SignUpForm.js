import React, {useState} from 'react';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

import AuthFormStyles from '../../styles/AuthFormStyles';

const lockIcon = require("../../../assets/images/lock.png");
const personIcon = require("../../../assets/images/person.png");
const emailIcon = require("../../../assets/images/email.png");

const SignUpForm = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRentry] = useState("")
    const [displayName, setDisplayName] = useState("");

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
                        autoCapitalize="none"
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