import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import CreateScreen from './CreateScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import Leaderboard from './board';

const BottomTab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feed" component={FeedScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Leaderboard" component={Leaderboard} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
