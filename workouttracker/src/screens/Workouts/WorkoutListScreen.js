import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements'
import { Alert, FlatList } from 'react-native';

import WorkoutDisplayItem from '../../components/Workout/WorkoutDisplayItem';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { SortWorkoutList } from '../../components/helpers/WorkoutListSorter';
import { ScreenStyles } from '../../styles/ScreenStyles';

const WorkoutListScreen = ({navigation}) => {
    const {state, deleteWorkout, fetchWorkouts} = React.useContext(WorkoutContext);
    const [isLoaded, setLoaded] = React.useState(false);

    React.useEffect(()=> {
        const processWorkouts = async () => {
            if (!isLoaded)
            {
                await fetchWorkouts();  
                setLoaded(true);
            }
        }
        navigation.addListener('focus', async () => {
            setLoaded(false);
            await processWorkouts();
        });
    }, [isLoaded]);

    const deleteItem = async (id) => {
        Alert.alert('Delete', "Are you sure you wish to delete this item?", [
            {
                text: "Cancel",
                onPress: () => {
                    console.log('Cancel Pressed');
                }
            },
            {
                text: "Ok",
                onPress: async () => {
                    console.log(`Delete Pressed for index ${id}`)
                    await deleteWorkout(id)
                }
            }
        ])
    }

    const getHeader = () => {
        return (
            <>
                <Text h2>Track your Workout!</Text>
                <Button title="Add a Workout" onPress={()=> {navigation.navigate("CreateWorkout", {screen: "Add Workout"})}} />
            </>
        )
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>
        { isLoaded ? (
            <>
                    <FlatList data={SortWorkoutList(state)}
                        extraData={state}
                        keyExtractor={(workout) => {
                            return state.findIndex((testItem) => testItem == workout)
                        }}
                        horizontal = {false}
                        showsHorizontalScrollIndicator = {false}
                        renderItem={
                            ({item, index}) => {
                                return (
                                    <WorkoutDisplayItem workout={item} deleteItem={deleteItem}/>
                                )
                            }
                        }
                        ListHeaderComponent={getHeader}
                    />
            </>
            ) : ( null )}
        </SafeAreaView>
    )

}

export default WorkoutListScreen