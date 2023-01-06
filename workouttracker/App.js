import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseScreen from "./src/screens/ExerciseScreen";

export default () => {
    let Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        backgroundColor: "#EEE"
                    }
                }}
            >
                        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}