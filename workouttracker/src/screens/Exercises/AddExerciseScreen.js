import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DeviceEventEmitter, ScrollView, StyleSheet } from 'react-native';

import ExerciseForm from '../../components/Exercise/ExerciseForm';
import { Button } from 'react-native-elements';

const AddExerciseScreen = ({navigation}) => {

    const addHandler = (newExercise) => {
        DeviceEventEmitter.emit("event.addExercise", {newExercise});
        navigation.goBack();
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeArea}>
            <ScrollView>
                <ExerciseForm onSubmit={addHandler} />
                <Button title={"Cancel"} onPress={()=> navigation.goBack()}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default AddExerciseScreen