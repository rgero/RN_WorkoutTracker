import { Card } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export default ExerciseItem = ({name, muscleGroup, notes, setList, id, deleteItem}) => 
{
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            {
                <View style={styles.exerciseSection}>
                    <View style={styles.dataRow}>
                        <View style={styles.headerCol}>
                            <Text>Muscle Group</Text>
                        </View>
                        <View style={styles.dataCol}>
                            <Text>{muscleGroup}</Text>
                        </View>
                    </View>
                    <View style={styles.dataRow}>
                        <View style={styles.headerCol}>
                            <Text>Notes</Text>
                        </View>
                        <View style={styles.dataCol}>
                            <Text>{notes}</Text>
                        </View>
                    </View>
                    <View style={styles.dataRow}>
                        <View style={styles.headerCol}>
                            <Text>Set List</Text>
                        </View>
                        <View style={styles.dataCol}>
                            {CreateSetListTable(setList)}
                        </View>
                    </View>
                </View>
            }
        </Card>
    )
}

const CreateSetListTable = (setList) => {
    return(
        <View>
            <View style={styles.dataRow}>
                { setList.weight ? (
                    <>
                        <View style={styles.setCol}>
                            <Text>Reps</Text>
                        </View>
                        <View style={styles.setCol}>
                            <Text>Weight</Text>
                        </View>
                    </>
                ) : ( 
                    <View style={styles.setNoWeight}>
                        <Text>Reps</Text>
                    </View>
                )}
            </View>
            { setList.map( (set) => {
                return (
                    <View style={styles.dataRow} key={`${set.reps}_${set.weight}`}>
                        { set.weight ? (
                            <>
                                <View style={styles.setCol}>
                                    <Text>{set.reps}</Text>
                                </View>
                                <View style={styles.setCol}>
                                    <Text>{set.weight}</Text>
                                </View>
                            </>
                        ) : ( 
                            <View style={styles.setNoWeight}>
                                <Text>{set.reps}</Text>
                            </View>
                        )}
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    headerCol: {
        width: "25%",
        fontWeight: 'bold',
        textAlign: 'left'
    },
    dataCol: {
        width: "75%",
    },
    exerciseSection: {
        flex: 1,
        alignItems: 'center'
    },
    setCol: {
        width: "50%",
        textAlign: 'center'
    },
    setNoWeight: {
        width: "100%",
        justifyContent: 'center',
        textAlign: 'center'
    }
})