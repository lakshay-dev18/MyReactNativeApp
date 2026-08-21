import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from '../../../../Practice/src/features/Screens/UserScreen';
import WelcomeScr from '../../../../Practice/src/features/Screens/WelcomeScreen';
import Profile from '../../../../Practice/src/features/Screens/addUser';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      <Tab.Screen name="Users" component={User} 
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
        ),
    }}/>
      <Tab.Screen name="Profile" component={Profile} 
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
        ),
    }}/>
    </Tab.Navigator>
  );
}

