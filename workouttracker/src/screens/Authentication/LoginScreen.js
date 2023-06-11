import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {Context as AuthContext} from '../../context/AuthContext';
import AuthenticationForm from '../../components/AuthenticationForm';
import NavLink from '../../components/NavLink';

const LoginScreen = ({navigation}) => {
    const {state, signIn, clearErrorMessage} = useContext(AuthContext);

    useEffect(() => {
        const clearError = navigation.addListener('focus', () => {
            clearErrorMessage();
        });
    
        return clearError;
      }, [navigation]);

    return (
        <View style={styles.signIn}>
            <AuthenticationForm 
                headerText="Sign In to Tracker!" 
                buttonText="Sign In!" 
                errorMessage={state.errorMessage} 
                onSubmit={({email, password})=> signIn({email, password})}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign Up for one"
            />
        </View>
    )
}

LoginScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    signIn: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
})
export default LoginScreen