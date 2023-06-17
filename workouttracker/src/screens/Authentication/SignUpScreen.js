import React, {useEffect, useContext} from 'react';
import {ImageBackground, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import AuthFormStyles from '../../styles/AuthFormStyles';

import {Context as AuthContext} from '../../context/AuthContext';
import NavLink from '../../components/NavLink';
import SignUpForm from '../../components/Authentication/SignUpForm';

const backgroundImage = require('../../../assets/images/dumbbells.jpg')

const SignUpScreen = ({navigation}) => {
    const {state, signUp, clearErrorMessage} = useContext(AuthContext);

    useEffect(() => {
        const clearError = navigation.addListener('focus', () => {
            clearErrorMessage();
        });
    
        return clearError;
    }, [navigation]);

    return (
        <ImageBackground 
            style={[styles.background, styles.container]} 
            source={backgroundImage}
            resizeMode="cover"
            opacity="0.75"
        >
            <View style={styles.container} />
            <SignUpForm 
                errorMessage={state.errorMessage} 
                onSubmit={({email, displayName, password})=> signUp({email, displayName, password})}
            />
            <View style={styles.container} />
            <View style={AuthFormStyles.errorView}>
                {state.errorMessage ? (
                    <Text style={AuthFormStyles.errorMessage}>Error! Sign-Up Failed</Text>
                ) : ( <Text></Text> )
                }
            </View>
            <View style={styles.container} />
            <View style={styles.wrapper}>
                <NavLink
                    routeName="Login"
                    text="Already have an account? Sign in instead!"
                />
            </View>
            <View style={styles.smallOffset}/>
        </ImageBackground>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

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
    smallOffset: {
        height: 60
    }
})

export default SignUpScreen