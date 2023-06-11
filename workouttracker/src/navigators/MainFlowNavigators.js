
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Ionicons } from '@expo/vector-icons';

const MainFlow = createBottomTabNavigator();
export default MainFlowTabs = () => {
  return (
    <MainFlow.Navigator>
      <MainFlow.Screen name="TrackFlowList" 
        component={TrackFlow} 
        options={
          {
            title: "Tracks",
            tabBarIcon: ({color, size}) => {
              <Ionicons name="add-circle" size={size} color={color} />
            }
          }
        }
      />
      <MainFlow.Screen name="TrackCreate" 
        component={TrackCreateScreen} 
        options={{ 
          headerShown: false, 
          title: "Create Track",
          tabBarIcon: ({color, size}) => {
            <Ionicons name="add-circle" size={size} color={color} />
          }
        }}/>
      <MainFlow.Screen name="Account" component={AccountScreen} options={{ headerShown: false}}/>
    </MainFlow.Navigator>
  )
}