import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text} from 'react-native-elements'
import { Alert, FlatList, StyleSheet} from 'react-native';

import ExerciseItem from '../components/ExerciseItem';
import ExerciseListItem from '../components/ExerciseListItem';

const ExerciseScreen = () => {
    const [exerciseList, setExerciseList] = useState([]);

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
                    setExerciseList( (prevExerciseList) => {
                        prevExerciseList.splice(targetIndex, 1);
                        return [...prevExerciseList];
                    });
                }
            }
        ])
    }

    const addHandler = ({reps, weight}) => {
        setExerciseList( [...exerciseList, {reps, weight}]);
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeArea}>
            <Text h2>Track your exercise</Text>
            <ExerciseItem onSubmit={addHandler}/>
            <FlatList data={exerciseList}
                extraData={exerciseList}
                keyExtractor={(exercise) => {
                    return exerciseList.findIndex((testItem) => testItem == exercise)
                }}
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                renderItem={
                    ({item, index}) => {
                        return <ExerciseListItem reps={item.reps} weight={item.weight} id={index} deleteItem={deleteHandler}/>
                    }
                }
                style={styles.list}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default ExerciseScreen