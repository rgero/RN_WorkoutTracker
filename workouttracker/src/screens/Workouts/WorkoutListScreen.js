import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements'
import { FlatList } from 'react-native';

import WorkoutDisplayItem from '../../components/Workout/WorkoutDisplayItem';
import Spacer from '../../components/Spacer';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { SortWorkoutList } from '../../components/helpers/WorkoutListSorter';
import { ScreenStyles } from '../../styles/ScreenStyles';

const WorkoutListScreen = ({navigation}) => {
    const {state, fetchWorkouts} = React.useContext(WorkoutContext);
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

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={ScreenStyles.viewport}>
        { isLoaded ? (
            <>
                <Text h2>Track your Workout!</Text>
                <Spacer>
                    <Button title="Add a Workout" onPress={()=> {navigation.navigate("CreateWorkout", {screen: "Add Workout"})}} />
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
            </>
            ) : ( null )}
        </SafeAreaView>
    )

}

export default WorkoutListScreen