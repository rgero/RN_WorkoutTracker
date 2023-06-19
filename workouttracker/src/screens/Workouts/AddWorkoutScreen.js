import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, StyleSheet} from 'react-native';

import { ScreenStyles } from '../../styles/ScreenStyles';
import ExerciseForm from '../../components/Exercise/ExerciseForm';

const AddWorkoutScreen = () => {

    let todaysDate = new Date();
    const [date, setDate] = useState(todaysDate.toLocaleDateString())
    const [startTime, setStartTime] = useState(todaysDate.getTime()); // Replace this so it's a comprehendable string.
    const [endTime, setEndTime] = useState("");
    const [notes, setNotes] = useState("");
    const [exerciseList, setExerciseList] = useState([]);
    
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>
            <ExerciseForm/>
        </SafeAreaView>
    )
}

export default AddWorkoutScreen