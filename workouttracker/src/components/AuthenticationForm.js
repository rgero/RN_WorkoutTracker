import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

import Spacer from './Spacer'


const AuthenticationForm = ({headerText, errorMessage, buttonText, onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <Input label="Password"
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password} 
                    onChangeText={setPassword}
            />
            {errorMessage ? (
                <Text h4>{errorMessage}</Text>
            ): null}
            <Spacer>
                <Button title={buttonText} onPress={()=> onSubmit({email, password})}/>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
})

export default AuthenticationForm