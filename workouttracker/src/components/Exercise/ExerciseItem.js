import { FlatList, View, Text} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Col, Row} from '../helpers/Grids';

export default ExerciseItem = ({name, muscleGroup, notes, setList, id, deleteItem}) => 
{

    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            {
                <View style={styles.app}>
                    <Row>
                        <Col numRows={1}>
                            <Text>Muscle Group</Text>
                        </Col>
                        <Col numRows={3}>
                            <Text>{muscleGroup}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col numRows={1}>
                            <Text>Notes</Text>
                        </Col>
                        <Col numRows={3}>
                            <Text>{notes}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col numRows={1}>
                            <Text>Set List</Text>
                        </Col>
                        <Col numRows={3}>
                            <>
                                <View style={styles.setHeader}>
                                    <Text h4>Reps</Text>
                                    { setList[0].weight ? (
                                            <Text h4>Weight</Text>
                                        ) : ( 
                                            null 
                                        )
                                    }
                                    
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
                                                    { item.weight ? (
                                                        <Text>{item.weight}</Text>
                                                    ) : ( 
                                                        null
                                                    )}
                                                    
                                                </View>
                                            )
                                        }
                                    }
                                />
                            </>
                        </Col>
                    </Row>
                </View>
            }
        </Card>
    )
}

const styles = {
    app: {
        flex: 4,
        width: 400,
        alignItems: "center",
        justifyContent: "center"
    }
}