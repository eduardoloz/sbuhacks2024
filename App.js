import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import FirstPage from "./screens/FirstPage";
import LoginPage from "./screens/LoginPage";
import MainPage from "./screens/MainPage";
import ProfileCard from "./screens/ProfileCard"
import OpportunitiesCard from "./screens/OpportunitiesCard"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileCard" component={ProfileCard} options={{ headerShown: false }} />
        <Stack.Screen name="OpportunitiesCard" component={OpportunitiesCard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

