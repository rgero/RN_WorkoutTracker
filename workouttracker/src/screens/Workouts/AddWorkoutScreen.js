import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {DeviceEventEmitter} from 'react-native';

import { Button } from 'react-native-elements';

import { ScreenStyles } from '../../styles/ScreenStyles';

const AddWorkoutScreen = ({navigation}) => {

    DeviceEventEmitter.addListener("event.addExercise", (eventData) => addExercise(eventData));

    const addExercise = () => {
        console.log("lol");
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>
            <Button title={"Create Exercise"} onPress={() => {navigation.navigate("CreateWorkout", {screen: "AddExercise"})}}/>
            <Button title={"Cancel"} onPress={()=> navigation.goBack()}/>
        </SafeAreaView>
    )
}

export default AddWorkoutScreen