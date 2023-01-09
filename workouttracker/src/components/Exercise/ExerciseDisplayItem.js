import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';

const ExerciseDisplayItem = ({name, muscleGroup, notes, setList, id, deleteItem}) => {
    return (
        <View style={styles.item}>
            <View style={styles.exerciseDisplay}>
                <Text h4>{name} - {muscleGroup}</Text>
                <Text>{notes}</Text>
                <View>
                    <View style={styles.setHeader}>
                        <Text h4>Reps</Text>
                        <Text h4>Weight</Text>
                    </View>
                    <FlatList data={setList}
                        extraData={setList}
                        keyExtractor={(set) => {
                            return setList.findIndex((testItem) => testItem == set)
                        }}
                        horizontal = {false}
                        showsHorizontalScrollIndicator = {false}
                        renderItem={
                            ({item}) => {
                                return (
                                    <View style={styles.setItem}>
                                        <Text>{item.reps}</Text>
                                        <Text>{item.weight}</Text>
                                    </View>
                                )
                            }
                        }
                    />
                </View>
            </View>
            <TouchableOpacity onPress={()=> {deleteItem(id)}}>
                <FontAwesome5 name="trash" size={30} color="black" style={styles.trash}/>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    trash: {
        flex: 1,
        alignItems: "center"
    },
    exerciseDisplay: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column"
    },
    setHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    setItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "gray",
        textAlign: "center"
    },
})

export default ExerciseDisplayItem