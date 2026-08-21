import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from '../../../../Practice/src/features/Screens/UserScreen'
import WelcomeScr from '../../../../Practice/src/features/Screens/WelcomeScreen'
import BottomTab from '../../../../Practice/src/features/Navigation/BottomTabNavigator'

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="WelcomeScr" component={WelcomeScr} />
                <Stack.Screen name="Main" component={BottomTab} />
                {/* <Stack.Screen name="User" component={User} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}