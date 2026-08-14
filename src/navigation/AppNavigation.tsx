import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../src/features/data/screens/DataList';
import LoginScreen from '../../src/features/auth/screens/LoginScreen';
import RegisterScreen from '../../src/features/auth/screens/RegisterScreen';
import Data from '../../src/features/auth/api/Api';
import Hook from '../features/auth/screens/Hooks';
import JwtScreen from '../../src/features/auth/api/JwtToken';

const Stack = createNativeStackNavigator();

export default function Navigation() {

   return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Welcome" component={WelcomeScreen}  />
        <Stack.Screen name="Login" component={LoginScreen} />
        
        
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Hook" component={Hook} />
        {/* <Stack.Screen name="Jwt" component={JwtScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
      

  );
}