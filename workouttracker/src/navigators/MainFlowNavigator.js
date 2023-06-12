import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import WorkoutListScreen from '../screens/Workouts/WorkoutListScreen';
import AddWorkoutScreen from '../screens/Workouts/AddWorkoutScreen';

import {Context as AuthContext} from '../context/AuthContext';

export default DrawerNavigator = () => {
  const {signOut} = React.useContext(AuthContext);
  
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
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
