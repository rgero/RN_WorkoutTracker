import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AddWorkoutScreen = () => {

    let todaysDate = new Date();
    const [date, setDate] = useState(todaysDate.toLocaleDateString())
    const [startTime, setStartTime] = useState(todaysDate.getTime()); // Replace this so it's a comprehendable string.
    const [endTime, setEndTime] = useState("");
    const [notes, setNotes] = useState("");
    const [exerciseList, setExerciseList] = useState([]);
    
    return (
        <View>
            <Text>Add Workout</Text>
            <Text>Date</Text>
            <Text>{date}</Text>
            <Text>Start Time - {startTime}</Text>
            <Text>End Time</Text>
            <Text>Notes</Text>
            <Text>Exercise List (where you can add stuff)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default AddWorkoutScreen