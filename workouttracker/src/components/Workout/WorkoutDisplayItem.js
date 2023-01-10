import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WorkoutDisplayItem = ({workout, deleteItem}) => {
    const navigation = useNavigation();

    const displayWorkout = () => {
        navigation.navigate("WorkoutDetails", {workout});
    }

    return (
        <TouchableOpacity onPress={displayWorkout} style={styles.displayItem}>
            <Text>{workout.date}</Text>
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