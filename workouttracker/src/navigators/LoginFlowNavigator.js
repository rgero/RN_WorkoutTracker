import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '../screens/Authentication/SignUpScreen'
import LoginScreen from '../screens/Authentication/LoginScreen'

const LoginFlowStack = createNativeStackNavigator();
export default LoginFlow = () => {
  return (
        <LoginFlowStack.Navigator>
          <LoginFlowStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} /> 
          <LoginFlowStack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false}} /> 
        </LoginFlowStack.Navigator>
  )
}