import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const WorkoutDisplayItem = ({date, id, deleteItem}) => {

    const displayWorkout = () => {
        console.log(date);
    }

    return (
        <TouchableOpacity onPress={displayWorkout} style={styles.displayItem}>
            <Text>{date}</Text>
            <TouchableOpacity onPress={()=> {deleteItem(id)}}>
                <FontAwesome5 name="trash" size={30} color="black" style={styles.trash}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    displayItem: {
        borderWidth: 1,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export default WorkoutDisplayItem