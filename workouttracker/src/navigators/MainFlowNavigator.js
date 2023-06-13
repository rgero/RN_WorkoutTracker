import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import WorkoutListScreen from '../screens/Workouts/WorkoutListScreen';
import AddWorkoutScreen from '../screens/Workouts/AddWorkoutScreen';

import {Context as AuthContext} from '../context/AuthContext';

export default DrawerNavigator = () => {
  const {state, signOut, tryLocalSignin} = React.useContext(AuthContext);

  React.useEffect(()=> {
    const processUser = async () => {
        tryLocalSignin();
    }
    processUser();
  }, [])
  
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
          { state.displayName ? (
            <View style={styles.displayName}>
              <DrawerItem label={state.displayName} />
              <Divider/>
            </View>
          ): (null)}
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => signOut()} />
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
  displayName: {
  }
})
