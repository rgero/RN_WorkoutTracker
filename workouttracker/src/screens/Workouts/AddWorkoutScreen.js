import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {DeviceEventEmitter, StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ScreenStyles } from '../../styles/ScreenStyles';
import ExerciseList from '../../components/Exercise/ExerciseList';

const AddWorkoutScreen = ({navigation}) => {
    DeviceEventEmitter.addListener("event.addExercise", (eventData) => addExercise(eventData));
    DeviceEventEmitter.addListener("event.removeExercise", (eventData) => removeExercise(eventData));

    const [exerciseList, setExerciseList] = React.useState([]);

    const addExercise = ({newExercise}) => {
        setExerciseList([...exerciseList, newExercise])
    }

    const removeExercise = (index) => {
        let newExerciseList = exerciseList;
        newExerciseList.splice(index, 1);
        setExerciseList( [...newExerciseList] );
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>

            <Text>{exerciseList.length}</Text>
            <View style={{width: "100%"}}>
                <ExerciseList exerciseList={exerciseList}/>
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
                        onPress={()=> navigation.goBack()}
                        buttonStyle={{width: "75%",  borderRadius: 20}}
                    />
                </View>
            </View>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    submitRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: "75%",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});

export default AddWorkoutScreen