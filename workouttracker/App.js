import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExerciseListScreen from "./src/screens/Exercises/ExerciseListScreen";
import AddExerciseScreen from "./src/screens/Exercises/AddExerciseScreen";
import WorkoutListScreen from "./src/screens/Workouts/WorkoutListScreen";
import AddWorkoutScreen from "./src/screens/Workouts/AddWorkoutScreen";

export default () => {
    let Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        backgroundColor: "#c9c1a9"
                    }
                }}
            >
                        <Stack.Screen name="WorkoutListScreen" component={WorkoutListScreen} options={{ headerShown: false}}/>
                        <Stack.Screen name="AddWorkoutScreen" component={AddWorkoutScreen} options={{ headerShown: true, title: "Add a Workout"}}/>
                        <Stack.Screen name="ExerciseListScreen" component={ExerciseListScreen} options={{ headerShown: false}}/>
                        <Stack.Screen name="AddExerciseScreen" component={AddExerciseScreen} options={{ headerShown: true, title: "Add an Exercise"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}