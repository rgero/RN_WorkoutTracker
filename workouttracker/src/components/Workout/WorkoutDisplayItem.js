import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const WorkoutDisplayItem = ({date}) => {

    const displayWorkout = () => {
        console.log(date);
    }

    return (
        <TouchableOpacity onPress={displayWorkout} style={styles.displayItem}>
            <Text>{date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    displayItem: {
        borderWidth: 1,
        padding: 10
    }
})

export default WorkoutDisplayItem