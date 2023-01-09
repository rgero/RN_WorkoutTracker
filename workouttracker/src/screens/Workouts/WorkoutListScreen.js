import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements'
import { Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WorkoutDisplayItem from '../../components/Workout/WorkoutDisplayItem';
import Spacer from '../../components/Spacer';
import { dummyWorkouts } from '../../dummyData';

const WorkoutListScreen = () => {
    const navigation = useNavigation();
    const [workoutList, setWorkoutList] = useState(dummyWorkouts);

    // This should interact with a database later, but for now we're just going to store them
    // in the state, and handle it per session
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
                    setWorkoutList( (prevWorkoutList) => {
                        prevWorkoutList.splice(targetIndex, 1);
                        return [...prevWorkoutList];
                    });
                }
            }
        ])
    }

    const addHandler = (newWorkout) => {
        setWorkoutList( [...workoutList, newWorkoutList]);
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Track your Workout!</Text>
            <Spacer>
                <Button title="Add a Workout" onPress={()=> {navigation.navigate("AddWorkoutScreen", {onSubmit: addHandler})}} />
            </Spacer>
            <Spacer>
                <FlatList data={workoutList}
                    extraData={workoutList}
                    keyExtractor={(workout) => {
                        return workoutList.findIndex((testItem) => testItem == workout)
                    }}
                    horizontal = {false}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={
                        ({item, index}) => {
                            return (
                                <Spacer>
                                    <WorkoutDisplayItem date={item.date} id={index} deleteItem={deleteHandler}/>
                                </Spacer>
                            )
                        }
                    }
                />
            </Spacer>
        </SafeAreaView>
    )

}

export default WorkoutListScreen