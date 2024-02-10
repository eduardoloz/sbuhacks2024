import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

<<<<<<< HEAD
import dummy from "./screens/dummy";
import MainPage from "./screens/MainPage";
=======
// import dummyScreen from './screens/'
import FeedScreen from './screens/FeedScreen';
import CreateScreen from './screens/CreateScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
>>>>>>> c4d23e6 (tried to add buttons)

const Stack = createNativeStackNavigator();

// // code for the nextPage button
// const handleSubmit = () => {


// };


//export default function App() {
const App = () => {

  // const [username, setUsername] = useState('');

  // // code for the Welcome screen
  // return (
  //   <View style={styles.container}>
  //     <Text>Welcome! Please press the button below:</Text>
  //     {/* <Button title="Submit" onPress={handleSubmit} /> */}
  //     <Button title="Next" 
  //             onPress={() => navigation.navigate('ProfileScreen')} />
  //   </View>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dummy" component={dummy} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});



export default App;
>>>>>>> c4d23e6 (tried to add buttons)
