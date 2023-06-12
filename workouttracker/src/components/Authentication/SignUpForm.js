import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

import Spacer from '../Spacer'

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
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input label="E-mail" 
                autoCapitalize='none'
                autoCorrect={false}
                value={email} 
                onChangeText={setEmail}
            />
            <Spacer/>
            <Input label="Display Name" 
                autoCapitalize='none'
                autoCorrect={false}
                value={displayName} 
                onChangeText={setDisplayName}
            />
            <Spacer/>
            <Input label="Enter password"
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password} 
                    onChangeText={setPassword}
            />
            <Spacer/>
            <Input label="Re-enter password"
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={passwordRetype} 
                    onChangeText={setPasswordRentry}
            />
            {errMsg ? (
                <Text h4>{errMsg}</Text>
            ): null}
            <Spacer>
                <Button title={buttonText} onPress={validateForm}/>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
})

export default SignUpForm