import { DeviceEventEmitter, Alert, TouchableOpacity, StyleSheet, View} from 'react-native';
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
                null
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    setCol: {
        width: "50%",
        textAlign: 'center'
    },
    setNoWeight: {
        width: "100%",
        justifyContent: 'center',
        textAlign: 'center'
    }
});