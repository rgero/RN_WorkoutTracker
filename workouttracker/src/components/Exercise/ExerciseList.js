import { DeviceEventEmitter, Alert, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default ExerciseList = ({exerciseList}) => {

    const deleteHandler = (index) => {
        Alert.alert('Delete', "Are you sure you wish to delete this item?", [
            {
                text: "Cancel",
                onPress: () => {
                    console.log('Cancel Pressed');
                }
            },
            {
                text: "Ok",
                onPress: () => {
                    console.log(`Delete Pressed for index ${index}`)
                    DeviceEventEmitter.emit("event.removeExercise", {index});
                }
            }
        ])
    }

    return (
        <View>
            { exerciseList.length == 0 ? (
                <Text>There are no exercises defined</Text>
            ) : (
                <>   
                    { exerciseList.map( (exercise, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={()=> deleteHandler(index)}>
                                <ExerciseItem currentExercise={exercise}/>
                            </TouchableOpacity>
                        )
                    })}
                </>
            )}
        </View>
    )
}