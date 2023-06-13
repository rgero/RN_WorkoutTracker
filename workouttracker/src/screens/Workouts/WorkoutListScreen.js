import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements'
import { Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WorkoutDisplayItem from '../../components/Workout/WorkoutDisplayItem';
import Spacer from '../../components/Spacer';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { SortWorkoutList } from '../../components/helpers/WorkoutListSorter';

const WorkoutListScreen = () => {
    const navigation = useNavigation();

    const {state, clearWorkouts, fetchWorkouts} = React.useContext(WorkoutContext);
    const [isLoaded, setLoaded] = React.useState(false);

    React.useEffect(()=> {
        const processWorkouts = async () => {
            if (!isLoaded)
            {
                await fetchWorkouts();
                setLoaded(true);
            }
        }
        processWorkouts();
    }, [fetchWorkouts, isLoaded]);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Track your Workout!</Text>
            <Spacer>
                <Button title="Add a Workout" onPress={()=> {navigation.navigate("AddWorkoutScreen", {onSubmit: addHandler})}} />
            </Spacer>
            <Spacer>
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
                                <Spacer>
                                    <WorkoutDisplayItem workout={item}/>
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