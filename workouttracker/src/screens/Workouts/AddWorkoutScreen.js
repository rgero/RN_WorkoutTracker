import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, Text } from 'react-native-elements';
import moment from 'moment';
import {DeviceEventEmitter, ScrollView, StyleSheet, TextInput, View} from 'react-native';

import { ScreenStyles } from '../../styles/ScreenStyles';
import ExerciseList from '../../components/Exercise/ExerciseList';
import {Context as WorkoutContext} from '../../context/WorkoutContext';

const AddWorkoutScreen = ({navigation}) => {
    DeviceEventEmitter.addListener("event.addExercise", (eventData) => addExercise(eventData));
    DeviceEventEmitter.addListener("event.removeExercise", (eventData) => removeExercise(eventData));

    const [exerciseList, setExerciseList] = React.useState([]);
    const [workoutDate, setWorkoutDate] = React.useState( new moment().format("YYYY-MM-DD"));
    const [notes, setNotes] = React.useState("");

    const {createWorkout} = React.useContext(WorkoutContext);

    const addExercise = ({newExercise}) => {
        setExerciseList([...exerciseList, newExercise])
    }

    const removeExercise = (index) => {
        let newExerciseList = exerciseList;
        newExerciseList.splice(index, 1);
        setExerciseList( [...newExerciseList] );
    }

    const processWorkout = () => {
        let newWorkout = {
            workoutDate: workoutDate,
            notes: notes,
            exerciseList: exerciseList
        }

        createWorkout(newWorkout);
        navigation.navigate('Drawer', {screen: "ViewWorkouts"});
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text h4 style={styles.title}>Workout Date</Text>
                    <TextInput value={workoutDate} placeholder="Workout Date" 
                            onChangeText={setWorkoutDate}
                            style={styles.inputField}
                            editable={false}
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
                    <Text h4 style={styles.title}>Exercise List</Text>
                    <ExerciseList exerciseList={exerciseList} style={{paddingBottom: 10}}/>
                </View>
                <Button title={"Create Exercise"} onPress={() => {navigation.navigate("CreateWorkout", {screen: "AddExercise"})}}/>
                <View style={styles.submitRow}>
                    <View>
                        <Button 
                            title={"Cancel"} 
                            onPress={()=> navigation.goBack()}
                            buttonStyle={{width: "75%", backgroundColor: "red", borderRadius: 20}}
                        />
                    </View>
                    <View>
                        <Button 
                            title={"Submit"} 
                            icon={
                                <Icon
                                name="save"
                                size={25}
                                color="white"
                                />
                            }
                            onPress={processWorkout}
                            buttonStyle={{width: "75%",  borderRadius: 20}}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    submitRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: "75%",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    inputField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    inputContainer: {
        paddingBottom: 15
    }

});


export default AddWorkoutScreen