import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import UserDrawer from '../../../../Practice/src/features/Navigation/UserDrawer';
import User from '../../../../Practice/src/features/Screens/UserScreen';
import WelcomeScr from '../../../../Practice/src/features/Screens/WelcomeScreen';
import Profile from '../Screens/profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: '#94A3B8',

        tabBarStyle: {
          height: 65,
          paddingTop: 7,
          paddingBottom: 8,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >

      <Tab.Screen
        name="Users"
        component={User}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}