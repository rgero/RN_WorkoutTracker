import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text} from 'react-native-elements'
import { Alert, FlatList, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExerciseForm from '../components/ExerciseForm';

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