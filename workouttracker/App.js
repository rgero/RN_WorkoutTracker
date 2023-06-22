import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as AuthProvider, Context as AuthContext} from './src/context/AuthContext';
import { Provider as WorkoutProvider, Context as WorkoutContext} from './src/context/WorkoutContext';

import AuthenticatedNavigator from './src/navigators/AuthenticatedNavigator';
import LoginFlowNavigator from './src/navigators/LoginFlowNavigator';
import ResolveAuthScreen from './src/screens/Authentication/ResolveAuthScreen';
import WorkoutNavigator from './src/navigators/WorkoutNavigator';

import { navigationRef } from './src/navigationRef';

export default () => {
    let Stack = createNativeStackNavigator();

    return (
        <AuthProvider>
            <WorkoutProvider>
                <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                        <Stack.Screen name="ResolveAuthentication" component={ResolveAuthScreen} options={{ headerShown: false}}/>
                        <Stack.Screen name="AuthenticatedFlow" component={AuthenticatedNavigator} options={{ headerShown: false}}/>
                        <Stack.Screen name="LoginFlow" component={LoginFlowNavigator} options={{ headerShown: false}}/>
                        <Stack.Screen name="WorkoutFlow" component={WorkoutNavigator} options={{ headerShown: false}}/>
                </Stack.Navigator>
                </NavigationContainer>
            </WorkoutProvider>
        </AuthProvider>
    )
}