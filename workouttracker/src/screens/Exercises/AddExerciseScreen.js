import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DeviceEventEmitter, StyleSheet } from 'react-native';

import ExerciseForm from '../../components/Exercise/ExerciseForm';
import { Button } from 'react-native-elements';

const AddExerciseScreen = ({navigation, route}) => {

    const addHandler = (newExercise) => {
        DeviceEventEmitter.emit("event.addExercise", {newExercise});
        navigation.goBack(null);
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeArea}>
            <ExerciseForm onSubmit={addHandler} />
            <Button title={"Cancel"} onPress={()=> navigation.goBack()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default AddExerciseScreen