import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({ text, routeName }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity activeOpacity={.5} onPress={() => navigation.navigate(routeName)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d73352",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  }
})

export default NavLink