import { Card } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';
import SetList from '../Set/SetList';

export default ExerciseItem = (currentExercise) => 
{
    const {name, muscleGroup, notes, setList} = currentExercise;

    console.log(setList);

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
                        {/* <View style={styles.dataCol}>
                            <SetList setList={setList}/>
                        </View> */}
                    </View>
                </View>
            }
        </Card>
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
    }
})