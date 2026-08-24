import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScr from '../../../../Practice/src/features/Screens/WelcomeScreen';
import BottomTab from '../../../../Practice/src/features/Navigation/BottomTabNavigator';
import UserDetails from '../../../../Practice/src/features/Screens/UserDetails';
import UserAdd from '../Screens/UserAdd';
import Profile from '../../../../Practice/src/features/Screens/profile';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="WelcomeScr"
          component={WelcomeScr}
        />

        <Stack.Screen
          name="Main"
          component={BottomTab}
        />

        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
        />

        <Stack.Screen
          name="AddUser"
          component={UserAdd}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}