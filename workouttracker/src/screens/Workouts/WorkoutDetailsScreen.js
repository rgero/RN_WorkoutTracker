import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements'
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DateFormatter from '../../components/helpers/DateFormatter';

import ExerciseDisplayItem from '../../components/Exercise/ExerciseDisplayItem';
import Spacer from '../../components/Spacer';

const WorkoutDetailsScreen = ({navigation, route}) => {
    let workout = route.params.workout;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `Workout on ${DateFormatter(workout.workoutDate)}`
        })
      }, [])

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
            <View style={styles.inputContainer}>
                <Text h4 style={styles.title}>Exercises</Text>
                {workout.exerciseList.length > 0 ? (
                    <FlatList data={workout.exerciseList}
                        extraData={workout.exerciseList}
                        keyExtractor={(exercise) => {
                            return workout.exerciseList.findIndex((testItem) => testItem == exercise)
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
    button: {
        backgroundColor: "#d73352",
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18
    },
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