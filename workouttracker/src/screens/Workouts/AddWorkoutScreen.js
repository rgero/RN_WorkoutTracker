import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Simplest screen to use.

const AddWorkoutScreen = () => {
    return (
        <View>
            <Text>Add Workout</Text>
            <Text>Date</Text>
            <Text>Start Time</Text>
            <Text>End Time</Text>
            <Text>Notes</Text>
            <Text>Exercise List (where you can add stuff)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default AddWorkoutScreen