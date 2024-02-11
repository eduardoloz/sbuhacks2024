import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import dummy from "./screens/dummy";
import MainPage from "./screens/MainPage";

import { firebase } from '@react-native-firebase/app';

// Initialize Firebase
firebase.initializeApp();

const Stack = createNativeStackNavigator();





const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dummy" component={dummy} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

