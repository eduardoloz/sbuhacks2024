import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import FeedScreen from './screens/FeedScreen';
import CreateScreen from './screens/CreateScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Feed') {
              iconName = 'home-outline';
              } else if (route.name === 'Search') {
              iconName = 'search-outline';
              } else if (route.name === 'Create') {
              iconName = 'add-circle-outline';
              } else if (route.name === 'Profile') {
              iconName = 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
          <BottomTab.Screen name = "Feed" component={FeedScreen} />
          <BottomTab.Screen name = "Search" component={SearchScreen} />
          <BottomTab.Screen name = "Create" component={CreateScreen} />
          <BottomTab.Screen name = "Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
      
      
    

      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>hahaha does this work</Text>
        <StatusBar style="auto" />
      </View> */}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
