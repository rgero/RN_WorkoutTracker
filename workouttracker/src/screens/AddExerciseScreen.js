import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExerciseForm from '../components/Exercise/ExerciseForm';

const AddExerciseScreen = ({route}) => {
    const navigation = useNavigation();

    const addHandler = (newExercise) => {
        route.params["onSubmit"](newExercise);
        navigation.goBack();
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeArea}>
            <ExerciseForm onSubmit={addHandler}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default AddExerciseScreen