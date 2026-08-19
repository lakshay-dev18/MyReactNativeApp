import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Practice from '../../../../../src/features/auth/screens/practice/practicehook2'
import WelcomeScreen from '../../../../../src/features/auth/screens/practice/PracticeNavigation'





const Stack = createNativeStackNavigator();

function Navigation(){
    
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= 'WelcomeScreen' component={WelcomeScreen}/>       
            {/* <Stack.Screen name= 'RefHook' component={RefHook}/>        */}
            <Stack.Screen name= 'Practice' component={Practice}/>       
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Navigation;