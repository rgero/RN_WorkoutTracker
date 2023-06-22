import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddWorkoutScreen from '../screens/Workouts/AddWorkoutScreen';
import AddExerciseScreen from '../screens/Exercises/AddExerciseScreen';

const WorkoutStack = createNativeStackNavigator();
export default WorkoutFlow = () => {
  return (
        <WorkoutStack.Navigator>
          <WorkoutStack.Screen name="AddWorkout" component={AddWorkoutScreen} options={{ headerShown: false}} /> 
          <WorkoutStack.Screen name="AddExercise" component={AddExerciseScreen} options={{ headerShown: false}} /> 
        </WorkoutStack.Navigator>
  )
}