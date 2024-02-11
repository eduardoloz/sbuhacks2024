import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Ionicons 아이콘 라이브러리 사용

import OpportunitiesPage from './OpportunitiesPage';
import RankingPage from './RankingPage';
import ProfileScreen from './ProfileScreen';
import DonationPage from './DonationPage';

const BottomTab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <BottomTab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#E73215', // 활성 탭의 아이콘 색상
        tabBarInactiveTintColor: 'gray', // 비활성 탭의 아이콘 색상
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
        
          if (route.name === 'OpportunitiesPage') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'DonationPage') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'RankingPage') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'; // 이 부분을 이미 수정했습니다.
          }
        
          // 아이콘 이름에 기반하여 Ionicons를 반환합니다.
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      
    >
      <BottomTab.Screen name="OpportunitiesPage" component={OpportunitiesPage} options={{ tabBarLabel: 'Opportunities' }} />
      <BottomTab.Screen name="DonationPage" component={DonationPage} options={{ tabBarLabel: 'Donate' }} />
      <BottomTab.Screen name="RankingPage" component={RankingPage}  options={{ tabBarLabel: 'Ranking' }}/>
      <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }}/>
    </BottomTab.Navigator>
  );
}
