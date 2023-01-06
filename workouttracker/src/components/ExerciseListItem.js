import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';

const ExerciseListItem = ({reps, weight, id, deleteItem}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>{reps} - {weight}</Text>
            <TouchableOpacity onPress={()=> {deleteItem(id)}}>
                <FontAwesome5 name="trash" size={30} color="black" style={styles.trash}/>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    trash: {
        flex: 1,
        alignItems: "center"
    }
})

export default ExerciseListItem