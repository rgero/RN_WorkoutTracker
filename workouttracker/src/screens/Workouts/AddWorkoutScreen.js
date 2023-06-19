import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, StyleSheet} from 'react-native';

import { ScreenStyles } from '../../styles/ScreenStyles';

const AddWorkoutScreen = () => {

    let todaysDate = new Date();
    const [date, setDate] = useState(todaysDate.toLocaleDateString())
    const [startTime, setStartTime] = useState(todaysDate.getTime()); // Replace this so it's a comprehendable string.
    const [endTime, setEndTime] = useState("");
    const [notes, setNotes] = useState("");
    const [exerciseList, setExerciseList] = useState([]);
    
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>
            <Text>Add Workout</Text>
            <Text>Date</Text>
            <Text>{date}</Text>
            <Text>Start Time - {startTime}</Text>
            <Text>End Time</Text>
            <Text>Notes</Text>
            <Text>Exercise List (where you can add stuff)</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default AddWorkoutScreen