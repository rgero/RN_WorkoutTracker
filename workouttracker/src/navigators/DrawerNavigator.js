import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Context as AuthContext} from '../context/AuthContext';

import WorkoutListScreen from '../screens/Workouts/WorkoutListScreen';
import AddWorkoutScreen from '../screens/Workouts/AddWorkoutScreen';

export default DrawerNavigator = () => {
  const {state, signOut} = React.useContext(AuthContext);

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            { state.displayName ? (
              <View style={styles.displayName}>
                <DrawerItem label={state.displayName} />
                <Divider/>
              </View>
            ): (null)}
            <DrawerItemList {...props} />
          </SafeAreaView>
          <TouchableOpacity onPress={signOut}>
            <View style={styles.item}>
              <Text style={styles.label}>Logout</Text>
            </View>
          </TouchableOpacity>
      </DrawerContentScrollView>
    );
  }
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props=> <CustomDrawerContent {...props}/>} defaultStatus="closed">
      <Drawer.Screen name="View Workouts" component={WorkoutListScreen}/>
      <Drawer.Screen name="Add Workouts" component={AddWorkoutScreen}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawer: {flex: 1,  flexDirection: 'column', justifyContent: 'space-between' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
})
