import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';

export default SetList = ({setList}) => {
    console.log(setList);
    return (
        <View style={styles.container}>
            { setList.length == 0 ? (
                null
            ) : (
                <>   
                    <View style={styles.dataRow}>
                        { setList[0].weight ? (
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
                    { setList.map( (set, index) => {
                        return (
                            <TouchableOpacity style={styles.dataRow} key={index}>
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
                            </TouchableOpacity>
                        )
                    })}
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5
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
});