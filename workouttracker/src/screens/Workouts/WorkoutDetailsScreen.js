import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements'
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DateFormatter from '../../components/helpers/DateFormatter';

import ExerciseItem from '../../components/Exercise/ExerciseItem';
import Spacer from '../../components/Spacer';
import { ScreenStyles } from '../../styles/ScreenStyles';

const WorkoutDetailsScreen = ({navigation, route}) => {
    let workout = route.params.workout;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `Workout on ${DateFormatter(workout.workoutDate)}`
        })
      }, [])

    return (
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'always' }} style={ScreenStyles.viewport}>
            <View style={styles.exerciseSegment}>
                <Text h4>Notes</Text>
                {workout.notes != "" ? (
                    <Text>{workout.notes}</Text>
                ) : ( 
                    <Text>No notes</Text>
                )}
            </View>
            <View style={styles.exerciseSegment}>
                <Text h4>Exercises</Text>
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
                                    <ExerciseItem name={item.name} muscleGroup={item.muscleGroup} setList={item.setList} notes={item.notes}/>
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
    exerciseSegment : {
        paddingBottom: 10
    }
})

export default WorkoutDetailsScreen