import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseListScreen from "./src/screens/ExerciseListScreen";
import AddExerciseScreen from "./src/screens/AddExerciseScreen";

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
                        <Stack.Screen name="ExerciseListScreen" component={ExerciseListScreen} options={{ headerShown: false}}/>
                        <Stack.Screen name="AddExerciseScreen" component={AddExerciseScreen} options={{ headerShown: true, title: "Add an Exercise"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}