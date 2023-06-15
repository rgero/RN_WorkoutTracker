import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import WorkoutDetailsScreen from '../screens/Workouts/WorkoutDetailsScreen';

export default AuthenticatedNavigator = () => {

    const AppStack = createNativeStackNavigator()
    return (
        <AppStack.Navigator initialRouteName="Drawer">
          <AppStack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false}}/>
          <AppStack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} options={{ headerShown: false}}/>
        </AppStack.Navigator>
    )
}
