import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import OpportunitiesPage from './OpportunitiesPage';
import RankingPage from './RankingPage';
import ProfileScreen from './ProfileScreen';
import DonationPage from './DonationPage';
import ProfileCard from './ProfileCard';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    
    <BottomTab.Navigator>
      <BottomTab.Screen name="OpportunitiesPage" component={OpportunitiesPage} />
      <BottomTab.Screen name="DonationPage" component={DonationPage} />
      <BottomTab.Screen name="RankingPage" component={RankingPage} />
      <BottomTab.Screen name="Profile" component={ProfileCard} />
    </BottomTab.Navigator>
    
    
  );
}
const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#F0F0F0',
  }
    
});



