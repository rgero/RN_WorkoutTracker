import React, {useState} from 'react';
import { Button, Text } from 'react-native-elements'
import { Alert, ScrollView, StyleSheet, TextInput, View} from 'react-native';

import Spacer from '../Spacer';

import SetList from '../Set/SetList';
import SetForm from '../Set/SetForm';

const ExerciseForm = ({onSubmit}) => {
    const [setList, setSetList] = useState([]);
    const [muscleGroup, setMuscleGroup] = useState("");
    const [exerciseName, setExerciseName] = useState("")
    const [notes, setNotes] = useState("");

    const deleteHandler = (targetIndex) => {
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
                    console.log(`Delete Pressed for index ${targetIndex}`)
                    setSetList( (prevSetList) => {
                        prevSetList.splice(targetIndex, 1);
                        return [...prevSetList];
                    });
                }
            }
        ])
    }

    const addHandler = ({reps, weight}) => {
        setSetList( [...setList, {reps, weight}]);
    }

    const handleSubmit = () => {
        const newExercise = {
            name: exerciseName,
            muscleGroup,
            notes,
            setList
        };
        onSubmit(newExercise);
    }

    return (
        <ScrollView style={styles.safeArea} keyboardShouldPersistTaps='handled'>
            <View style={styles.inputContainer}>
                <Text h4>Name</Text>
                <TextInput value={exerciseName} placeholder="Exercise Name" 
                        onChangeText={setExerciseName}
                        style={styles.inputField}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text h4 style={styles.title}>Muscle Group</Text>
                <TextInput value={muscleGroup} placeholder="Muscle Group" 
                        onChangeText={setMuscleGroup}
                        style={styles.inputField}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text h4 style={styles.title}>Notes</Text>
                <TextInput value={notes} placeholder="Notes" 
                        onChangeText={setNotes}
                        style={styles.noteField}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text h4 style={styles.title}>Sets</Text>
                <SetForm onSubmit={addHandler}/>
                <SetList setList={setList} deleteHandler={deleteHandler}/>
            </View>
            <Button title="Submit Exercise" onPress={handleSubmit} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "grey",
        padding: 20,
        fontSize: 20,
    },
    noteField: {
        height: 150,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "grey",
        fontSize: 20
    },
    safeArea: {
        paddingHorizontal: 15
    },
    title: {
        paddingTop: 20
    }
})

export default ExerciseForm