
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import WorkoutListScreen from '../screens/Workouts/WorkoutListScreen';
import AddWorkoutScreen from '../screens/Workouts/AddWorkoutScreen';

const MainFlow = createBottomTabNavigator();
export default MainFlowTabs = () => {
  return (
    <MainFlow.Navigator>
      <MainFlow.Screen name="WorkoutListScreen" 
        component={WorkoutListScreen} 
        options={
          {
            title: "Workouts",
            tabBarIcon: ({color, size}) => {
              <Ionicons name="add-circle" size={size} color={color} />
            }
          }
        }
      />
      <MainFlow.Screen name="AddWorkoutScreen" 
        component={AddWorkoutScreen} 
        options={{ 
          headerShown: false, 
          title: "Create Workout",
          tabBarIcon: ({color, size}) => {
            <Ionicons name="add-circle" size={size} color={color} />
          }
        }}/>
      {/* <MainFlow.Screen name="Account" component={AccountScreen} options={{ headerShown: false}}/> */}
    </MainFlow.Navigator>
  )
}