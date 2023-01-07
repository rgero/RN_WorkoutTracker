import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const SetItem = ({onSubmit}) => {
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")
    const [error, setError] = useState("")

    const onSubmitPress = () => {
        if (reps === "")
        {
            setError("Form must be filled out")
            return
        }
        onSubmit({reps, weight});
        setReps("")
        setWeight("")
        setError("")
    }

    return (
        <View style={styles.Form}>
            <View style={styles.inputField}>
                <TextInput value={reps} placeholder="Reps" 
                    onChangeText={setReps}
                    keyboardType="numeric"
                    style={styles.numericInput}
                />
                <TextInput value={weight} placeholder="Weight" 
                    onChangeText={setWeight} 
                    keyboardType="numeric"
                    style={styles.numericInput}
                />
                <TouchableOpacity onPress={onSubmitPress}>
                        <Ionicons name="add-circle-sharp" size={55} color="black" />
                </TouchableOpacity>
            </View>
            { error ? (
                <View style={styles.errorField}>
                    <Text h3 style={styles.error}>{error}</Text>
                </View>
            ) : ( 
                null
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    numericInput: {
        fontSize: 20,
        paddingVertical: 5
    },
    addButton: {
        justifyContent: "center"
    },  
    errorField: {
        alignSelf: "center",
    },
    error: {
        color: "red"
    },
    Form: {
        padding: 10
    }
})

export default SetItem