import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {    Button, Text} from 'react-native-elements'
import { Alert, FlatList, StyleSheet, TextInput} from 'react-native';

import SetItem from '../Set/SetItem';
import SetListItem from '../Set/SetListItem';

const ExerciseForm = ({onSubmit}) => {
    const [setList, setSetList] = useState([]);
    const [muscleGroup, setMuscleGroup] = useState([]);
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
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeArea}>
            <TextInput value={exerciseName} placeholder="Exercise ame" 
                    onChangeText={setExerciseName}
                    style={styles.inputField}
            />
            <TextInput value={muscleGroup} placeholder="Muscle Group" 
                    onChangeText={setMuscleGroup}
                    style={styles.noteField}
            />
            <TextInput value={notes} placeholder="Notes" 
                    onChangeText={setNotes}
                    style={styles.noteField}
            />
            <SetItem onSubmit={addHandler}/>
            <FlatList data={setList}
                extraData={setList}
                keyExtractor={(exercise) => {
                    return setList.findIndex((testItem) => testItem == exercise)
                }}
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                renderItem={
                    ({item, index}) => {
                        return <SetListItem reps={item.reps} weight={item.weight} id={index} deleteItem={deleteHandler}/>
                    }
                }
            />
            <Button title="Submit Exercise" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    noteField: {
        height: 150
    }
})

export default ExerciseForm