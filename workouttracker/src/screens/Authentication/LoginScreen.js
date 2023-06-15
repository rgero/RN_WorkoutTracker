import React, {useEffect, useContext} from 'react';
import {ImageBackground, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Context as AuthContext} from '../../context/AuthContext';
import NavLink from '../../components/NavLink';
import LoginForm from '../../components/Authentication/LoginForm';

const backgroundImage = require('../../../assets/images/dumbbells.jpg')


const LoginScreen = ({navigation}) => {
    const {state, signIn, clearErrorMessage} = useContext(AuthContext);

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
            <LoginForm onSubmit={({email, password})=> signIn({email, password})}/>
            <View style={styles.container} />
            <View style={styles.wrapper}>
                <NavLink
                    routeName="Signup"
                    text="Create New Account"
                />
            </View>
            <View style={styles.smallOffset}/>
        </ImageBackground>
    )
}

LoginScreen.navigationOptions = () => {
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
export default LoginScreen