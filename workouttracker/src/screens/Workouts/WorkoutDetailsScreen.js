import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements'
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExerciseDisplayItem from '../../components/Exercise/ExerciseDisplayItem';
import Spacer from '../../components/Spacer';

const WorkoutDetailsScreen = ({route}) => {
    const workout = route.params.workout;
    setScreenOptions(`Details for ${workout.date}`);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            
            <View>
                <Text h4>Notes</Text>
                {workout.notes != "" ? (
                    <Text>{workout.notes}</Text>
                ) : ( 
                    <Text>No notes</Text>
                )}
            </View>
            <View>
                <Text h4>Start Time</Text>
                {workout.startTime != "" ? (
                    <Text>{workout.startTime}</Text>
                ) : ( 
                    <Text>No Start Time defined</Text>
                )}
            </View>
            <View>
                <Text h4>End Time</Text>
                {workout.endTime != "" ? (
                    <Text>{workout.endTime}</Text>
                ) : ( 
                    <Text>No End time defined</Text>
                )}
            </View>
            <View style={styles.inputContainer}>
                <Text h4 style={styles.title}>Exercises</Text>
                {workout.exercises.length > 0 ? (
                    <FlatList data={workout.exercises}
                        extraData={workout.exercises}
                        keyExtractor={(exercise) => {
                            return workout.exercises.findIndex((testItem) => testItem == exercise)
                        }}
                        horizontal = {false}
                        showsHorizontalScrollIndicator = {false}
                        renderItem={
                            ({item, index}) => {
                                return (
                                    <Spacer>
                                        <ExerciseDisplayItem name={item.name} muscleGroup={item.muscleGroup} setList={item.setList}/>
                                    </Spacer>
                                )
                            }
                        }
                    />
                ) : (
                    <Text>No Exercises Defined</Text>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

const setScreenOptions = (date) => {
    const navigation = useNavigation();
    const options = {
        headerShown: true, 
        title: date
    }
    navigation.setOptions(options); // This lets me set it on the screen, might be worth displaying Date?
}


export default WorkoutDetailsScreen