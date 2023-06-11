import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Spacer from './Spacer';

const NavLink = ({ text, routeName }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    link: {
      color: 'blue',
      fontSize: 22
    }
  });
export default NavLink