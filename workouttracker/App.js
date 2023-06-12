import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as AuthProvider, Context as AuthContext} from './src/context/AuthContext';

import MainFlowNavigator from './src/navigators/MainFlowNavigator';
import LoginFlowNavigator from './src/navigators/LoginFlowNavigator';
import ResolveAuthScreen from './src/screens/Authentication/ResolveAuthScreen';
import { navigationRef } from './src/navigationRef';

export default () => {
    let Stack = createNativeStackNavigator();

    return (
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
              <Stack.Navigator>
                    <Stack.Screen name="ResolveAuthentication" component={ResolveAuthScreen} options={{ headerShown: false}}/>
                    <Stack.Screen name="MainFlow" component={MainFlowNavigator} options={{ headerShown: false}}/>
                    <Stack.Screen name="LoginFlow" component={LoginFlowNavigator} options={{ headerShown: false}}/>
              </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
}