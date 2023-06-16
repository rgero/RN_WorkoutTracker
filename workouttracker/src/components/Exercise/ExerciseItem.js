import { Card } from 'react-native-elements'
import { StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default ExerciseItem = ({name, muscleGroup, notes, setList, id, deleteItem}) => 
{
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            {
                <Grid>
                    <Row>
                        <Col size={25}><Text>Muscle Group</Text></Col>
                        <Col size={75}><Text>{muscleGroup}</Text></Col>
                    </Row>
                    <Row>
                        <Col size={25}><Text>Notes</Text></Col>
                        <Col size={75}><Text>{notes}</Text></Col>
                    </Row>
                    <Row>
                        <Col size={25}><Text>Set List</Text></Col>
                        <Col size={75}>{CreateSetListTable(setList)}</Col>
                    </Row>
                </Grid>
            }
        </Card>
    )
}

const CreateSetListTable = (setList) => {
    return(
        <Grid>
            <Row>
                <Col size={50}><Text>Reps</Text></Col>
                { setList.weight ? (
                    <Col size={50}><Text>Weight</Text></Col>
                ) : ( 
                    null 
                )}
            </Row>
            { setList.map( (set) => {
                return (
                    <Row key={`${set.reps}_${set.weight}`}>
                        <Col size={50}><Text>{set.reps}</Text></Col>
                        { set.weight ? (
                            <Col size={50}><Text>{set.weight}</Text></Col>
                        ) : ( 
                            null 
                        )}
                    </Row>
                )
            })}
        </Grid>
    )
}

const styles = StyleSheet.create({
    head: {  backgroundColor: '#f1f8ff'  },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    text: { textAlign: 'center' },
    wrapper: { flexDirection: 'row' },
})