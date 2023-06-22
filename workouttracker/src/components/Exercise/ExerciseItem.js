import { Card } from 'react-native-elements'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import SetList from '../Set/SetList';

export default ExerciseItem = ({currentExercise}) => 
{
    const {name, muscleGroup, notes, setList} = currentExercise;

    return (
        <Card style={styles.card}>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            {
                <View style={styles.exerciseSection}>
                    <View style={styles.dataGroup}>
                        <View>
                            <Text h4>Muscle Group</Text>
                        </View>
                        <View>
                            <Text>{muscleGroup}</Text>
                        </View>
                    </View>
                    <View style={styles.dataGroup}>
                        <View>
                            <Text h4>Notes</Text>
                        </View>
                        <View>
                            <Text>{notes}</Text>
                        </View>
                    </View>
                    <View style={styles.dataGroup}>
                        <View>
                            <Text h4>Set List</Text>
                        </View>
                        <View>
                            {setList.length == 0 ? (
                                <Text>No Set List Defined</Text>
                            ): (
                                <SetList setList={setList}/>
                            )}
                        </View>
                    </View>
                </View>
            }
        </Card>
    )
}

const styles = StyleSheet.create({
    dataGroup: {
        paddingBottom: 10
    }
})