import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {Context as AuthContext} from '../../context/AuthContext';
import AuthenticationForm from '../../components/AuthenticationForm';
import NavLink from '../../components/NavLink';

const SignUpScreen = ({navigation}) => {
    const {state, signUp, clearErrorMessage} = useContext(AuthContext);

    useEffect(() => {
        const clearError = navigation.addListener('focus', () => {
            clearErrorMessage();
        });
    
        return clearError;
    }, [navigation]);

    return (
        <View style={styles.signUp}>
            <AuthenticationForm 
                headerText="Sign Up for Tracker!" 
                buttonText="Sign Up!" 
                errorMessage={state.errorMessage} 
                onSubmit={({email, password})=> signUp({email, password})}
            />
            <NavLink
                routeName="Login"
                text="Already have an account? Sign in instead!"
            />
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    signUp: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
})

export default SignUpScreen