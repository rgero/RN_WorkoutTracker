import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text} from 'react-native-elements'
import { Alert, FlatList, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import ExerciseListItem from '../components/ExerciseListItem';

const ExerciseListScreen = () => {
    const navigation = useNavigation();
    const [exerciseList, setExerciseList] = useState([]);

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
                    setExerciseList( (prevExerciseList) => {
                        prevExerciseList.splice(targetIndex, 1);
                        return [...prevExerciseList];
                    });
                }
            }
        ])
    }

    const addHandler = (newExercise) => {
        setExerciseList( [...exerciseList, newExercise]);
    }

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Track your exercise</Text>
            <Button title="Add an Exercise" onPress={()=> {navigation.navigate("AddExerciseScreen", {onSubmit: addHandler})}} />
            <FlatList data={exerciseList}
                extraData={exerciseList}
                keyExtractor={(exercise) => {
                    return exerciseList.findIndex((testItem) => testItem == exercise)
                }}
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                renderItem={
                    ({item, index}) => {
                        return <ExerciseListItem name={item.name} muscleGroup={item.muscleGroup} deleteItem={deleteHandler}/>
                    }
                }
            />
        </SafeAreaView>
    )

}

export default ExerciseListScreen